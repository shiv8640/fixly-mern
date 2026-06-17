import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";

function BookService() {

    const { serviceName } = useParams();
    const navigate = useNavigate();

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [address, setAddress] = useState("");
    const [paymentMethod, setPaymentMethod] =
        useState("Cash");


    const handleBooking = (e) => {
        e.preventDefault();

        navigate("/payment", {
  state: {
    serviceName,
    amount: 499,
    date,
    time,
    address,
    paymentMethod,
  },
});
    };

    return (
        <div className="booking-page">

            <div className="booking-card">

                <h1>Book {serviceName}</h1>
                <p
                    style={{
                        textAlign: "center",
                        color: "#aaa",
                        marginBottom: "25px",
                    }}
                >
                    Schedule your service with verified professionals
                </p>

               <form onSubmit={handleBooking}>

                    <label>Select Date</label>

                    <input
                        type="date"
                        value={date}
                        onChange={(e) =>
                            setDate(e.target.value)
                        }
                    />

                    <label>Select Time</label>

                    <input
                        type="time"
                        value={time}
                        onChange={(e) =>
                            setTime(e.target.value)
                        }
                    />

                    <label>Address</label>

                    <textarea
                        rows="4"
                        placeholder="Enter Full Address"
                        value={address}
                        onChange={(e) =>
                            setAddress(e.target.value)
                        }
                    />

                    <label>Payment Method</label>

                    <select
                        value={paymentMethod}
                        onChange={(e) =>
                            setPaymentMethod(e.target.value)
                        }
                    >
                        <option>Cash</option>
                        <option>UPI</option>
                        <option>Card</option>
                    </select>

                    <div className="price-box">
                        Estimated Amount: ₹499
                    </div>

                    <button type="submit">
                        Confirm Booking
                    </button>
                </form>

            </div>

        </div>
    );
}

export default BookService;