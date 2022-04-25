import React from "react";
import "./button.scss";

const Button = ({ title, id }) => {
  return (
    <>
      <button id={id}>{title}</button>
    </>
  );
};

export default Button;
