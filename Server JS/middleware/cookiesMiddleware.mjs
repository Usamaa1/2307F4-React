
import jwt from 'jsonwebtoken';

const cookiesMiddleware = (req,res,next)=>{

    try {
        
        const {token} =  req.cookies;
  console.log(token)
    


        if(token){

            let decode = jwt.verify(token,process.env.JWT_SECRET_KEY);
            console.log(decode)

             if(decode){
            console.log(decode)
            req.user = decode

            console.log(req)
            res.send(decode)
            
            next()
        }
            
        }
        res.send({message: 'Token not Provided'})


        
       
   
    } catch (error) {
        console.error(error)
        res.send({
            message: 'Catch Authorization Failed'
        })
    }

}

export default cookiesMiddleware;
