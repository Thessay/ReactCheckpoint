import React from "react";
import product from "../product.js";

const Image = () => {
  return (
    <div
      className="rounded-4 overflow-hidden mb-3 d-flex justify-content-center"
      style={{
        border: "1px solid rgba(0,0,0,0.08)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.10)",
      }}
    >
      <img
        src={product.image}
        alt={product.pname}
        className="w-90"
        style={{ height: 300, objectFit: "fit" }}
      />
    </div>
  );
};

export default Image;
