import express from "express";
import {
  filterProducts,
  searchProducts,
  sortProducts,
  productsWithCategory,
  createProduct,
} from "../controllers/productController.mjs";

const productRoutes = express.Router();

productRoutes.post("/products/create", createProduct);
productRoutes.get("/products/filter", filterProducts);
productRoutes.get("/products/search", searchProducts);
productRoutes.get("/products/sort", sortProducts);
productRoutes.get("/productsWithCategory", productsWithCategory);

export default productRoutes;