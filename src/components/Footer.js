import React from "react";

// simple footer for the app just for me 
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "#232f3e",
        color: "white",
        textAlign: "center",
        padding: "15px 10px",
        marginTop: "40px",
        fontSize: "14px",
        boxShadow: "0 -2px 5px rgba(0,0,0,0.2)",
      }}
    >
      <p style={{ margin: 0 }}>
        © {year} FSD E-Commerce | Built by <strong>Shubhankar Gokhale</strong> 💻
      </p>
      <p style={{ margin: "5px 0 0 0", fontSize: "12px", color: "#ccc" }}>
        Made with ❤️ using React & Firebase
      </p>
    </footer>
  );
}

export default Footer;
