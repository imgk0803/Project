const { key } = require("../serverConfig.js");
const jwt =require('jsonwebtoken')

function authAdmin(req,res,next){
   const token = req.cookies.token
   jwt.verify(token, key , function(err, decoded) {
    if(err){
        console.log('error',err)
        return res.status(401).send('not verified')
    }
    req.user = decoded
    console.log(req.user.role)
    if (req.user.role !== "admin") {
        return res.send("not authenticated");
      }
      next();
  });

}
module.exports = authAdmin
