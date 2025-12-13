
import jwt from 'jsonwebtoken';

const headerMiddleware = (req,res,next)=>{

    try {
        
        const head =  req.headers.authorization;
        // console.log(head)
        console.log(head.split(' ')[1])

        let token = head.split(' ')[1]


        let decode = jwt.verify(token,process.env.JWT_SECRET_KEY);
        
        if(decode){
            console.log(decode)
            req.user = decode

            console.log(req)
            
            next()
        }
   
    } catch (error) {
        res.send({
            message: 'Catch Authorization Failed'
        })
    }

}

export default headerMiddleware;
