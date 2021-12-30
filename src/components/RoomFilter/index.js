import React from "react";
import { useContext } from "react";
import { RoomContext } from "../../contex";
import Title from "../Title";
import { getUnique } from "../../utils";
import { PrimarySelect } from "../PrimarySelect";

const RoomFilter = ({ rooms }) => {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        <PrimarySelect
          titles="Room type"
          handleChange={handleChange}
          value={type}
          options={["all"].concat(...getUnique(rooms, "type"))}
          id="type"
        />
        <PrimarySelect
          titles="Guests"
          handleChange={handleChange}
          value={capacity}
          options={getUnique(rooms, "capacity")}
          id="capacity"
        />
        <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">room size </label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">pets</label>
          </div>
        </div>
      </form>
    </section>
  );
};

export default RoomFilter;
