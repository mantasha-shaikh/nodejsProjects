const CustomAPIError = require("../1middeleware/error_handlers");
const jwt = require('jsonwebtoken')
const login = async (req, res) => {
  const { username, passward } = req.body; 
  console.log(username, passward);
  
  if (!username || !passward) {
    throw new CustomAPIError("pls provide your emails and name ", 400);
  }
const id = new Date().getDate()
const token =jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'})

  //in sign method prove 3 val 
  console.log(username, passward);
res.status(200).json({msg:"user craeted",token})//token mila 
//   res.send("fake/login/signup");
};

const dashboard = async (req, res) => {
  const luckyNum = Math.floor(Math.random() * 100);

  res
    .status(200)
    .json({
      msg: `hello mantu daoe `,
      secret: `here is ypur lucku number${luckyNum}nd authorize datab`,
    });
};

modeule.export = {
  login,
  dashboard,
};
