import { Navigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function ProviderDashboard() {
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  if (!user || user.role !== "provider") {
    return <Navigate to="/" />;
  }

  const [bookings, setBookings] =
    useState([]);

  useEffect(() => {

    axios
      .get(
        "http://https://fixly-backend-yzly.onrender.com/api/bookings"
      )
      .then((res) => {
        setBookings(res.data);
      });

  }, []);

  const acceptBooking = async (id) => {

    const user = JSON.parse(
      localStorage.getItem("user")
    );

    await axios.put(
      `http://https://fixly-backend-yzly.onrender.com/api/bookings/accept/${id}`,
      {
        providerId: user.id,
        providerName: user.name,
      }
    );

    window.location.reload();
  };

  const rejectBooking = async (id) => {

    await axios.put(
      `http://https://fixly-backend-yzly.onrender.com/api/bookings/reject/${id}`
    );

    window.location.reload();
  };

  return (
    <div className="provider-page">

      <h1>Provider Dashboard</h1>

      {bookings.map((booking) => (

        <div
          key={booking._id}
          className="booking-card"
        >

          <h3>{booking.serviceName}</h3>

          <p>
            {booking.bookingDate}
          </p>

          <p>
            {booking.address}
          </p>

          <p>
            Status:
            {booking.status}
          </p>

          {booking.status ===
            "Pending" && (
              <>
                <button
                  onClick={() =>
                    acceptBooking(
                      booking._id
                    )
                  }
                >
                  Accept
                </button>

                <button
                  onClick={() =>
                    rejectBooking(
                      booking._id
                    )
                  }
                >
                  Reject
                </button>
              </>
            )}

        </div>

      ))}

    </div>
  );
}

export default ProviderDashboard;