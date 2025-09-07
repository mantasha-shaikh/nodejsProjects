const CustomAPIError = require("./custom_error")
const {StatusCode, StatusCodes} = require('http-status-codes')
class Unauthentiacted extends CustomAPIError {
  constructor(message) {
    super(message) // call Error constructor
      this.statusCode = StatusCodes.UNAUTHORIZED
  }
}
module.exports = Unauthentiacted