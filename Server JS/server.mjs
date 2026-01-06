import express from 'express'
import employeeRoutes from './Routes/employeeRoutes.mjs'
// import {db} from './connection/connection.mjs'
import { main } from './connection/mongooseConnection.mjs'
import userRoutes from './Routes/userRoutes.mjs'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import mailRoutes from './Routes/mailRoutes.mjs'
import imageRoutes from './Routes/imageRoutes.mjs'


const app = express()
const port = 3000
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true, 
  allowedHeaders: ['Content-Type', 'Authorization'] 
}));
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!')
})


// app.get('/users',(req,res)=>{
//     res.json({
//         username:"Arif",
//         mail: "arif@gmail.com",
//         address: "House no.R-23, N.Nazimabad Block F, Karachi"
//     })
// })


// app.get('/file',(req,res)=>{
//     // res.sendFile('')
// })

// app.get('/download',(req,res)=>{
//     // res.download('')
// })

// app.get('/unAuth',(req,res)=>{
//     res.status(401).send('Your user is unAuthorized')
// })

// app.get('/unAuth',(req,res)=>{
//     res.sendStatus(401)
// })

// app.get('/redirect',(req,res)=>{
//     res.redirect('https://www.google.com/')
// })


// REQUEST METHODS

app.post('/product', (req, res) => {
    console.log(req.body);
    const {prodName,prodPrice,prodDesc} = req.body;
    console.log("Single entity Values",prodName,prodPrice,prodDesc);
    res.send('Product Added Successfully')
})

//params
// app.post('/employees/:empId',(req,res)=>{

//     const {empId} = req.params;
//     console.log(empId);

//     res.send(`Employees Id: ${empId}`)
// })

//Query Parameter

// app.post('/student',(req,res)=>{
//     const {stdId} = req.query;
//     console.log(stdId);
//     res.send(`Student Id: ${stdId}`)
// })



app.use('/api/v1',employeeRoutes);
app.use('/api/v1',userRoutes);
app.use('/api/v1',mailRoutes);
app.use('/api/v1',imageRoutes);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
