// Bad_Request.js
const CustomAPIError = require("./custom_error"); // no {}

const { StatusCodes } = require("http-status-codes");

class Bad_Request extends CustomAPIError {
  constructor(message) {
    super(message); // call Error constructor
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

module.exports = Bad_Request;
