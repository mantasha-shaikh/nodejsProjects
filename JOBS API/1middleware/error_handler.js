// const {CustomAPIError}=require('../2error/cutom_error')
const {CustomAPIError}=require('../4Error')
const {StatusCodes}= require("http-status-codes")
const  errorHandlerMiddleware =(err,req,res,next)=>{
    console.log(err.message);
    if(err instanceof CustomAPIError){
        return res.status(err.statusCode).json({msg:err.message})
    }


    
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:`somthing when wrong here `})
}
module.exports =errorHandlerMiddleware;