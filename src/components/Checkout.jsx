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
    0,
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
    <div className="checkout-page">
      <div className="checkout-container">
        <div className="checkout-left">
          <h2>Shipping Details</h2>

          <div className="input-grid">
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
              rows="4"
              name="address"
              placeholder="Complete Address"
              onChange={handleChange}
            />

            <input name="city" placeholder="City" onChange={handleChange} />

            <input
              name="pincode"
              placeholder="Pincode"
              onChange={handleChange}
            />
          </div>

          <h2>Payment Method</h2>

          <div className="payment-box">
            <label className={form.payment === "cod" ? "active" : ""}>
              <input
                type="radio"
                value="cod"
                name="payment"
                checked={form.payment === "cod"}
                onChange={handleChange}
              />
              Cash On Delivery
            </label>

            <label className={form.payment === "upi" ? "active" : ""}>
              <input
                type="radio"
                value="upi"
                name="payment"
                onChange={handleChange}
              />
              UPI
            </label>

            <label className={form.payment === "card" ? "active" : ""}>
              <input
                type="radio"
                value="card"
                name="payment"
                onChange={handleChange}
              />
              Card
            </label>
          </div>

          {form.payment === "upi" && (
            <input
              className="payment-input"
              placeholder="example@upi"
              name="upi"
              onChange={handleChange}
            />
          )}

          {form.payment === "card" && (
            <div className="card-box">
              <input
                placeholder="Card Number"
                name="cardNumber"
                onChange={handleChange}
              />

              <div className="card-row">
                <input
                  placeholder="MM/YY"
                  name="expiry"
                  onChange={handleChange}
                />

                <input placeholder="CVV" name="cvv" onChange={handleChange} />
              </div>
            </div>
          )}

          <button className="place-order-btn" onClick={handlePlaceOrder}>
            Place Order ₹{grandTotal}
          </button>
        </div>

        <div className="checkout-right">
          <h2>Order Summary</h2>

          <div className="summary-box">
            {cart.map((item) => (
              <div className="summary-item" key={item.id}>
                <img src={item.image} alt="" />

                <div>
                  <h4>{item.title}</h4>
                  <p>Qty : {item.quantity}</p>
                </div>

                <strong>₹{item.price * item.quantity}</strong>
              </div>
            ))}
          </div>

          <div className="bill">
            <div className="row">
              <span>Items</span>
              <span>{totalItems}</span>
            </div>

            <div className="row">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="row green">
              <span>Discount</span>
              <span>-₹{discount}</span>
            </div>

            <div className="row">
              <span>Delivery</span>
              <span>{delivery === 0 ? "FREE" : `₹${delivery}`}</span>
            </div>

            <div className="row">
              <span>GST</span>
              <span>₹{gst}</span>
            </div>

            <hr />

            <div className="row total">
              <span>Total</span>
              <span>₹{grandTotal}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
