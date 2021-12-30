import React from "react";

export const PrimarySelect = ({ handleChange, value, options, titles, id }) => {
  return (
    <div className="form-group">
      <label htmlFor="type">{titles}</label>
      <select
        name={id}
        id={id}
        onChange={handleChange}
        className="form-control"
        value={value}
      >
        {options.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
