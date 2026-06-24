import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await
      axios.post(
  "http://10.33.224.135:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      console.log(res.data);

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      alert("Login Successful");

      if (res.data.user.role === "provider") {
  navigate("/provider");
} else {
  navigate("/services");
}

    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">

        <div className="login-left">
          <h1>Welcome Back to Fixly</h1>
          <p>
            India's trusted home services platform.
            Book electricians, plumbers, cleaners and more
            with just a few clicks.
          </p>
        </div>

        <div className="login-card">
          <h2>Sign In</h2>

          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">
              Login
            </button>
            {/* <p>
              Don't have an account?
              <Link to="/register"> Sign Up</Link>
            </p> */}
          </form>
        </div>

      </div>
    </div>
  );
}

export default Login;