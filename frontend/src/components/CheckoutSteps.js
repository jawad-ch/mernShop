import React from 'react'
import { Link } from 'react-router-dom'

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  const Step = ({ completed, to, desc }) => {
    return (
      <li className={`${completed ? 'completed' : ''}`}>
        <div className="step">
          <div className="step-number">
            <span></span>
          </div>
          {completed ? (
            <Link to={to} className="step-description">
              {desc}
            </Link>
          ) : (
            <div className={`step-description ${!completed ? 'disable' : ''}`}>
              {desc}
            </div>
          )}
        </div>
      </li>
    )
  }

  const barWidth = (arr) =>
    arr.reduce((sum, value) => {
      if (value) {
        sum += 33.3
      }
      return sum
    }, 0)

  return (
    <div className="steps">
      <ul className="steps-container">
        <Step to="/shipping" desc="Shipping" completed={step1 ? true : false} />
        <Step to="/payment" desc="Payment" completed={step2 ? true : false} />
        <Step
          to="/placeOrder"
          desc="PlaceOrder"
          completed={step3 ? true : false}
        />
      </ul>
      <div
        className="step-bar"
        style={{ width: `${barWidth([step1, step2, step3])}%` }}
      ></div>
    </div>
  )
}

export default CheckoutSteps
