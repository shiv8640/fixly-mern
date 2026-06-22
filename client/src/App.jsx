import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetails from "./pages/ServiceDetails";
import Bookings from "./pages/Bookings";
import CustomerDashboard from "./pages/CustomerDashboard";
import ProviderDashboard from "./pages/ProviderDashboard";
import Profile from "./pages/Profile";
import BookService from "./pages/BookService";
import Payment from "./pages/Payment";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/services" element={<ServicesPage />} />

        <Route path="/service/:id" element={<ServiceDetails />} />

        <Route path="/bookings" element={<Bookings />} />

        <Route
          path="/customer-dashboard"
          element={<CustomerDashboard />}
        />

        <Route
          path="/provider-dashboard"
          element={<ProviderDashboard />}
        />

        <Route path="/profile" element={<Profile />} />

        <Route path="/payment" element={<Payment />} />

        {/* <Route
          path="/book/:serviceName"
          element={<BookService />}
        /> */}

      </Routes>

    </BrowserRouter>
  );
}
export default App;