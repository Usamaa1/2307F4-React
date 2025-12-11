import express from 'express'
import { userLogin, userRegister } from '../controllers/userController.mjs';


const userRoutes = express.Router();





userRoutes.post('/register',userRegister);
userRoutes.post('/login',userLogin);

export default userRoutes;
