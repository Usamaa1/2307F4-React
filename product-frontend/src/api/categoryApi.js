import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  withCredentials: true,
});

export const createCategory = (data) =>
  API.post("/addCategory", data);
