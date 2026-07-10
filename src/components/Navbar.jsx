import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles/Navbar.css";

export default function Navbar() {
  const cart = useSelector((store) => store);
  const navigate = useNavigate();

  const isLogin = localStorage.getItem("isLogin") === "true";
  const userName = localStorage.getItem("userName");

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    localStorage.removeItem("userName");

    alert("Logout Successful");
    navigate("/login");
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-expand-lg shadow-sm">
      <div className="container">

        {/* Logo */}
      <Link className="navbar-brand gym-logo" to="/">
  <div className="logo-circle">
    F
  </div>

  <div className="logo-text">
    <h3>
      Flexx<span>_abhii</span>
    </h3>
    <p>PREMIUM FITNESS</p>
  </div>
</Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">

          <ul className="navbar-nav ms-auto align-items-center gap-3">

            {/* Profile */}
            <li className="nav-item">

              <Link
                className="nav-link profile-link"
                to={isLogin ? "#" : "/login"}
              >
                <div className="icon-box">
                  <i className="bi bi-person-fill"></i>
                </div>

                <span className="profile-name">
                  {isLogin ? `Hi, ${userName}` : "Profile"}
                </span>

              </Link>

            </li>

            {/* Logout */}

            {isLogin && (
              <li className="nav-item">
                <button
                  className="btn-logout"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            )}

            {/* Cart */}

            <li className="nav-item">

              <Link
                className="nav-link cart-link"
                to="/cart"
              >
                <div className="icon-box">

                  <i className="bi bi-cart3"></i>

                  <span className="cart-badge">
                    {cart.length}
                  </span>

                </div>

                <span className="profile-name">
                  Cart
                </span>

              </Link>

            </li>

          </ul>

        </div>

      </div>
    </nav>
  );
}