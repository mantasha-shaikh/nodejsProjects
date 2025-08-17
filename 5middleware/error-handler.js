const {CustomAPIError}=require('../error/custom-error')
const  errorHandlerMiddleware =(err,req,res,next)=>{
    console.log(err);
    if(err instanceof CustomAPIError){
        return res.status(err.statusCode).json({msg:err.message})
    }
    
    return res.status(500).json({msg:`somthing when wrong here `})
}
module.exports =errorHandlerMiddleware



// const  errorHandlerMiddleware =(err,req,res,next)=>{
//     console.log(err);
    
//     return res.status(err.status).json({msg:`somthing when wrong here `})
// }
// module.exports =errorHandlerMiddleware