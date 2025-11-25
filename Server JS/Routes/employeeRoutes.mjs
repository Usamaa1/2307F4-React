import express from 'express'
import { getEmployee } from '../controllers/employeeController.mjs';

const employeeRoutes = express.Router();




// employeeRoutes.get('/employee',(req,res)=>{
//     res.send({
//         employeeName: "Amjad",
//         employeeId: 23748273847283,
//         employeeDesignation: "Software Engineer",
//         employeeSalary: 2300000
//     })
// })


employeeRoutes.get('/employee',getEmployee)

export default employeeRoutes;
