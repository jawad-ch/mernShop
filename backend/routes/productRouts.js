import express from 'express'
import {
  getProducts,
  getproductById,
  deleteProduct,
  updateProduct,
  createProduct,
  createProductReview,
} from '../controllers/productController.js'
import { protect, admin } from '../middleware/authMiddlewear.js'

const router = express.Router()

router.route('/').get(getProducts).post(protect, admin, createProduct)
router.route('/:id/reviews').post(protect, createProductReview)
router
  .route('/:id')
  .get(getproductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct)

export default router
