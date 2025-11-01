import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing all pages/components
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import Footer from "./components/Footer";

function App() {
  console.log("App component rendered"); // for debugging re-renders

  return (
    <Router>
      {/* ✅ Navbar stays on every page */}
      <Navbar />

      {/* ✅ Page routes */}
      <Routes>
        {/* Home page - product listing */}
        <Route path="/" element={<ProductList />} />

        {/* Product details page */}
        <Route path="/product/:id" element={<ProductDetails />} />

        {/* ✅ Protected routes (accessible only if logged in) */}
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />

        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />

        {/* ✅ Public routes for authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      {/* ✅ Footer visible on every page */}
      <Footer />
    </Router>
  );
}

export default App;
