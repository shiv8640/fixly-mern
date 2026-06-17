import { Link } from "react-router-dom";

function Navbar() {

  let user = null;

  try {
    const userData = localStorage.getItem("user");

    if (userData && userData !== "undefined") {
      user = JSON.parse(userData);
    }
  } catch (error) {
    console.log("User Parse Error");
  }

  return (
    <nav className="navbar">
      <div className="navbar-inner">

        <div className="navbar-logo">
          <div className="navbar-logo-icon">F</div>
          <span className="navbar-logo-text">
            Fixly
          </span>
        </div>

        <div className="navbar-links">

          <Link to="/" className="navbar-link">
            Home
          </Link>

          <Link to="/services" className="navbar-link">
            Services
          </Link>

          {!user && (
            <>
              <Link to="/login" className="navbar-link">
                Login
              </Link>

              <Link to="/register" className="navbar-link">
                Sign Up
              </Link>
            </>
          )}

          <Link to="/bookings" className="navbar-link">
            Bookings
          </Link>

          {user && (
            <span
              style={{
                color: "white",
                marginLeft: "15px",
                fontWeight: "bold",
              }}
            >
              👤 {user.name}
            </span>
          )}

        </div>

      </div>
    </nav>
  );
}

export default Navbar;