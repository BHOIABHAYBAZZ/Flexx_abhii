import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/Menswear.css";
import  cloth from "../assets/Video/MENSWEAR.mp4"

export default function Men() {
  const [products, setProducts] = useState([]);
  const control=useRef()

  useEffect(() => {
    axios
      .get("http://localhost:3004/mens")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);
   useEffect(() => {
    control.current.play();
  }, []);

  return (
    <section className="mens-section">

     <div id="vi">

  <video src={cloth} ref={control} loop autoPlay ></video>
     </div>
     
      <div className="container-fluid">

        <h2 className="mens-title">
          Men's Activewear
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