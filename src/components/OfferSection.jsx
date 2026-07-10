import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/OfferSection.css";

export default function OfferSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3004/data")
      .then((res) => {
        setProducts(res.data.slice(0, 3));
      })
      .catch((err) => console.log(err));
  }, []);

  const discount = [1000, 500, 100];

  return (
    <section className="offer-section">
      <div className="offer-container">
        {products.map((item, index) => (
          <Link
            to={`/category/${item.id}`}
            className="offer-card"
            key={item.id}
          >
            <div className="offer-image">
              <img src={item.img} alt={item.name} />
            </div>

            <div className="offer-content">
              <h3>{item.category.toUpperCase()}</h3>

              <h2>
                EXTRA <br />
                ₹{discount[index]} OFF*
              </h2>

              <p> {item.name}</p>

              <span className="arrow">↗</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}