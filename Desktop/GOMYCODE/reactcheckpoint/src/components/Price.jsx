import React from "react";
import product from "../product.js";
import { Badge } from "react-bootstrap";

const Price = () => {
  return (
    <div className="d-flex align-items-center gap-2 mb-2">
      <span className="fs-4 fw-semibold">{product.price}</span>
      <Badge bg="success" pill>
        New
      </Badge>
    </div>
  );
};

export default Price;
