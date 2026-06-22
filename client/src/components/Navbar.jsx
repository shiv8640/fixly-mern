import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  let user = null;

  try {
    const userData = localStorage.getItem("user");

    if (userData && userData !== "undefined") {
      user = JSON.parse(userData);
    }
  } catch (error) {
    console.log("User Parse Error");
  }

  // Auto close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "/";
  };

  return (
    <>
      {/* Overlay */}
      {menuOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <nav className="navbar">
        <div className="navbar-inner">

          {/* Logo */}
          <div className="navbar-logo">
            <div className="navbar-logo-icon">F</div>

            <span className="navbar-logo-text">
              Fixly
            </span>
          </div>

          {/* Desktop Navigation */}
          <div
            className="navbar-links"
            style={{
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            <Link to="/" className="navbar-link">
              Home
            </Link>

            <Link to="/services" className="navbar-link">
              Services
            </Link>

            <Link to="/bookings" className="navbar-link">
              Bookings
            </Link>

            {user?.role === "provider" && (
              <Link
                to="/provider"
                className="navbar-link"
              >
                Dashboard
              </Link>
            )}

            {!user && (
              <>
                <Link
                  to="/login"
                  className="navbar-link"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="navbar-link"
                >
                  Sign Up
                </Link>
              </>
            )}

            {user && (
              <>
                <span
                  style={{
                    color: "white",
                    marginLeft: "15px",
                    fontWeight: "bold",
                  }}
                >
                  👤 {user.name}
                </span>

                <button
                  onClick={handleLogout}
                  style={{
                    marginLeft: "10px",
                    padding: "8px 14px",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    background: "#ff4d4f",
                    color: "white",
                    fontWeight: "600",
                  }}
                >
                  Logout
                </button>
              </>
            )}
          </div>

          {/* Hamburger */}
          <div
            className={`navbar-hamburger ${
              menuOpen ? "open" : ""
            }`}
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`navbar-mobile ${
            menuOpen ? "open" : ""
          }`}
        >
          <Link
            to="/"
            className="navbar-link"
          >
            Home
          </Link>

          <Link
            to="/services"
            className="navbar-link"
          >
            Services
          </Link>

          <Link
            to="/bookings"
            className="navbar-link"
          >
            Bookings
          </Link>

          {user?.role === "provider" && (
            <Link
              to="/provider"
              className="navbar-link"
            >
              Dashboard
            </Link>
          )}

          {!user && (
            <>
              <Link
                to="/login"
                className="navbar-link"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="navbar-link"
              >
                Sign Up
              </Link>
            </>
          )}

          {user && (
            <>
              <div
                style={{
                  color: "white",
                  fontWeight: "bold",
                  padding: "10px 0",
                }}
              >
                👤 {user.name}
              </div>

              <button
                onClick={handleLogout}
                className="btn"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;