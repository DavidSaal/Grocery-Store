import React from "react";
import Search from "../Search";
import "./Banner.css";

const Banner = ({ setSearchedValue }) => {
  return (
    <form className="d-flex row input-group text-center justify-content-center align-items-center">
      <h1 className="pb-2">Products Delivered in 90 Minutes</h1>
      <p className="pb-2">
        Get your products delivered at your doorsteps all day everyday
      </p>
      <div className="w-40">
        <Search
          setSearchedValue={setSearchedValue}
          placeholder="E.g: Meat, Yogurt, Eggs&#8230;"
        />
      </div>
    </form>
  );
};

export default Banner;
