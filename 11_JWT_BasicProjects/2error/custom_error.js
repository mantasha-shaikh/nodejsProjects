// custom_error.js
class CustomAPIError extends Error {
  constructor(message) {
    super(message);
  }
}

module.exports =  CustomAPIError ;


// Custom Error Class
// class CustomAPIError extends Error {
//   constructor(message, statusCode) {
//     super(message) // call Error constructor
//     this.statusCode = statusCode
//   }
// }

// // Factory function for easy usage
// const createCustomError = (msg, statusCode) => {
//   return new CustomAPIError(msg, statusCode)
// }


// module.exports = { CustomAPIError, createCustomError }


