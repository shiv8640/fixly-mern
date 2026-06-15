import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-orb hero-orb-1"></div>
      <div className="hero-orb hero-orb-2"></div>

      <div className="hero-inner">

        <div className="hero-content">

          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            Trusted Service Platform
          </div>

          <h1 className="hero-title">
            Find Trusted Home
            <span className="hero-title-gradient">
              Services Anytime,
            </span>
            Anywhere
          </h1>

          <p className="hero-description">
            Book verified electricians, plumbers, cleaners,
            painters and other professionals in just a few clicks.
          </p>

          <div className="hero-actions">
            <Link to="/services">
              <button>Explore Services</button>
            </Link>

            <Link to="/register">
              <button>Become a Provider</button>
            </Link>
          </div>

          <div className="hero-stats">
            <div>
              <div className="hero-stat-value">500+</div>
              <div className="hero-stat-label">Professionals</div>
            </div>

            <div>
              <div className="hero-stat-value">10k+</div>
              <div className="hero-stat-label">Bookings</div>
            </div>

            <div>
              <div className="hero-stat-value">4.9★</div>
              <div className="hero-stat-label">Rating</div>
            </div>
          </div>

        </div>

        <div className="hero-visual">
          <div className="hero-card-stack">

            <div className="hero-main-card">

              <div className="hero-card-header">
                <div className="hero-card-avatar">👨‍🔧</div>

                <div className="hero-card-meta">
                  <div className="hero-card-name">
                    Professional Services
                  </div>

                  <div className="hero-card-role">
                    Verified Experts
                  </div>
                </div>
              </div>

              <div className="hero-service-list">

                <div className="hero-service-item">
                  <span className="hero-service-icon">⚡</span>
                  <span className="hero-service-name">
                    Electrician
                  </span>
                  <span className="hero-service-price">
                    ₹499
                  </span>
                </div>

                <div className="hero-service-item">
                  <span className="hero-service-icon">🔧</span>
                  <span className="hero-service-name">
                    Plumber
                  </span>
                  <span className="hero-service-price">
                    ₹399
                  </span>
                </div>

                <div className="hero-service-item">
                  <span className="hero-service-icon">🧹</span>
                  <span className="hero-service-name">
                    Cleaner
                  </span>
                  <span className="hero-service-price">
                    ₹299
                  </span>
                </div>

              </div>
            </div>

            <div className="hero-floating-card hero-floating-card-1">
              ⭐ Top Rated
            </div>

            <div className="hero-floating-card hero-floating-card-2">
              🚀 Fast Booking
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;