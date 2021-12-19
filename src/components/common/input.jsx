import React from "react";

const Input = ({ name, label, error, ...otherProps }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input name={name} id={name} className="form-control" {...otherProps} />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
