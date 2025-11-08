
const User = require("../5model/user")
const {StatusCodes}= require("http-status-codes")
const {BadRequest,UnauthenticatedError} = require("../4Error")
// const bcrypt =require("bcryptjs")
const jwt = require("jsonwebtoken")


const register =async(req,res)=>{

 const user = await User.create(req.body)
 const token = user.createjwt()


//2    const user = await User.create(req.body)
//    const token =  jwt.sign({userId :user._id,name :user.name},'jwtSecret',{
//     expiresIn:'30',
//    })

  res.status(StatusCodes.CREATED).json({user :{name :user.name},token})


// const {name,email,password} =(req.body)
// const salt =await bcrypt.genSalt(10)
// const hashedPassword = await bcrypt.hash(password,salt)
// const tempUser = {name,email, password:hashedPassword}
// const user = await User.create({...tempUser})
//    res.status(StatusCodes.CREATED).json({user})

}

const login =async(req,res)=>{
const {email,password} = req.body

if(!email || !password){
    throw new BadRequest("pls provide email and pwd")

}

const user = await User.findOne({email})

if(!user){
    throw new UnauthenticatedError('invalid credential')
}
//lastScenen Movies
const isCorrectPwd = await user.comparePassword(password)
if(!isCorrectPwd){
    throw new UnauthenticatedError('invalid Password')
}
//compare pswd

const token = user.createjwt();
res.status(StatusCodes.OK).json({user:{name:user.name},token})
    // res.json(req.body)
}


module.exports ={
    login,
    register
}