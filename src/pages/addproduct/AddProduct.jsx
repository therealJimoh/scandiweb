import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddProductValidation } from "../../schema/addProductValidation";

import "./addproduct.scss";
import { Button } from "../../components";

const AddProduct = () => {
  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AddProductValidation),
  });


  const [selectedOption, setSelectedOption] = useState(null);

  const selectOption = (e) => {
    setValue("select", e.target.value, { shouldValidate: true });
    setSelectedOption(e.target.value);
  };

  const handleAddProduct = () => {
    let formData = getValues();
    console.log(formData);
  };

  return (
    <div className="addproduct-container">
      <div className="addproduct-wrapper">
        <div className="addproduct-header">
          <h1>Add Product</h1>
          <div className="addproduct-cta">
            <Button type="submit" form="product_form" title="Save" />
            <Link to="/">
              <Button title="Cancel" />
            </Link>
          </div>
        </div>
        <div className="spacer"></div>
        <div className="form-wrapper">
          <form id="product_form" onSubmit={handleSubmit(handleAddProduct)}>
            <div className="form-container">
              <div className="formgroup">
                <label htmlFor="">SKU</label>
                <input
                  type="text"
                  name="sku"
                  id="sku"
                  {...register("sku", { required: true })}
                />
              </div>
              <p className="errors">{errors.sku?.message}</p>
            </div>
            <div className="form-container">
              <div className="formgroup">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  name="productname"
                  id="name"
                  {...register("productname", { required: true })}
                />
              </div>
              <p className="errors">{errors.productname?.message}</p>
            </div>
            <div className="form-container">
              <div className="formgroup">
                <label htmlFor="">Price($)</label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  {...register("price", { required: true })}
                />
              </div>
              <p className="errors">{errors.price?.message}</p>
            </div>
            <div className="form-container">
              <div className="formgroup">
                <label htmlFor="">Type Switcher</label>
                <select
                  name="select"
                  id="productType"
                  onChange={selectOption}
                  {...register}
                >
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
              <p className="errors">{errors.select?.message}</p>
            </div>

            {selectedOption === "dvd" && (
              <div className="typeSwitcher">
                <div className="form-container">
                  <div className="formgroup">
                    <label htmlFor="">Size (MB)</label>
                    <input
                      type="number"
                      name="size"
                      id="size"
                      {...register("size", { required: true })}
                    />
                  </div>
                  <p className="errors">{errors.size?.message}</p>
                </div>
                <p>Please provide product size</p>
              </div>
            )}

            {selectedOption === "furniture" && (
              <div className="typeSwitcher">
                <div className="form-container">
                  <div className="formgroup">
                    <label htmlFor="">Height (CM)</label>
                    <input
                      type="number"
                      name="height"
                      id="height"
                      {...register("height", { required: true })}
                    />
                  </div>
                  <p className="errors">{errors.height?.message}</p>
                </div>
                <div className="form-container">
                  <div className="formgroup">
                    <label htmlFor="">Width (CM)</label>
                    <input
                      type="number"
                      name="width"
                      id="width"
                      {...register("width", { required: true })}
                    />
                  </div>
                  <p className="errors">{errors.width?.message}</p>
                </div>
                <div className="form-container">
                  <div className="formgroup">
                    <label htmlFor="">Length (CM)</label>
                    <input
                      type="number"
                      name="length"
                      id="length"
                      {...register("length", { required: true })}
                    />
                  </div>
                  <p className="errors">{errors.length?.message}</p>
                </div>
                <p>Please provide product dimensions</p>
              </div>
            )}

            {selectedOption === "book" && (
              <div className="typeSwitcher">
                <div className="form-container">
                  <div className="formgroup">
                    <label htmlFor="">Weight (KG)</label>
                    <input
                      type="number"
                      name="weight"
                      id="weight"
                      {...register("wieght", { required: true })}
                    />
                  </div>
                  <p className="errors">{errors.weight?.message}</p>
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
