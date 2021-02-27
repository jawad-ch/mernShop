import React from 'react'
import { Link } from 'react-router-dom'
import SearchBox from './SearchBox'
import logo from '../assets/img/logo.png'
import { useDispatch, useSelector } from 'react-redux'

const Header = () => {
  const { open } = useSelector((state) => state.header)

  const dispatch = useDispatch()

  return (
    <header className="header">
      <div className="header__container">
        <img src={logo} alt="" className="header__img" />

        <Link to="/" className="header__logo">
          MernShop
        </Link>
        <SearchBox />
        <div
          className="header__toggle"
          onClick={() => dispatch({ type: 'TOGGLE_SIDEBAR' })}
        >
          <i className={`bx bx-${open ? 'x' : 'menu'}`}></i>
        </div>
      </div>
    </header>
  )
}

export default Header
