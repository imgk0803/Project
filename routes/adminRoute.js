const express = require('express')
const adminRouter = express.Router()
const courseController = require('../controllers/courseController')
const instructorController = require('../controllers/instructorController')
const authAdmin = require('../middleware/adminMiddle')
const upload = require('../middleware/uploadMiddleware')
adminRouter.patch('/admin/:cid',authAdmin,courseController.editCourse)
adminRouter.post('/admin', upload.single("image") ,courseController.addcourse)
adminRouter.get('/admin', courseController.getallcourse)
adminRouter.delete('/admin/:cid', authAdmin , courseController.deletecourse)
adminRouter.post('/instructor/signup', instructorController.isignup)
adminRouter.post('/instructor/signin',instructorController.isignin)


module.exports = adminRouter