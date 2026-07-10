import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Success.css";

export default function Success() {
  const navigate = useNavigate();

  const orderId =
    "ORD" + Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="success-container">

      <div className="success-box">

        {/* ANIMATION ICON */}
        <div className="checkmark">✔</div>

        <h1>Order Placed Successfully!</h1>

        <p className="sub-text">
          Thank you for shopping with us ❤️
        </p>

        <div className="order-info">

          <div className="info-row">
            <span>Order ID</span>
            <b>{orderId}</b>
          </div>

          <div className="info-row">
            <span>Payment Status</span>
            <b style={{ color: "green" }}>Paid / COD Confirmed</b>
          </div>

          <div className="info-row">
            <span>Estimated Delivery</span>
            <b>3 - 5 Days</b>
          </div>

          <div className="info-row">
            <span>Status</span>
            <b style={{ color: "#ff5722" }}>Processing</b>
          </div>

        </div>

        <button
          className="home-btn"
          onClick={() => navigate("/")}
        >
          Continue Shopping
        </button>

      </div>

    </div>
  );
}