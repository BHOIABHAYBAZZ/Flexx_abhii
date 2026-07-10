import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../styles/Womanwear.css'

export default function GymEquipment() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3004/gym_equipment")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="mens-section">
      <div className="container-fluid">

        <h2 className="mens-title">
         Gym Equipment
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