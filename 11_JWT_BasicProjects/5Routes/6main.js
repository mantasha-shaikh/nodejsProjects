const {Bad_Request} =require('../2error')
const jwt = require('jsonwebtoken')
const login = async (req, res) => {
  const {username,password }= req.body
  console.log(username,password);
  if(!username || !password){
throw new Bad_Request('pls prove emails and passward')
  }
  const id=new Date().getDate()
  const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:"15d"})
  console.log(token);
  
  res.status(200).json({msg:"user created ",token})
};

const dashboard = async (req, res) => {
  // console.log(req.headers);

console.log(req.user);

    const luckyNum = Math.floor(Math.random() * 100);

  res
    .status(200)
    .json({
      msg: `hello ${req.user.username}`,
      secret: `here is ypur lucku number${luckyNum}nd authorize datab`,
    });




  

};

module.exports = {
  login,
  dashboard,
};
