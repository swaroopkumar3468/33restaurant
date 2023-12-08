import {Link} from 'react-router-dom'

import './index.css' // Import the CSS file

const Header = () => (
  <header>
    <nav>
      <Link to="/" className="header-link">
        UNI Resto Cafe
      </Link>
      <Link to="/cart" className="header-link">
        🛒
        <p>0</p>
      </Link>
      <button type="button">Logout</button>
    </nav>
  </header>
)

export default Header
