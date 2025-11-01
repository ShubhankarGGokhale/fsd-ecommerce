import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // signup handler for the Signup form
  async function handleSignup(e) {
    e.preventDefault();
    console.log("Creating account for:", email); // simple debug log

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup successful! You can now login 😊");
      navigate("/login"); // redirect after signup
    } catch (error) {
      console.log("Signup error:", error.message);
      alert("Something went wrong. Try again.");
    }
  }

  return (
    <div className="auth-container" style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Create Account</h2>

      <form onSubmit={handleSignup} style={{ display: "inline-block", width: "280px" }}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "10px",
            borderRadius: "4px",
            border: "1px solid gray",
          }}
        />

        <input
          type="password"
          placeholder="Enter a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "10px",
            borderRadius: "4px",
            border: "1px solid gray",
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            backgroundColor: "#232f3e",
            color: "white",
            border: "none",
            padding: "8px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Signup
        </button>

        <p style={{ marginTop: "15px" }}>
          Already have an account?{" "}
          <span
            style={{ color: "blue", cursor: "pointer", textDecoration: "underline" }}
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
}

export default Signup;
