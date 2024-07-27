 const jwt = require('jsonwebtoken')
 const dotenv = require('dotenv')
dotenv.config();

const secret_key = process.env.SECRET_KEY;

const generateToken = (email) => {
  return jwt.sign({ data: email }, secret_key, { expiresIn: "1d" });
};
module.exports = generateToken;


