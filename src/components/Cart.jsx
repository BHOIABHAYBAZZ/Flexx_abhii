// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   incrementquantity,
//   decrementquantity,
//   removefromcart,
//   clearcart,
// } from "../Redux/Action";

// import "../styles/Cart.css";

// export default function Cart() {
//   const cart = useSelector((store) => store);
//   const dispatch = useDispatch();

//   const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

//   const subtotal = cart.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );

//   const discount = subtotal > 3000 ? 500 : 0;

//   const delivery = subtotal > 999 ? 0 : 99;

//   const grandTotal = subtotal - discount + delivery;

//   if (cart.length === 0) {
//     return (
//       <div className="empty-cart">
//         <h1>🛒 Your Cart is Empty</h1>
//         <p>Add products to your cart.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="cart-container">

//       <div className="cart-left">

//         <h2>Shopping Cart ({totalItems} Items)</h2>

//         {cart.map((el, i) => (
//           <div className="cart-card" key={i}>

//             <img src={el.img} alt={el.title} />

//             <div className="cart-details">

//               <h3>{el.title}</h3>

//               <h2>₹ {el.price}</h2>

//               <p>Brand : {el.brand}</p>

//               <div className="qty">

//                 <button
//                   onClick={() => dispatch(decrementquantity(i))}
//                 >
//                   -
//                 </button>

//                 <span>{el.quantity}</span>

//                 <button
//                   onClick={() => dispatch(incrementquantity(i))}
//                 >
//                   +
//                 </button>

//               </div>

//               <h4>
//                 Total : ₹ {el.price * el.quantity}
//               </h4>

//               <button
//                 className="remove-btn"
//                 onClick={() => dispatch(removefromcart(i))}
//               >
//                 Remove
//               </button>

//             </div>

//           </div>
//         ))}

//         <button
//           className="clear-btn"
//           onClick={() => dispatch(clearcart())}
//         >
//           Empty Cart
//         </button>

//       </div>

//       <div className="cart-right">

//         <h2>Price Details</h2>

//         <div className="price-row">
//           <span>Items</span>
//           <span>{totalItems}</span>
//         </div>

//         <div className="price-row">
//           <span>Subtotal</span>
//           <span>₹ {subtotal}</span>
//         </div>

//         <div className="price-row">
//           <span>Discount</span>
//           <span style={{ color: "green" }}>
//             - ₹ {discount}
//           </span>
//         </div>

//         <div className="price-row">
//           <span>Delivery</span>
//           <span>
//             {delivery === 0 ? (
//               <span style={{ color: "green" }}>
//                 FREE
//               </span>
//             ) : (
//               `₹ ${delivery}`
//             )}
//           </span>
//         </div>

//         <hr />

//         <div className="price-row total">
//           <span>Total Amount</span>
//           <span>₹ {grandTotal}</span>
//         </div>

//         <button className="checkout-btn">
//           Proceed To Checkout
//         </button>

//       </div>

//     </div>
//   );
// }
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  incrementquantity,
  decrementquantity,
  removefromcart,
  clearcart,
} from "../Redux/Action";

import "../styles/Cart.css";

export default function Cart() {
  const cart = useSelector((store) => store);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [orderSuccess, setOrderSuccess] = useState(false);

  const totalItems = cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const discount = subtotal > 3000 ? 500 : 0;

  const delivery = subtotal > 999 ? 0 : 99;

  const grandTotal = subtotal - discount + delivery;

  const handleCheckout = () => {
    setOrderSuccess(true);
    dispatch(clearcart());
  };



  // Order Success Screen
  if (orderSuccess) {
    return (
      <div className="success-order">
        <div className="success-box">
          <h1>🎉 Order Placed Successfully!</h1>

          <h2>Thank You For Shopping ❤️</h2>

          <p>Your order has been confirmed.</p>

          <p>Estimated Delivery: 3 - 5 Days</p>

          <button
            className="checkout-btn"
            onClick={() => {
              setOrderSuccess(false);
              navigate("/");
            }}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  // Empty Cart
  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h1>🛒 Your Cart is Empty</h1>
        <p>Add some products to your cart.</p>

        <button
          className="checkout-btn"
          style={{ marginTop: "20px", width: "250px" }}
          onClick={() => navigate("/")}
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="cart-container">
      {/* Left Side */}
      <div className="cart-left">
        <h2>Shopping Cart ({totalItems} Items)</h2>

        {cart.map((el, i) => (
          <div className="cart-card" key={i}>
            <img src={el.img} alt={el.title} />

            <div className="cart-details">
              <h3>{el.title}</h3>

              <h2>₹ {el.price}</h2>

              <p>
                <b>Brand :</b> {el.brand || "Decathlon"}
              </p>

              <div className="qty">
                <button
                  onClick={() => dispatch(decrementquantity(i))}
                >
                  -
                </button>

                <span>{el.quantity}</span>

                <button
                  onClick={() => dispatch(incrementquantity(i))}
                >
                  +
                </button>
              </div>

              <h3>Total : ₹ {el.price * el.quantity}</h3>

              <button
                className="remove-btn"
                onClick={() => dispatch(removefromcart(i))}
              >
                Remove Item
              </button>
            </div>
          </div>
        ))}

        <button
          className="clear-btn"
          onClick={() => dispatch(clearcart())}
        >
          Empty Cart
        </button>
      </div>

      {/* Right Side */}
      <div className="cart-right">
        <h2>Price Details</h2>

        <div className="price-row">
          <span>Total Items</span>
          <span>{totalItems}</span>
        </div>

        <div className="price-row">
          <span>Subtotal</span>
          <span>₹ {subtotal}</span>
        </div>

        <div className="price-row">
          <span>Discount</span>
          <span style={{ color: "green" }}>- ₹ {discount}</span>
        </div>

        <div className="price-row">
          <span>Delivery</span>

          <span style={{ color: delivery === 0 ? "green" : "black" }}>
            {delivery === 0 ? "FREE" : `₹ ${delivery}`}
          </span>
        </div>

        <hr />

        <div className="price-row total">
          <span>Total Amount</span>
          <span>₹ {grandTotal}</span>
        </div>

       <button
className="checkout-btn"
onClick={() => navigate("/checkout")}
>
Proceed To Checkout
</button>
      </div>
    </div>
  );
}