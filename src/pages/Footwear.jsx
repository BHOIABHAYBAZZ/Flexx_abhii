import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../styles/Womanwear.css'
import shoes from "../assets/Video/shoes.mp4"

export default function Footwear() {
  const [products, setProducts] = useState([]);
   const control=useRef()

  useEffect(() => {
    axios
      .get("http://localhost:3004/footwear-gym")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);
   useEffect(() => {
      control.current.play();
    }, []);

  return (
    <section className="mens-section">
      <div className="container-fluid">

         <div id="vi">
        
          <video src={shoes} ref={control} loop autoPlay ></video>
             </div>

        <h2 className="mens-title">
          Footwear
        </h2>

        <div className="mens-grid">

          {products.map((item) => (
            <Link
              key={item.id}
              to={`/${item.category}`}
              className="mens-card"
            >

              <div className="category-tag">
                {item.category.replace("_", " ")}
              </div>

              <img
                src={item.img}
                alt={item.category}
              />

            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}