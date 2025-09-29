const CustomAPIError = require('./custom_err')
const BadRequest = require("./BadRequest_err")
const NotFound =require("./notfound_err")
const Unauthentiacted = require("./Unauthenticated_err")
module.exports={
    CustomAPIError,
    BadRequest,
    Unauthentiacted,
    NotFound

}