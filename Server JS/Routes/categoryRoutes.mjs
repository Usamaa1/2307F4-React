import express from "express";
import { AddCategory } from "../controllers/categoryController.mjs";
const categoryRoutes = express.Router();



categoryRoutes.post("/addCategory",AddCategory);


export default categoryRoutes;

