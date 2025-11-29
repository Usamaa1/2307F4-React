import { Employee } from "../models/employeeModel.mjs"

// export const getEmployee = (req,res)=>{
//     res.send({
//         employeeName: "Amjad",
//         employeeId: 23748273847283,
//         employeeDesignation: "Software Engineer",
//         employeeSalary: 2300000
//     })
// }



export const addEmployee = async (req,res)=>{


   try{
    console.log(req.body)



    await Employee.create(req.body);

    res.send({
        message: "Employee Added Successfully!"
    })
   }
   catch(e){
    console.log(e)
    res.send({errorMessage: e.errors.employeeAge.message})
   }



}





export const getEmployee = async (req,res)=>{


    try {
        
        const emp = await Employee.find();


        res.send({data: emp})
    } catch (error) {
        
        console.log(error)
        res.send({
            errorMessage: error
        })
    }




}



export const deleteEmployee = async (req,res)=>{


    try {

        await Employee.findByIdAndDelete(req.params.delId)
        res.send({
            message: "Employee Deleted Successfully!"
        })
        
    } catch (error) {
        console.log(error)
        res.send({
            error: error
        })
    }



}


export const updateEmployee = async (req,res)=>{


    try {

       const emp =  await Employee.findByIdAndUpdate(req.params.upId,req.body,{new: true})
        res.send({
            message: "Employee Updated Successfully!",
            updatedEmployee: emp
        })
        
    } catch (error) {
        console.log(error)
        res.send({
            error: error
        })
    }

}



export const searchEmployee = async (req,res)=>{

    try {
        
        let {query} = req.params

        const emp = await Employee.find({
            employeeName: {
                $regex: query,
                $options: "i"
            }
        });

        res.send({
            employee: emp
        })

    } catch (error) {
        console.log(error);
        res.send({errorMessage: error});
    }
}

