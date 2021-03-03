import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { logout } from '../actions/userActions'
import {
  LogoIcon,
  DashboardIcon,
  HomeIcon,
  UserIcon,
  CartIcon,
  OrderIcon,
  LoginIcon,
  LogoutIcon,
} from './icons'
const SideBar = () => {
  const { userInfo } = useSelector((state) => state.userLogin)

  const history = useHistory()

  const dispatch = useDispatch()

  const { open } = useSelector((state) => state.header)

  const NavLink = ({ logo, Icon, title, dropDown }) => {
    return (
      <>
        {/* <div > */}
        <Icon />
        {/* </div> */}
        <span className={`side__${logo ? 'logo-name' : 'name'}`}>{title}</span>
        {dropDown ? (
          <i
            className={`bx ${dropDown.icon} side__icon side__dropdown-icon`}
          ></i>
        ) : (
          ''
        )}
      </>
    )
  }

  return (
    <div className={`side ${open ? 'show-menu' : ''}`}>
      <aside className="side__container">
        <div>
          <Link to="/" className="side__link side__logo">
            <NavLink logo Icon={LogoIcon} title="MernShop" />
          </Link>

          <div className="side__list">
            {userInfo && userInfo.isAdmin && (
              <div className="side__items">
                <h3 className="side__subtitle">Admin</h3>
                <div className="side__dropdown">
                  <div className="side__link">
                    <NavLink
                      dropDown={{
                        icon: 'bx-chevron-down',
                      }}
                      Icon={DashboardIcon}
                      title="Dashboard"
                    />
                  </div>

                  <div className="side__dropdown-collapse">
                    <div className="side__dropdown-content">
                      <Link
                        to="/admin/userList"
                        className="side__dropdown-item"
                      >
                        Users
                      </Link>
                      <Link
                        to="/admin/productList"
                        className="side__dropdown-item"
                      >
                        Products
                      </Link>
                      <Link
                        to="/admin/orderList"
                        className="side__dropdown-item"
                      >
                        Orders
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="side__items">
              <h3 className="side__subtitle">Profile</h3>

              <Link to="/" className="side__link">
                <NavLink Icon={HomeIcon} title="Home" />
              </Link>
              <div className="side__dropdown">
                <div className="side__link">
                  <NavLink
                    dropDown={{
                      icon: 'bx-chevron-down',
                    }}
                    Icon={UserIcon}
                    title="Account"
                  />
                </div>

                <div className="side__dropdown-collapse">
                  <div className="side__dropdown-content">
                    {userInfo ? (
                      <Link to="/profile" className="side__dropdown-item">
                        My Account
                      </Link>
                    ) : (
                      <Link to="/login" className="side__dropdown-item">
                        login
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="side__items">
              <h3 className="side__subtitle">Shop</h3>

              <Link to="/cart" className="side__link">
                <NavLink Icon={CartIcon} title="Cart" />
              </Link>
              <Link to="/profile" className="side__link">
                <NavLink Icon={OrderIcon} title="My Orders" />
              </Link>
            </div>
          </div>
        </div>

        {userInfo ? (
          <div
            className="side__link side__logout"
            onClick={() => dispatch(logout(history))}
          >
            <NavLink Icon={LogoutIcon} title="Log Out" />
          </div>
        ) : (
          <Link to="/login" className="side__link side__logout">
            <NavLink Icon={LoginIcon} title="Login" />
          </Link>
        )}
      </aside>
    </div>
  )
}

export default SideBar
