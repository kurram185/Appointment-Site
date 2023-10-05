const jwt = require("jsonwebtoken");
const User = require("./schema");

const authentication = async (req, res, next) => {
  try {
    const token = await req.cookies.jwToken;
    const verify = jwt.verify(token, process.env.SECRET_KEY);
    const rootUser = await User.findOne({
      _id: verify._id,
      "tokens.token": token,
    });
    if (!rootUser) {
      throw new Error("User Not Found");
    }
    req.token = token;
    req.rootUser = rootUser;
    req.userId = rootUser._id;

    next();
  } catch (error) {
    res.status(401).send({ message: "Unauthorized" });
    console.log(error);
  }
};

module.exports = authentication;
