import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import GlassCard from "./GlassCard";

function Services() {

  const [services, setServices] = useState([]);

  useEffect(() => {

    axios
      .get("http://localhost:5000/api/services")
      .then((res) => {

        setServices(res.data);

      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  return (
    <section className="services-section">

      <h2>Our Services</h2>

      <div className="services-grid">

        {services.map((service) => (

          <div key={service._id}>

            <GlassCard
              title={service.name}
            />

            {/* <Link to={`/book/${service.name}`}>
              <button className="book-btn">
                Book Now
              </button>
            </Link> */}

          </div>

        ))}
      </div>

    </section>
  );
}

export default Services;