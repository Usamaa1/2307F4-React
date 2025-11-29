import express from 'express'
import { addEmployee, deleteEmployee, getEmployee, searchEmployee, updateEmployee } from '../controllers/employeeController.mjs';

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
employeeRoutes.get('/employeeSearch/:query',searchEmployee)
employeeRoutes.post('/addEmployee',addEmployee);
employeeRoutes.delete('/deleteEmployee/:delId',deleteEmployee);
employeeRoutes.put('/updateEmployee/:upId',updateEmployee);

export default employeeRoutes;
