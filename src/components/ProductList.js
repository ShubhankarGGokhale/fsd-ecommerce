import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);

  // getting data from fake API for products
  useEffect(() => {
    console.log("Fetching product data..."); // just to check if API call runs

    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((res) => {
        console.log("Got products:", res.data.length);
        setProducts(res.data.slice(0, 60)); // showing only 60 products
      })
      .catch((err) => {
        console.log("Error while loading products:", err);
      });
  }, []);

  // if no products yet
  if (products.length === 0) {
    return <p style={{ textAlign: "center", marginTop: "30px" }}>Loading products...</p>;
  }

  return (
    //Styling of the product list grid
    <div
      className="product-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "20px",
        padding: "30px",
      }}
    >
      {products.map((p) => (
        <div
          key={p.id}
          className="product-card"
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "10px",
            textAlign: "center",
            boxShadow: "0 0 5px rgba(0,0,0,0.1)",
          }}
        >
          <img
            src={p.images[0]}
            alt={p.title}
            style={{
              width: "100%",
              height: "180px",
              objectFit: "cover",
              borderRadius: "5px",
            }}
          />
          <h4 style={{ margin: "10px 0" }}>{p.title}</h4>
          <p style={{ color: "#555" }}>₹{p.price}</p>

          <Link to={`/product/${p.id}`}>
            <button
              style={{
                backgroundColor: "#232f3e",
                color: "white",
                border: "none",
                padding: "8px 12px",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "5px",
              }}
            >

              View Details
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
