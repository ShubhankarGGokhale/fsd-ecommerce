import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

function Checkout() {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const [user, setUser] = useState(null);

  // check if user is logged in or not
  useEffect(() => {
    console.log("Checking auth status for checkout...");
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (!currentUser) {
        alert("Please login first to continue checkout 🚀");
        navigate("/login");
      } else {
        console.log("User logged in:", currentUser.email);
        setUser(currentUser);
      }
    });
    // cleanup listener on unmount same used in Navbar
    return () => unsubscribe();
  }, [navigate]);

  // total price of cart
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  // handle input fields
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  // handle placing order
  function handleSubmit(e) {
    e.preventDefault();
    if (cartItems.length === 0) {
      alert("Your cart is empty! Please add something first.");
      return;
    }
    alert(`Thank you ${formData.name}! Your order has been placed 🎉`);
    clearCart();
    navigate("/");
  }

  // wait till user is checked out 
  if (!user) return null;

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "30px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        backgroundColor: "#fafafa",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Checkout</h2>

      {cartItems.length === 0 ? (
        <p style={{ textAlign: "center", marginTop: "20px" }}>Your cart is empty 🛒</p>
      ) : (
        <>
          {/* Order summary */}
          <div style={{ marginBottom: "20px" }}>
            <h4>Order Summary:</h4>
            {cartItems.map((item) => (
              <p key={item.id}>
                {item.title} - ₹{item.price}
              </p>
            ))}
            <h3>Total: ₹{total.toFixed(2)}</h3>
          </div>

          {/* form section */}
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "8px",
                marginBottom: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "8px",
                marginBottom: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />

            <label>Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              rows="3"
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />

            <button
              type="submit"
              style={{
                marginTop: "15px",
                width: "100%",
                backgroundColor: "#2d6a4f",
                color: "white",
                padding: "10px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Place Order ✅
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default Checkout;
