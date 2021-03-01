import Product from '../models/productModel.js'
import HttpError from '../utils/httpError.js'

const getProducts = async (req, res) => {
  const pageSize = 5
  const page = Number(req.query.pageNumber) || 1

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {}

  const count = await Product.countDocuments({ ...keyword })

  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ products, page, pages: Math.ceil(count / pageSize) })
}

const getproductById = async (req, res, next) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    res.json(product)
  } else {
    next(new HttpError('product not found', 404))
  }
}

const deleteProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    await product.remove()
    res.json({ message: 'product removed' })
  } else {
    next(new HttpError('product not found', 404))
  }
}

const createProduct = async (req, res) => {
  const product = new Product({
    name: 'sample name',
    price: 0,
    user: req.user._id,
    image: '/images/sample.jpg',
    brand: 'sample brand',
    category: 'sample category',
    countInStock: 0,
    numReviews: 0,
    description: 'sample description',
  })

  const createdProduct = await product.save()

  res.status(201).json(createdProduct)
}

const updateProduct = async (req, res, next) => {
  const {
    name,
    price,
    image,
    brand,
    category,
    countInStock,
    description,
  } = req.body

  const product = await Product.findById(req.params.id)

  if (product) {
    product.name = name || product.name
    product.price = price || product.price
    product.image = image || product.image
    product.brand = brand || product.brand
    product.category = category || product.category
    product.countInStock = countInStock || product.countInStock
    product.description = description || product.description

    const updatedProduct = await product.save()

    res.json(updatedProduct)
  } else {
    next(new HttpError('product not found', 404))
  }
}

const createProductReview = async (req, res, next) => {
  const { rating, comment } = req.body

  const product = await Product.findById(req.params.id)

  if (product) {
    const alreadyReviewed = product.reviews.find(
      (review) => review.user.toString() === req.user._id.toString()
    )

    if (alreadyReviewed) {
      next(new HttpError('Product already reviewed', 400))
    }

    const review = {
      user: req.user._id,
      name: req.user.name,
      rating: Number(rating),
      comment,
    }

    product.reviews.push(review)
    product.numReviews = product.reviews.length
    product.rating =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length

    product.save()
    res.status(201).json({ message: 'Review added' })
  } else {
    next(new HttpError('Product not found', 404))
  }
}

export {
  getProducts,
  getproductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
}
