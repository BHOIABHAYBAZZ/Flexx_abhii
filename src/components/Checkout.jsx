import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearcart } from "../Redux/Action";
import "../styles/Checkout.css";

export default function Checkout() {
  const cart = useSelector((store) => store);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const discount = subtotal > 3000 ? 500 : 0;
  const delivery = subtotal > 999 ? 0 : 99;
  const gst = Math.round(subtotal * 0.18);

  const grandTotal = subtotal - discount + delivery + gst;

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    payment: "cod",
    upi: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    if (!form.name || !form.phone || !form.address) {
      alert("Please fill all required fields");
      return;
    }

    dispatch(clearcart());
    navigate("/success");
  };

  return (
    <div className="checkout-container">

      {/* LEFT FORM */}
      <div className="checkout-left">

        <h2>Shipping Details</h2>

        <input
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
        />

        <input
          name="phone"
          placeholder="Mobile Number"
          onChange={handleChange}
        />

        <textarea
          name="address"
          placeholder="Full Address"
          onChange={handleChange}
        />

        <input
          name="city"
          placeholder="City"
          onChange={handleChange}
        />

        <input
          name="pincode"
          placeholder="Pincode"
          onChange={handleChange}
        />

        {/* PAYMENT METHOD */}
        <h2>Payment Method</h2>

        <div className="payment-box">

          <label>
            <input
              type="radio"
              name="payment"
              value="cod"
              checked={form.payment === "cod"}
              onChange={handleChange}
            />
            Cash On Delivery
          </label>

          <label>
            <input
              type="radio"
              name="payment"
              value="upi"
              onChange={handleChange}
            />
            UPI
          </label>

          <label>
            <input
              type="radio"
              name="payment"
              value="card"
              onChange={handleChange}
            />
            Card Payment
          </label>

        </div>

        {/* UPI */}
        {form.payment === "upi" && (
          <input
            name="upi"
            placeholder="Enter UPI ID"
            onChange={handleChange}
          />
        )}

        {/* CARD */}
        {form.payment === "card" && (
          <div className="card-box">

            <input
              name="cardNumber"
              placeholder="Card Number"
              onChange={handleChange}
            />

            <input
              name="expiry"
              placeholder="Expiry MM/YY"
              onChange={handleChange}
            />

            <input
              name="cvv"
              placeholder="CVV"
              onChange={handleChange}
            />

          </div>
        )}

        <button
          className="place-order-btn"
          onClick={handlePlaceOrder}
        >
          Place Order
        </button>

      </div>

      {/* RIGHT SUMMARY */}
      <div className="checkout-right">

        <h2>Order Summary</h2>

        <div className="row">
          <span>Items</span>
          <span>{totalItems}</span>
        </div>

        <div className="row">
          <span>Subtotal</span>
          <span>₹ {subtotal}</span>
        </div>

        <div className="row">
          <span>Discount</span>
          <span style={{ color: "green" }}>- ₹ {discount}</span>
        </div>

        <div className="row">
          <span>Delivery</span>
          <span>{delivery === 0 ? "FREE" : `₹ ${delivery}`}</span>
        </div>

        <div className="row">
          <span>GST (18%)</span>
          <span>₹ {gst}</span>
        </div>

        <hr />

        <div className="row total">
          <span>Total</span>
          <span>₹ {grandTotal}</span>
        </div>

      </div>

    </div>
  );
}