import React from "react";

const Product = ({ pname, price, description, image }) => {
  return (
    <div className="bg-neutral-50 mt-12 p-6 rounded-xl max-w-md mx-auto shadow">
      <img
        src={image}
        alt={pname}
        className="h-72 w-full object-cover rounded-lg"
      />

      <p className="mt-4 font-bold text-lg">{pname}</p>
      <p className="mt-2 font-semibold">{price}</p>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
};

export default Product;
