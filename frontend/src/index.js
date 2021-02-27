import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'
import './assets/css/bootstrap.min.css'
import './index.css'
import './assets/css/header.css'
import reportWebVitals from './reportWebVitals'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

reportWebVitals()
