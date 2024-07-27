const mongoose = require('mongoose');
const server = require('./serverConfig')
const dbConnect = async()=>{
   try{
   
    
    
      await mongoose.connect(server.url)
      console.log('connected')
    
    
      
    }
   
   catch(err){
     console.log(err)
   }

}
module.exports = dbConnect;

