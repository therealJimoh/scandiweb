import React from "react";
import "./button.scss";

const Button = ({ title, id, type, form }) => {
  return (
    <>
      <button type={type} form={form} id={id}>{title}</button>
    </>
  );
};

export default Button;
