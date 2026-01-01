import express from 'express'
import {  profile, userRegister } from '../controllers/userController.mjs';
import headerMiddleware from '../middleware/headerMiddleware.mjs';
import { userLogin } from '../controllers/userControllerWithCookieAuth.mjs';
import cookiesMiddleware from '../middleware/cookiesMiddleware.mjs';


const userRoutes = express.Router();





userRoutes.post('/register',userRegister);
// userRoutes.post('/login',userLogin);
userRoutes.post('/login',userLogin);
userRoutes.get('/profile',cookiesMiddleware,profile)

export default userRoutes;
