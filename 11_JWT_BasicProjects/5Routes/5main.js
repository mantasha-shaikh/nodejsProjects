const {CustomAPIError} = require("../1middeleware/error_handlers");
const jwt = require('jsonwebtoken')
const login = async (req, res) => {
  const { username, password } = req.body; 
  console.log(username, password);
  
  if (!username || !password) {
    throw new CustomAPIError("pls provide your emails and name ", 400);
  }
const id = new Date().getDate()
const token =jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'})

  //in sign method prove 3 val 
  console.log(username, password);
res.status(200).json({msg:"user craeted",token})//token mila 
//   res.send("fake/login/signup");
};

const dashboard = async (req, res) => {
console.log(req.headers)
const authHeaders = req.headers.authorization
if(!authHeaders ||!authHeaders.startsWith('Bearer')){
throw new CustomAPIError('NO token ',400)
}
const token = authHeaders.split(' ')[1]
console.log(token)

try{
const decode =jwt.verify(token,process.env.JWT_SECRET)
console.log(decode)
const luckyNum = Math.floor(Math.random() * 100);

  res
    .status(200)
    .json({
      msg: `hello ${decode.username}`,
      secret: `here is ypur lucku number${luckyNum}nd authorize datab`,
    });

}catch(err){
throw new CustomAPIError('abe token sahi nahi hai',401)
}

  
};

module.exports = {
  login,
  dashboard,
};
