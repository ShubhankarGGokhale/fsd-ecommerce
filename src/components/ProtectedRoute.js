import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase";

const ProtectedRoute = ({ children }) => {
  const user = auth.currentUser;

  if (!user) {
    alert("Please login to access this page 🚀");
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
