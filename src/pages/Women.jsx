import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../styles/Womanwear.css'
import womans from "../assets/Video/woman.mp4"

export default function Woman() {
  const [products, setProducts] = useState([]);
  const control=useRef()

  useEffect(() => {
    axios
      .get("http://localhost:3004/women")
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

  <video src={womans} ref={control} loop autoPlay ></video>
     </div>
        <h2 className="mens-title">
          Woman's Activewear
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