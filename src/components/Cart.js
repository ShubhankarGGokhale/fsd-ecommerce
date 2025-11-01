import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";


function Cart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  // calculating total price
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  console.log("Cart items:", cartItems); // for debugging cart content

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>🛒 Your Cart</h2>

      {/* if no items */}
      {cartItems.length === 0 ? (
        <p style={{ textAlign: "center", marginTop: "40px" }}>
          Your cart is empty right now 😅
        </p>
      ) : (
        <>
          {/* Top section with total items and clear cart */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "15px",
            }}
          >
            <h3>Total Items: {cartItems.length}</h3>
            <button
              onClick={() => {
                if (window.confirm("Clear all items from cart?")) {
                  clearCart();
                }
              }}
              style={{
                backgroundColor: "#d62828",
                color: "white",
                border: "none",
                padding: "8px 12px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Clear Cart
            </button>
          </div>

          {/* loop through cart items */}
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "10px",
                marginBottom: "10px",
                backgroundColor: "#fafafa",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                <img
                  src={item.images ? item.images[0] : item.image}
                  alt={item.title}
                  style={{
                    width: "60px",
                    height: "60px",
                    objectFit: "cover",
                    borderRadius: "6px",
                  }}
                />
                <div>
                  <h4 style={{ margin: 0 }}>{item.title}</h4>
                  <p style={{ margin: "5px 0", color: "#444" }}>₹{item.price}</p>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                style={{
                  backgroundColor: "#f77f00",
                  color: "white",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          ))}

          {/* bottom section - total and checkout */}
          <div
            style={{
              marginTop: "30px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "15px",
              borderTop: "1px solid #ddd",
            }}
          >
            <h3>Total: ₹{total.toFixed(2)}</h3>
            <button
              onClick={() => navigate("/checkout")}
              style={{
                backgroundColor: "#0077b6",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Go to Checkout →
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
