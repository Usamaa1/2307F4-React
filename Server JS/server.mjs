import express from 'express'
const app = express()
const port = 3000

app.use(express.json())

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




app.post('/product', (req, res) => {
    console.log(req.body);
    const {prodName,prodPrice,prodDesc} = req.body;
    console.log("Single entity Values",prodName,prodPrice,prodDesc);
    res.send('Product Added Successfully')
})

//params
app.post('/employees/:empId',(req,res)=>{

    const {empId} = req.params;
    console.log(empId);

    res.send(`Employees Id: ${empId}`)
})

//Query Parameter

app.post('/student',(req,res)=>{
    const {stdId} = req.query;
    console.log(stdId);
    res.send(`Student Id: ${stdId}`)
})





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
