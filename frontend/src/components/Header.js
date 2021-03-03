import React from 'react'
import { Link } from 'react-router-dom'
import SearchBox from './SearchBox'
import logo from '../assets/img/logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { MenuIcon, CloseIcon } from './icons'

const Header = () => {
  const { open } = useSelector((state) => state.header)
  const { userInfo } = useSelector((state) => state.userLogin)

  const dispatch = useDispatch()

  return (
    <header className="header">
      <div className="header__container">
        <img src={logo} alt="" className="header__img" />

        <Link to="/" className="header__logo">
          {userInfo?.email || 'MernShop'}
        </Link>
        <SearchBox />
        <div
          className="header__toggle"
          onClick={() => dispatch({ type: 'TOGGLE_SIDEBAR' })}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div>
    </header>
  )
}

export default Header
