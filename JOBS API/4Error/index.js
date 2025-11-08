const CustomAPIError = require('./custom_err')
const BadRequest = require("./BadRequest_err")
const NotFound =require("./notfound_err")
const UnauthenticatedError = require("./Unauthenticated_err")
module.exports={
    CustomAPIError,
    BadRequest,
    UnauthenticatedError,
    NotFound,

}