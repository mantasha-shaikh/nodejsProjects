class CustomAPIError extends Error{
    constructor(message,statusCode){
        super(message)
        this.statusCode =statusCode
    }
}
const createCustomErroe = (msg,statusCode)=>{
    return new CustomAPIError(msg,statusCode)
}
module.exports ={CustomAPIError,createCustomErroe}