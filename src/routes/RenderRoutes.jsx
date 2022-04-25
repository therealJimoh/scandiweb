import React from "react";
import { Route, Routes } from "react-router-dom";
import { AddProduct, ProductList } from "../pages";

const ROUTES = [
  {
    path: "/",
    key: "Product List",
    element: <ProductList />,
  },
  {
    path: "/add-product",
    key: "Add Product",
    element: <AddProduct />,
  },
];

export default ROUTES;

export const RenderRoutes = ({ routes }) => {
  return (
    <Routes>
      {routes.map((route) => {
        return (
          <Route
            key={route.key}
            path={route.path}
            element={<>{route.element}</>}
          />
        );
      })}

      <Route path="*" element={<h1>Page Not Found! Go back</h1>} />
    </Routes>
  );
};
