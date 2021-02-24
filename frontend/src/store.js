import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  productDetailsReducer,
  productListReducer,
  deleteProductReducer,
  createProductReducer,
  updateProductReducer,
  createProductReviewReducer,
} from './reducers/productReducer'
import { cartReducer } from './reducers/cartReducers'
import {
  loginReducer,
  registerReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer,
} from './reducers/userReducers'
import {
  orderCreateReducer,
  orderDetailsReduser,
  orderPayReduser,
  orderListMyReduser,
  orderListReduser,
  orderDeliverReduser,
} from './reducers/orderReducers'

const reducer = combineReducers({
  createProduct: createProductReducer,
  productList: productListReducer,
  productDetails: productDetailsReducer,
  createProductReview: createProductReviewReducer,
  updateProduct: updateProductReducer,
  deleteProduct: deleteProductReducer,
  cart: cartReducer,
  userLogin: loginReducer,
  userRegister: registerReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReduser,
  orderPay: orderPayReduser,
  orderListMy: orderListMyReduser,
  orderList: orderListReduser,
  orderDeliver: orderDeliverReduser,
})

const itemsFromLocalStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const userInfoFromLocalStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const shippingAddressFromLocalStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {}

const paymenMethodFromLocalStorage = localStorage.getItem('paymenMethod')
  ? JSON.parse(localStorage.getItem('paymenMethod'))
  : 'null'

const initialState = {
  cart: {
    cartItems: itemsFromLocalStorage,
    shippingAddress: shippingAddressFromLocalStorage,
    paymentMethod: paymenMethodFromLocalStorage,
  },
  userLogin: {
    userInfo: userInfoFromLocalStorage,
  },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
