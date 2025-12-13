import express from 'express'
import { dashboard, userRegister } from '../controllers/userController.mjs';
import headerMiddleware from '../middleware/headerMiddleware.mjs';
import { userLogin } from '../controllers/userControllerWithCookieAuth.mjs';


const userRoutes = express.Router();





userRoutes.post('/register',userRegister);
// userRoutes.post('/login',userLogin);
userRoutes.post('/login',userLogin);
userRoutes.get('/dashboard',headerMiddleware,dashboard)

export default userRoutes;
