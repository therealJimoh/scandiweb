import React from "react";
import { Link } from "react-router-dom";

import "./productlist.scss";
import { Button, ProductItem } from "../../components";

const ProductList = () => {
  return (
    <div className="productlist-container">
      <div className="productlist-wrapper">
        <div className="productlist-header">
          <h1>Product List</h1>
          <div className="productlist-cta">
            <Link to="/add-product">
              <Button title="Add" />
            </Link>
            <Button id="delete-product-btn" title="Mass delete" />
          </div>
        </div>
        <div className="spacer"></div>
        <div className="productlist-productitem">
          <ProductItem
            sku="JVC20201"
            productname="AcmeDisc"
            price="2.00 $"
            formular="Dimension: 24x45x34"
          />
          <ProductItem
            sku="JVC20201"
            productname="AcmeDisc"
            price="2.00 $"
            formular="Dimension: 24x45x34"
          />
          <ProductItem
            sku="JVC20201"
            productname="AcmeDisc"
            price="2.00 $"
            formular="Dimension: 24x45x34"
          />
          <ProductItem
            sku="JVC20201"
            productname="AcmeDisc"
            price="2.00 $"
            formular="Dimension: 24x45x34"
          />
          <ProductItem
            sku="JVC20201"
            productname="AcmeDisc"
            price="2.00 $"
            formular="Dimension: 24x45x34"
          />
          <ProductItem
            sku="JVC20201"
            productname="AcmeDisc"
            price="2.00 $"
            formular="Dimension: 24x45x34"
          />
          <ProductItem
            sku="JVC20201"
            productname="AcmeDisc"
            price="2.00 $"
            formular="Dimension: 24x45x34"
          />
          <ProductItem
            sku="JVC20201"
            productname="AcmeDisc"
            price="2.00 $"
            formular="Dimension: 24x45x34"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
