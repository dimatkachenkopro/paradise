import React from "react";

export const PrimarySelect = ({ handleChange, value, options, titles }) => {
  return (
    <div className="form-group">
      <label htmlFor="type">{titles}</label>
      <select
        name="type"
        id="type"
        onChange={handleChange}
        className="form-control"
        value={value}
      >
        {options}
      </select>
    </div>
  );
};
