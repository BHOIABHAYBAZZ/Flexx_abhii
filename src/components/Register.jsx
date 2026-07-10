import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaPhoneAlt, FaLock } from "react-icons/fa";
import "../styles/Login.css";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.name.trim() === "") {
      alert("Enter your name");
      return;
    }

    if (form.mobile.length !== 10) {
      alert("Enter valid 10 digit mobile number");
      return;
    }

    if (form.password.length < 4) {
      alert("Password must be at least 4 characters");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Save User
    const user = {
      name: form.name,
      mobile: form.mobile,
      password: form.password,
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration Successful");
    navigate("/login");
  };

  return (
    <div className="login-container">
      <div className="overlay"></div>

      <div className="login-box">
        <h1>Create Account 🚀</h1>
        <p>Register to start shopping</p>

        <form onSubmit={handleSubmit}>

          <div className="input-box">
            <FaUser className="icon" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="input-box">
            <FaPhoneAlt className="icon" />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              maxLength="10"
              value={form.mobile}
              onChange={handleChange}
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
            />
          </div>

          <div className="input-box">
            <FaLock className="icon" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <button className="login-btn" type="submit">
            Register
          </button>
        </form>

        <p className="register-text">
          Already have an account?
          <span onClick={() => navigate("/login")}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
}