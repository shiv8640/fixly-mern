import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function Payment() {

  const navigate = useNavigate();
  const location = useLocation();

  const {
    serviceName,
    amount,
    date,
    time,
    address,
    paymentMethod,
  } = location.state || {};

  const handlePayment = async () => {
    try {
  console.log("STATE:", location.state);
      const user = JSON.parse(
        localStorage.getItem("user")
      );
      console.log("USER:", user);

      await axios.post(
        "http://10.33.224.135:5000/api/bookings",
        {
          userId: user.id,
          serviceName,
          bookingDate: date,
          bookingTime: time,
          address,
          amount,
          paymentMethod,
        }
      );

      alert("Booking Confirmed ✅");

      navigate("/bookings");

    }
    
    catch (error) {
      console.log(error.response);
      console.log(error.response?.data);

      alert(
        error.response?.data?.message ||
        "Booking Failed"
      );
    }
  };

  return (
    <div className="payment-page">

      <div className="payment-card">

        <h1>Payment</h1>

        <div className="payment-summary">

          <h3>{serviceName}</h3>

          <h2>₹{amount}</h2>

        </div>

        <div className="payment-methods">

          <div className="method-card">
            💵 Cash on Service
          </div>

          <div className="method-card">
            📱 UPI Payment
          </div>

          <div className="method-card">
            💳 Debit / Credit Card
          </div>

        </div>

        <button
          className="pay-btn"
          onClick={handlePayment}
        >
          Confirm Booking
        </button>

      </div>

    </div>
  );
}

export default Payment;