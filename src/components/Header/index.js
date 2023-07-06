// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <ul className="nav-bar-container">
    <li className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="wave-logo"
      />
      <h1 className="wave-heading"> Wave </h1>
    </li>
    <li className="menu-container">
      <Link to="/" className="heading">
        Home
      </Link>
      <Link to="/about" className="heading">
        About
      </Link>
      <Link to="/contact" className="heading">
        Contact
      </Link>
    </li>
  </ul>
)

export default Header
