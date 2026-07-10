import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPhoneAlt, FaLock } from "react-icons/fa";
import "../styles/Login.css";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    mobile: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.mobile.trim().length !== 10) {
      alert("Enter a valid 10-digit mobile number.");
      return;
    }

    if (form.password.trim().length < 4) {
      alert("Password must be at least 4 characters.");
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Please register first.");
      navigate("/register"); // lowercase
      return;
    }

    if (
      user.mobile === form.mobile &&
      user.password === form.password
    ) {
      localStorage.setItem("isLogin", "true");
      localStorage.setItem("userName", user.name);

      alert("Login Successful");
      navigate("/");
    } else {
      alert("Invalid Mobile Number or Password");
    }
  };

  return (
    <div className="login-container">
      <div className="overlay"></div>

      <div className="login-box">
        <h1>Welcome Back 👋</h1>
        <p>Login to continue shopping</p>

        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <FaPhoneAlt className="icon" />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              maxLength={10}
              value={form.mobile}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-box">
            <FaLock className="icon" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <button className="login-btn" type="submit">
            Login
          </button>
        </form>

        <div className="extra">
          <span className="forgot">Forgot Password?</span>
        </div>

        <p className="register-text">
          Don't have an account?{" "}
          <span
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/register")}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}