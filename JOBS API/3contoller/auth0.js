const { model } = require("mongoose")
const {StatusCodes } =require('http-status-codes')
const User = require("../5model/user")
const { BadRequest } = require("../4Error")

const register = async(req,res)=>{
    const {name,email,password} = req.body
    if(!name||!email||passward){
        throw new BadRequest("pls provide valid paassward email, name")
    }
const user = await User.create({...req.body})
res.status(StatusCodes.CREATED).json({user})

    // 1 res.json(req.body) featch email
// 0 res.send("register here")
}
const login = async(req,res)=>{
    res.send("lofin here")
}

module.exports ={
    login,
    register
}