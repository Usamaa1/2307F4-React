import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  withCredentials: true,
});

export const createProduct = (data) =>
  API.post("/products/create", data);

export const getFilteredProducts = (params) =>
  API.get("/products/filter", { params });

export const searchProducts = (q) =>
  API.get("/products/search", { params: { q } });

export const sortProducts = (sort, order) =>
  API.get("/products/sort", { params: { sort, order } });

export const getProductsWithCategory = () =>
  API.get("/productsWithCategory");
