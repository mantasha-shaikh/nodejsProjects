// const {CustomAPIError}=require('../2error/cutom_error')
const { object } = require('joi');
const {CustomAPIError}=require('../4Error')
const {StatusCodes}= require("http-status-codes")


const  errorHandlerMiddleware =(err,req,res,next)=>{

    //  console.log(err);
 let customError = {
    statusCode:err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg:err.message||'somethibg when wrong'
 }   
    console.log(err.message);
    // if(err instanceof CustomAPIError){
    //     return res.status(err.statusCode).json({msg:err.message})
    // }
    if(err.name === 'ValidationError'){
        customError.msg = Object.values(err.errors).map((item)=>item.message).join(',')
        customError.statusCode = 400;

    }
    if(err.code && err.code ===11000){
        customError.msg = `duplicate value enter for ${Object.keys(err.keyValue)} fileds pls choose another value`
        customError.statusCode = 400

    }
    if(err.name === 'CastError'){
        customError.msg =`no item found ${err.value}
        `
        customError.statusCode =404
    }

    return res.status(customError.statusCode).json({msg:customError.msg})
   //  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({err})
}
module.exports =errorHandlerMiddleware;