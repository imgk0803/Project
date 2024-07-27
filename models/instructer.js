const mongoose =require('mongoose')

const instructorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ["instructor", "admin"],
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
    },
    courses : [{ type: mongoose.Types.ObjectId, ref: "Course" }]
})
const Instructor = new mongoose.model('instructor', instructorSchema); //Now we can use the I to create new Instructor
module.exports = Instructor; 