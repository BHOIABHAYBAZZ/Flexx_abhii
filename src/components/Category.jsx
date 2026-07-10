import React, { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../styles/Category.css";

export default function Cat() {
  const { category } = useParams();

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:3004/${category}`);
        setProducts(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, [category]);

  // Search + Sort
  const filteredProducts = useMemo(() => {
    let data = [...products];

    // Search
    if (search.trim() !== "") {
      data = data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    // Sorting
    switch (sort) {
      case "low":
        data.sort((a, b) => a.price - b.price);
        break;

      case "high":
        data.sort((a, b) => b.price - a.price);
        break;

      case "az":
        data.sort((a, b) => a.name.localeCompare(b.name));
        break;

      case "za":
        data.sort((a, b) => b.name.localeCompare(a.name));
        break;

      default:
        break;
    }

    return data;
  }, [products, search, sort]);

  return (
    <div className="cat-page">
      <div className="container py-5">
        <h2 className="cat-title">{category.toUpperCase()}</h2>

        {/* Search & Sort */}

        <div className="cat-topbar">
          <input
            type="text"
            placeholder="Search Product..."
            className="search-box"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="sort-box"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="low">Price : Low to High</option>
            <option value="high">Price : High to Low</option>
            <option value="az">Name : A-Z</option>
            <option value="za">Name : Z-A</option>
          </select>
        </div>

        <p className="product-count">
          {filteredProducts.length} Products Found
        </p>

        <div className="row g-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((el) => (
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" key={el.id}>
                <Link
                  to={`/${category}/${el.id}`}
                  className="text-decoration-none"
                >
                  <div className="cat-card">
                    <div className="cat-img-box">
                      <img src={el.img} alt={el.name} />
                    </div>

                    <div className="cat-body">
                      <span className="cat-name">{el.name}</span>

                      <h4 className="cat-price">₹ {el.price}</h4>

                      <button className="cat-btn">View Product</button>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <div className="col-12">
              <h3 className="no-product">No Product Found</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
