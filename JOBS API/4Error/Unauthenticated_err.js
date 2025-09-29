const CustomAPIError = require('./custom_err')
const statusCode = require("http-status-codes")

class Unauthenticated extends CustomAPIError{
    constructor(message){
        super(message)
        this.statusCode = statusCode.StatusCodes.UNAUTHORIZED
    }
}