import { combineReducers } from "redux";

import auth from "./auth";
import message from "./message";
import products from "./products";
import category from "./category";

const allReducers = combineReducers({
  auth,
  message,
  products,
  category,
});

export default allReducers;
