import { User } from "../models/User.mjs"
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';


export const userRegister = async (req,res)=>{

    try {
        
        const ifUser = await User.findOne({email: req.body.email});

        console.log(ifUser);

        if(ifUser) return res.send({message: 'User already exists!'})


            let {email,password,userName} = req.body;

            

            const hashedPassword = await bcrypt.hash(password,12) // abc --> hfk --> kih --> jha ---> 12 times

        await User.create({
            email, password: hashedPassword, userName
        });

        res.send({
            message: "User Created Successfully!"
        })


    } catch (error) {
        console.log(error)
        res.send({
            errorMessage: "Some error occured!"
        })
    }





}


export const userLogin = async (req,res)=>{
    try {

              
        let {email,password} = req.body;

        const ifUser = await User.findOne({email: email});

        console.log(ifUser);

        if(!ifUser) return res.send({message: 'Invalid credentials'})

         const isPasswordMatched = await bcrypt.compare(password,ifUser.password);

         if(!isPasswordMatched) return res.send({message: 'Invalid credentials'});


         let userToken = jwt.sign({id: ifUser._id, userName: ifUser.userName, email: ifUser.email},process.env.JWT_SECRET_KEY,{expiresIn: '1h'})

         res.send({userToken})



        
    } catch (error) {
        
    }
}



