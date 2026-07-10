import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/Product.css";

export default function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:3004/data");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <section className="product-section">
      <div className="container-fluid px-2">
        <h2 className="heading">Everything Cult</h2>

        <div className="row g-3">
          {products.map((item) => (
            <div
              className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12"
              key={item.id}
            >
              <Link
                to={`/${item.category}`}
                className="text-decoration-none text-dark"
              >
                <div className="product-card">
                  <div className="product-image">
                    <img src={item.img} alt={item.category} loading="lazy" />
                  </div>

                  <div className="product-info">
                    <h3>{item.category}</h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
