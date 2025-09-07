
const {Unauthentiacted}=require('../2error')

const jwt = require('jsonwebtoken')
const authorizationMiddleware = async(req,res , next)=>{
    // console.log(req.headers.authorization);
      const authHeaders =  req.headers.authorization
      console.log(authHeaders);
      if(!authHeaders ||!authHeaders.startsWith("Bearer ")){
        throw new Unauthentiacted('hey pls provide correct toen')
      }
      const token = authHeaders.split(' ')[1]
    console.log(token)

    
try{
  const decode = jwt.verify(token,process.env.JWT_SECRET)
  const {id,username}=decode
  req.user={id,username}
      next()
// console.log(decode);
}
catch(err){
     throw new Unauthentiacted('abe token sahi nahi hai')
//   throw new CustomAPIError('abe token sahi nahi hai',401)
}
    
}
module.exports=authorizationMiddleware