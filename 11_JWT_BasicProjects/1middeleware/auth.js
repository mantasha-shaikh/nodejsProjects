const { Unauthenticated } = require('../2error')
const jwt = require('jsonwebtoken')

const authorizationMiddleware = async (req, res, next) => {
  const authHeaders = req.headers.authorization
  console.log(authHeaders)   // 👈 Check what client actually sends

  if (!authHeaders || !authHeaders.startsWith("Bearer ")) {
    throw new Unauthenticated('hey pls provide correct token')
  }

  const token = authHeaders.split(' ')[1]
  console.log(token)   // 👈 Should match the token from /login response

try {
  console.log("JWT_SECRET at startup:", process.env.JWT_SECRET) // 👈 yaha
  const decode = jwt.verify(token, process.env.JWT_SECRET) 
  const { id, username } = decode
  req.user = { id, username }
  next()
} catch (err) {
  throw new Unauthenticated('abe token sahi nahi hai')
}

}

module.exports = authorizationMiddleware
