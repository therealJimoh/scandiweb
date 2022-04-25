import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./addproduct.scss";
import { Button } from "../../components";

const AddProduct = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const selectOption = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="addproduct-container">
      <div className="addproduct-wrapper">
        <div className="addproduct-header">
          <h1>Add Product</h1>
          <div className="addproduct-cta">
            <Button title="Save" />
            <Link to="/">
              <Button title="Cancel" />
            </Link>
          </div>
        </div>
        <div className="spacer"></div>
        <div className="form-wrapper">
          <form action="" id="product_form">
            <div className="form-container">
              <label htmlFor="">SKU</label>
              <input type="text" name="sku" id="sku" />
            </div>
            <div className="form-container">
              <label htmlFor="">Name</label>
              <input type="text" name="productname" id="name" />
            </div>
            <div className="form-container">
              <label htmlFor="">Price($)</label>
              <input type="text" name="price" id="price" />
            </div>
            <div className="form-container">
              <label htmlFor="">Type Switcher</label>
              <select name="" id="productType" onChange={selectOption}>
                <option value="typeswitcher">Type Switcher</option>
                <option value="dvd" id="DVD">
                  DVD
                </option>
                <option value="furniture" id="Furniture">
                  Furnitiure
                </option>
                <option value="book" id="Book">
                  Book
                </option>
              </select>
            </div>

            {selectedOption === "dvd" && (
              <div className="typeSwitcher">
                <div className="form-container">
                  <label htmlFor="">Size (MB)</label>
                  <input type="text" name="price" id="size" />
                </div>
                <p>Please provide product size</p>
              </div>
            )}

            {selectedOption === "furniture" && (
              <div className="typeSwitcher">
                <div className="form-container">
                  <label htmlFor="">Height (CM)</label>
                  <input type="text" name="price" id="height" />
                </div>
                <div className="form-container">
                  <label htmlFor="">Width (CM)</label>
                  <input type="text" name="price" id="width" />
                </div>
                <div className="form-container">
                  <label htmlFor="">Length (CM)</label>
                  <input type="text" name="price" id="length" />
                </div>
                <p>Please provide product dimensions</p>
              </div>
            )}

            {selectedOption === "book" && (
              <div className="typeSwitcher">
                <div className="form-container">
                  <label htmlFor="">Weight (KG)</label>
                  <input type="text" name="price" id="weight" />
                </div>
                <p>Please provide product weight</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
