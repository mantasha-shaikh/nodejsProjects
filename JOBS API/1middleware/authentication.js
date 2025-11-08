const User = require('../5model/user')
const jwt = require("jsonwebtoken")
const {UnauthenticatedError}=require("../4Error")
const auth =async (req,res,next)=>{
    //check header
    const authHeader =req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer')){
        throw new UnauthenticatedError("auntheneticated invalid")
    }
    const token =authHeader.split(' ')[1]
    try{
        const playLoad = jwt.verify(token,process.env.JWT_SECRET)
        //attach the user to job routes
        req.user ={userId:playLoad.userId ,name :playLoad.name}
        next()
    }
    catch(error){
        throw new UnauthenticatedError("authenticated invalid")
    }
}
module.exports = auth