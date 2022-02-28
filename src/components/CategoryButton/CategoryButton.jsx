import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions/products";
import "./CategoryButton.css";

const CategoryButton = ({ categoryName, setLoader }) => {
  const dispatch = useDispatch();
  let category = useSelector((state) => state.category);

  return (
    <button
      key={categoryName}
      onClick={() => dispatch(getProducts(categoryName, setLoader))}
      className={`list-group-item d-flex justify-content-between fs-5 ${
        category === categoryName && "active-category"
      }`}
    >
      {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
      <i className="btn chevron-right mt-2" />
    </button>
  );
};

export default CategoryButton;
