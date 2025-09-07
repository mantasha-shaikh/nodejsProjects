const { CustomAPIError } = require("../2error/custom_error");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);

  //mango
  //joi
  //check in the controler

  if (!username || !password) {
    throw new CustomAPIError("pls provide email and passward", 400);
  }

  //just for demo ,normal provide by DB!!!!

  const id = new Date().getDate();

  //try to keep playload small,better expricene for user
  //just for demo , in prduction use long ,complex unglassble syring value be save at home

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  // res.send('fake login/signup route')
  res.status(200).json({ mesg: "user created ", token });
};

const dashboard = async (req, res) => {
  console.log(req.headers);

  const authHeaders = req.headers.authorization;
  if (!authHeaders || !authHeaders.startsWith("Bearer")) {
    throw new CustomAPIError("No token provided", 401);
  }

  const luckyNum = Math.floor(Math.random() * 100);
  res
    .status(200)
    .json({
      msg: `hello ,`,
      secret: ` here is your authorize data and you lucy number isd ${luckyNum}`,
    });
};

module.exports = {
  login,
  dashboard,
};
