// Write your JS code here
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <div className="nav-bar-mobile-logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="website-logo"
        />
        <button className="nav-mobile-btn" type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="nav logout"
            className="nav-bar-img"
          />
        </button>
      </div>

      <div className="nav-content nav-bar-large-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website logo"
          className="website-logo"
        />
        <ul className="nav-menu">
          <li className="nav-menu-item">Home</li>
          <li className="nav-menu-item">Products</li>
          <li className="nav-menu-item">cart</li>
        </ul>
        <button className="logout-desktop-btn" type="button">
          Logout
        </button>
      </div>
    </div>
    <div className="nav-menu-mobile">
      <ul className="nav-menu-list-mobile">
        <li className="nav-menu-item-mobile">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
            className="nav-bar-img"
          />
        </li>
        <li className="nav-menu-item-mobile">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
            className="nav-bar-img"
          />
        </li>
        <li className="nav-menu-item-mobile">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
            className="nav-bar-img"
          />
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
