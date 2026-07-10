import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { myAction } from "../Redux/Action";
import "../styles/Productdetail.css";

export default function Productdetail() {
  const [state, setState] = useState({});
  const [qty, setQty] = useState(1);

  const { category, id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [category, id]);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3004/${category}/${id}`
      );
      setState(res.data);
    } catch (error) {
      console.log(error);
    }
  };

 function Addtocart() {
  const isLogin = localStorage.getItem("isLogin");

  if (!isLogin) {
    alert("Please login first.");
    navigate("/login");
    return;
  }

  dispatch(
    myAction({
      ...state,
      qty,
    })
  );

  alert("Product Added To Cart");
}
function BuyNow() {
  const isLogin = localStorage.getItem("isLogin");

  if (!isLogin) {
    alert("Please login first.");
    navigate("/login");
    return;
  }

  dispatch(
    myAction({
      ...state,
      qty,
    })
  );

  navigate("/cart");
}

  return (
    <div className="container py-5">
      <div className="row bg-white rounded shadow-sm p-4">

        {/* Product Image */}
        <div className="col-lg-5 col-md-6 text-center mb-4 mb-md-0">
          <img
            src={state.img}
            alt={state.name}
            className="img-fluid rounded detail-img"
          />
        </div>

        {/* Product Details */}
        <div className="col-lg-7 col-md-6">

          <h2 className="fw-bold">{state.name}</h2>

        <div className="d-flex align-items-center mb-2">
  <div className="text-warning fs-5">
    {"⭐".repeat(Math.round(state.rating || 0))}
    {"☆".repeat(5 - Math.round(state.rating || 0))}
  </div>

  <span className="text-secondary ms-2">
    ({state.rating}/5)
  </span>
</div>

          <h3 className="text-success fw-bold mb-3">
            ₹{state.price}
          </h3>

          <p className="text-muted">
            <strong>Category :</strong> {state.category}
          </p>

      <p
  className={`fw-semibold ${
    state.stock ? "text-success" : "text-danger"
  }`}
>
  {state.stock ? "✔ In Stock" : "❌ Out of Stock"}
</p>

          {/* Quantity */}
          <div className="d-flex align-items-center mb-4">
            <span className="me-3 fw-bold">Quantity :</span>

            <button
              className="btn btn-outline-dark"
              onClick={() => qty > 1 && setQty(qty - 1)}
            >
              -
            </button>

            <span className="mx-3 fs-5">{qty}</span>

            <button
              className="btn btn-outline-dark"
              onClick={() => setQty(qty + 1)}
            >
              +
            </button>
          </div>

          {/* Buttons */}
          <div className="d-flex gap-3 mb-4">

            <button
              className="btn btn-warning px-4 py-2 fw-bold"
              onClick={Addtocart}
            >
               Add To Cart
            </button>

            <button
              className="btn btn-success px-4 py-2 fw-bold"
              onClick={BuyNow}
            >
               Buy Now
            </button>

          </div>

          <hr />

          {/* Features */}
          <div className="row text-center">

            <div className="col">
              <h3>🚚</h3>
              <p className="small mt-2">Free Delivery</p>
            </div>

            <div className="col">
              <h3>🔄</h3>
              <p className="small mt-2">7 Days Return</p>
            </div>

            <div className="col">
              <h3>🔒</h3>
              <p className="small mt-2">Secure Payment</p>
            </div>

          </div>

        </div>
      </div>

      {/* Description */}
      <div className="bg-white shadow-sm rounded mt-4 p-4">
        <h4 className="fw-bold">Description</h4>

        <p className="text-secondary">
          Premium quality gym wear made with breathable fabric. Perfect for
          workouts, running, gym training, yoga, fitness and everyday use.
          Soft, stretchable and lightweight material provides maximum comfort.
        </p>
      </div>
    </div>
  );
}