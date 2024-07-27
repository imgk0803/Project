const Course = require('../models/course');
const Instructor = require('../models/instructer');
const cloudinaryInstance =require('../cloudinaryConfig')

  
const addcourse = async(req,res,next)=>{
        try{
            console.log(req.file.path)
             if(!req.file){
                 return res.send('the file is not visible')
             }
        const result = await cloudinaryInstance.uploader.upload(req.file.path)
        const imageUrl = result.secure_url
        const body = req.body
        const {title , description , price , instructor } = body
        const findInstructor = await Instructor.findOne({ email: instructor });
         if(!findInstructor){
            return res.send('add instructor first')
         }
    

        const course = new Course({
            title,
            description,
            image : imageUrl,
            price,
             instructor : [findInstructor._id] })
        await course.save()
        const ins = await Instructor.findByIdAndUpdate(findInstructor._id,{$push :{courses :course._id}},{new : true})
        res.status(200).json(course)


    }
    catch(error){
        console.error(error)
        res.status(404).send('not created')
    }
}
const editCourse = async(req,res,next)=>{
    try{
           const newcourse = await Course.findByIdAndUpdate(req.params.cid, req.body, {new:true})
           res.status(200).json(newcourse)
    }
    catch(error){
           res.status(404).send('not updated')
    }
}
const getallcourse = async (req,res,next)=>{
  try{
    const courses = await Course.find()
    res.status(200).json(courses)


  }
  catch(error){
        res.status(500).send('no courses')
  }

}
const deletecourse = async(req,res,next)=>{
    try{
        await Course.findByIdAndDelete(req.params.cid)
        res.status(200).send('deleted')

    }
    catch(error){
        res.status(500).send('cant delete')
    }
}

module.exports = {addcourse , editCourse , getallcourse ,deletecourse}