const { required } = require('joi')
const  mongoose = require('mongoose')
const bcrypt =require("bcryptjs")
const jwt= require("jsonwebtoken")

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'pls provides your name'],
        minlength:3,
        maxlength:50,
    },
     email:{
        type:String,
        required:[true,'pls provides your email'],
        minlength:3,
        maxlength:50,
         match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please provide a valid email',
    ],
    unique:true,
    },
    password:{
        type:String,
        required:[true,'pls provides your pswd'],
        minlength:6,
    
    },


})

UserSchema.pre('save',async function(){
    const salt = await bcrypt.genSalt(10)
    this.password =await bcrypt.hash(this.password ,salt)
    // next()
}) 
//intace-method
UserSchema.methods.createjwt =function (){
    return jwt.sign({userId:this._id ,name :this.name},process.env.JWT_SECRET,{//''secret
        expiresIn:process.env.JWT_LIFETIME,//30d
    })
}

//comapre pswd 
UserSchema.methods.comparePassword = async function(candidatePwd){
    const isMatch = await bcrypt.compare(candidatePwd,this.password)
    return isMatch

}
module.exports =  mongoose.model('User',UserSchema);