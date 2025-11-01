import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { auth } from "../firebase";


function Navbar() {
  const { cartItems } = useContext(CartContext);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // to check user login/logout state changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      console.log("Auth state changed:", currentUser?.email); // just for debugging
      setUser(currentUser);
    });

    // cleanup on unmount so the listener doesn't keep running on the Fitrebase Backgroung
    return () => unsubscribe();
  }, []);

  // logout handler function for LOGOUT button
  async function logoutUser() {
    try {
      await auth.signOut();
      alert("You have been logged out!");
      navigate("/login");
    } catch (err) {
      console.log("Error while logging out:", err);
    }
  }

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 30px",
        backgroundColor: "#232f3e",
        color: "white",
      }}
    >
      {/* App name / logo */}
      <h2>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          FSD E-Commerce
        </Link>
      </h2>

      {/* Right side options */}
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
          🛒 Cart ({cartItems.length})
        </Link>

        {user ? (
          <>
            <span style={{ fontSize: "14px" }}>
              Hi, {user.email ? user.email.split("@")[0] : "User"}
            </span>
            <button
              onClick={logoutUser}
              style={{
                background: "transparent",
                border: "1px solid white",
                color: "white",
                borderRadius: "5px",
                padding: "5px 10px",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" style={{ color: "white", textDecoration: "none" }}>
              Login
            </Link>
            <Link
              to="/signup"
              style={{ color: "white", textDecoration: "none" }}
            >
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
