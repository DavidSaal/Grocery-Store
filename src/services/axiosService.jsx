import axios from "axios";
import urls from "../config/urls";

export const usersDB = axios.create({
  baseURL: urls.users.base,
});

export const productsAPI = axios.create({
  baseURL: urls.products.base,
});
