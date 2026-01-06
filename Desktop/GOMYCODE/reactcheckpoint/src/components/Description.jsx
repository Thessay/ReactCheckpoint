import React from "react";
import product from "../product.js";

const Description = () => {
  return (
    <p className="text-muted mb-0" style={{ lineHeight: 1.6 }}>
      {product.description}
    </p>
  );
};

export default Description;
