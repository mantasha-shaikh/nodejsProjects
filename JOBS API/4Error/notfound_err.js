// Bad_Request.js
const CustomAPIError = require("./custom_err"); // no {}

const { StatusCodes } = require("http-status-codes");

class NotFound extends CustomAPIError {
  constructor(message) {
    super(message); // call Error constructor
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

module.exports = NotFound;
