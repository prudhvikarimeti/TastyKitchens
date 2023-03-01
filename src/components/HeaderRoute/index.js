import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillCloseCircle} from 'react-icons/ai'

import './index.css'

const HeaderRoute = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <>
      <nav className="nav-header">
        <div className="nav-content">
          <div className="nav-bar-mobile-logo-container">
            <Link to="/" className="nav-link">
              <div className="header-logo-container">
                <img
                  src="https://res.cloudinary.com/dy8cli8om/image/upload/v1675685366/Frame_274kitchenhat_jzn8j7.png"
                  alt="website logo"
                  className="website-logo-mobile"
                />
                <p className="logo-name">Tasty Kitchens</p>
              </div>
            </Link>
            <Popup
              modal
              trigger={
                <button type="button" className="hamburger-icon-button">
                  <GiHamburgerMenu size="30px" />
                </button>
              }
              className="popup-content"
            >
              {close => (
                <div className="menu-container">
                  <li className="menu-items">
                    <Link to="/" className="nav-link" onClick={() => close()}>
                      <button type="button" className="name">
                        Home
                      </button>
                    </Link>
                    <Link
                      to="/cart"
                      className="nav-link"
                      onClick={() => close()}
                    >
                      <button type="button" className="name">
                        Cart
                      </button>
                    </Link>
                    <button
                      type="button"
                      className="logout-button"
                      onClick={onClickLogout}
                    >
                      Logout
                    </button>
                  </li>
                  <button
                    type="button"
                    className="close-icon"
                    onClick={() => close()}
                  >
                    <AiFillCloseCircle size="20px" />
                  </button>
                </div>
              )}
            </Popup>
          </div>

          <div className="nav-bar-large-container">
            <Link to="/" className="nav-link">
              <div className="header-logo-container">
                <img
                  src="https://res.cloudinary.com/dy8cli8om/image/upload/v1675685366/Frame_274kitchenhat_jzn8j7.png"
                  className="website-logo"
                  alt="website logo"
                />
                <p className="logo-name">Tasty Kitchens</p>
              </div>
            </Link>
            <ul className="nav-menu">
              <li className="nav-menu-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-menu-item">
                <Link to="/cart" className="nav-link">
                  Cart
                </Link>
              </li>
            </ul>
            <button
              type="button"
              className="logout-desktop-btn"
              onClick={onClickLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}
export default withRouter(HeaderRoute)
