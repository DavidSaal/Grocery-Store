import authHeader from "./auth-header";
import { usersDB } from "../services/axiosService";

const getPublicContent = () => {
  return usersDB.get("test/all");
};

const getUserBoard = () => {
  return usersDB.get("test/user", { headers: authHeader() });
};

const getModeratorBoard = () => {
  return usersDB.get("test/mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return usersDB.get("test/admin", { headers: authHeader() });
};

export default {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};
