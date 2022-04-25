import React from "react";
import "./productitem.scss";

const ProductItem = ({ sku, productname, price, formular }) => {
  return (
    <div className="productitem-container">
      <input type="checkbox" name="" className="delete-checkbox" />
      <div className="productitem-desc">
        <p>{sku}</p>
        <p>{productname}</p>
        <p>{price}</p>
        <p>{formular}</p>
      </div>
    </div>
  );
};

export default ProductItem;
