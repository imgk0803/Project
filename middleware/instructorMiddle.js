const { key } = require("../serverConfig.js");
const jwt =require('jsonwebtoken')

function insAuth(req,res,next){
const token = req.cookies.token
JsonWebTokenError.verify(token,key ,function(err,result){
    if(err){
     console.log("error : " ,err)
     return res.send('not verified token')

    }
    req.user = result
    if(req.user.role !== "admin" || req.user.role !== "instructor" ){
        return res.send('its neighter admin nor instructor')
    }
    next();
})


}
module.exports = insAuth