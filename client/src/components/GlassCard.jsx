import { Link } from "react-router-dom";

function GlassCard({ title }) {
  return (
    <div className="glass-card">

      <h3>{title}</h3>

      <Link to={`/book/${title}`}>
        <button className="book-btn">
          Book Now
        </button>
      </Link>

    </div>
  );
}

export default GlassCard;