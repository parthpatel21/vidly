import React from "react";
import { Link } from "react-router-dom";

const Button = ({ label, goto }) => {
  return (
    <Link to={goto}>
      <button className="btn btn-primary btn-large ">{label}</button>
    </Link>
  );
};

export default Button;
