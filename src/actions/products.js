import { SET_PRODUCTS } from "./types";
import { setCategory } from "./category";

import urls from "../config/urls";
import { productsAPI } from "../services/axiosService";

export const setProducts = (category, products) => ({
  type: SET_PRODUCTS,
  payload: { category, products },
});

export const getProducts =
  (category, setLoader) => async (dispatch, getState) => {
    const { products } = getState();
    if (products[category]) {
      dispatch(setCategory(category));
    } else {
      setLoader(true);
      dispatch(setCategory(category));
      return productsAPI.get(urls.products.search(category)).then(
        async (response) => {
          if (response.data.products.length) {
            dispatch(setProducts(category, response.data.products));
            await new Promise((res) => setTimeout(res, 2000));
          } else
            alert(
              "No category has been established, please use a different name."
            );
          setLoader(false);
          return true;
        },
        (error) => {
          const content =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
          setLoader(false);
          console.log(content);
          return false;
        }
      );
    }
  };
