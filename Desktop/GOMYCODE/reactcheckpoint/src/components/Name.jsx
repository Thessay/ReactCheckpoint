import React from "react";
import product from "../product.js";

const Name = () => {
  return (
    <h2 className="fw-bold mb-1" style={{ letterSpacing: "-0.5px" }}>
      {product.pname}
    </h2>
  );
};

export default Name;
