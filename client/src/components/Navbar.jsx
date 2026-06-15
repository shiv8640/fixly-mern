import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">

        <div className="navbar-logo">
          <div className="navbar-logo-icon">F</div>
          <span className="navbar-logo-text">Fixly</span>
        </div>

        <div className="navbar-links">
          <Link to="/" className="navbar-link">
            Home
          </Link>

          <Link to="/services" className="navbar-link">
            Services
          </Link>

          <Link to="/login" className="navbar-link">
            Login
          </Link>

          <Link to="/register" className="navbar-link">
            Sign Up
          </Link>

          <Link to="/bookings" className="navbar-link">
            Bookings
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;