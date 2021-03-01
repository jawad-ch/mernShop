import Order from '../models/orderModel.js'
import HttpError from '../utils/httpError.js'

export const addOrderItems = async (req, res, next) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body
  if (orderItems && orderItems.length === 0) {
    next(new HttpError('No order Items', 404))
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    })

    const createOrder = await order.save()

    res.status(200).json(createOrder)
  }
}

export const getOrderById = async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    'user',
    'name email'
  )

  if (order) {
    res.json(order)
  } else {
    next(new HttpError('Order Not found', 404))
  }
}

export const updateOrderToPaid = async (req, res) => {
  const order = await Order.findById(req.params.id)

  if (order) {
    order.isPaid = true
    order.paidAt = Date.now()
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address,
    }

    const updatedOrder = await order.save()
    res.json(updatedOrder)
  } else {
    next(new HttpError('Order Not found', 404))
  }
}

export const updateOrderToDelivered = async (req, res) => {
  const order = await Order.findById(req.params.id)

  if (order) {
    order.isDelivered = true
    order.deliveredAt = Date.now()

    const updatedOrder = await order.save()
    res.json(updatedOrder)
  } else {
    next(new HttpError('Order Not found', 404))
  }
}

export const getMyOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user._id })

  res.json(orders)
}

export const getAllOrders = async (req, res) => {
  const orders = await Order.find({}).populate('user', 'id name')

  res.json(orders)
}
