import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import "../styles/global.css";


function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  // fetch product details when id changes
  useEffect(() => {
    console.log("Fetching details for product id:", id); // simple debug log

    axios
      .get(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => {
        console.log("Fetched product:", res.data.title);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log("Error loading product:", err);
      });
  }, [id]);

  // show loading text if product not yet loaded
  if (!product) {
    return <h2 style={{ textAlign: "center", marginTop: "40px" }}>Loading...</h2>;
  }

  return (
    <div
      className="product-details-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
      }}
    >
      <div
        className="product-details-card"
        style={{
          display: "flex",
          gap: "30px",
          maxWidth: "900px",
          border: "1px solid #ddd",
          borderRadius: "10px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          padding: "20px",
        }}
      >
        {/* image section */}
        <div className="product-image-section" style={{ flex: 1 }}>
          <img
            src={product.images && product.images[0]}
            alt={product.title}
            style={{
              width: "100%",
              height: "300px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </div>

        {/* info section */}
        <div className="product-info-section" style={{ flex: 1 }}>
          <h2 style={{ marginBottom: "10px" }}>{product.title}</h2>
          <p style={{ fontStyle: "italic", color: "#666" }}>
            Category: {product.category?.name || "N/A"}
          </p>
          <h3 style={{ color: "#232f3e" }}>₹{product.price}</h3>
          <p style={{ marginTop: "15px", lineHeight: "1.6" }}>
            {product.description}
          </p>

          <button
            onClick={() => addToCart(product)}
            style={{
              marginTop: "20px",
              backgroundColor: "#232f3e",
              color: "white",
              border: "none",
              padding: "10px 15px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Add to Cart 🛒
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
