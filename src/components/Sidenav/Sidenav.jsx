import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import Search from "../Search";
import CategoryButton from "../CategoryButton";
import "./Sidenav.css";
import { getProducts } from "../../actions/products";

const Sidenav = ({ setLoader }) => {
  const [searchedValue, setSearchedValue] = useState("");
  const [searchedCategories, setSearchCategories] = useState([]);
  const [searchLoader, setSearchLoader] = useState(false);
  let products = useSelector((state) => state.products);

  const dispatch = useDispatch();

  const categories = [
    "milk",
    "soup",
    "juice",
    "dinner",
    "frozen",
    "snack",
    "coffee",
    "cookie",
    "veg",
    "vegetarian",
  ];

  const handleSearchCategory = () => {
    if (searchedValue && !products[searchedValue]) {
      setSearchLoader(true);
      dispatch(getProducts(searchedValue, setLoader)).then(
        (result) =>
          result && setSearchCategories([...searchedCategories, searchedValue])
      );
      setSearchLoader(false);
    }
  };

  return (
    <div className="border-end sidebar-wrapper shadow-sm">
      <div className="w-100 p-2 pb-1">
        <Search
          setSearchedValue={(value) =>
            setSearchedValue(value.toLowerCase().replace(/\s/g, ""))
          }
          onClick={handleSearchCategory}
          placeholder="Search category&#8230;"
        />
      </div>
      <div className="list-group list-group-flush">
        {searchedCategories.length > 0 && (
          <>
            {searchLoader && <Skeleton className="bg-light" height={70} />}
            <h6 className="text-center border-top border-bottom p-2 mb-0">
              Search History
            </h6>
            {searchedCategories.map((categoryName) => (
              <CategoryButton
                key={categoryName}
                categoryName={categoryName}
                setLoader={setLoader}
              />
            ))}
            <h6 className="text-center border-top border-bottom p-2 mb-0">
              Category List
            </h6>
          </>
        )}
        {categories.map((categoryName) => (
          <CategoryButton
            key={categoryName}
            categoryName={categoryName}
            setLoader={setLoader}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidenav;
