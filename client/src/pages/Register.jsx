import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer");
  const navigate = useNavigate();
  const [bio, setBio] = useState("");
  const [experience, setExperience] = useState("");
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
  "http://10.33.224.135:5000/api/auth/register",
  {
    name,
    email,
    password,
    role,
    bio,
    experience,
  }
);
      alert(res.data.message);
      localStorage.setItem(
        "token",
        res.data.token

      );
      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      alert("Registration Successful");

      navigate("/services");

    } catch (error) {
      alert(error.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">

        <div className="login-left">
          <h1>Join Fixly Today</h1>

          <p>
            Create your account and access trusted
            home services across India.
            Fast booking, verified professionals,
            and seamless experience.
          </p>
        </div>

        <div className="login-card">
          <h2>Create Account</h2>

          <form onSubmit={handleRegister}>

            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

            <input
              type="password"
              placeholder="Create Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />
            <label>Select Account Type</label>

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="customer">
                Customer
              </option>

              <option value="provider">
                Provider
              </option>
            </select>
            {role === "provider" && (
              <>
                <input
                  type="number"
                  placeholder="Experience (Years)"
                  value={experience}
                  onChange={(e) =>
                    setExperience(e.target.value)
                  }
                />

                <textarea
                  placeholder="Your Bio"
                  value={bio}
                  onChange={(e) =>
                    setBio(e.target.value)
                  }
                />
              </>
            )}

            <button type="submit">
              Create Account
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}

export default Register;