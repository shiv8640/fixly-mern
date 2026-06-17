import axios from "axios";
import { useEffect, useState } from "react";

function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {

    axios
      .get(
        "http://localhost:5000/api/bookings"
      )
      .then((res) => {

        setBookings(res.data);
        console.log(res.data);

      })
      .catch((err) => {

        console.log(err);

      });

  }, []);

  return (
    <div className="bookings-page">
      <h1>My Bookings</h1>

      <div className="bookings-container">
        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="booking-card"
          >
            <h3>{booking.serviceName}</h3>

            <p>
              <strong>Date:</strong>{" "}
              {booking.bookingDate}
            </p>

            <p>
              <strong>Time:</strong>{" "}
              {booking.bookingTime}
            </p>

            <p>
              <strong>Amount:</strong> ₹
              {booking.amount}
            </p>

            <p>
              <strong>Status:</strong>{" "}
              {booking.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bookings;