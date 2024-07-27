const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        minLength: 3,
        maxLength: 30,
      },
      password: {
        type: String,
        required: true,
        minLength: 6,
      },
      firstName: {
        type: String,
        required: true,
        maxLength: 50,
      },
      lastName: {
        type: String,
        required: true,
        maxLength: 50,
      },
         courses: [{ type: mongoose.Types.ObjectId, ref: "Course" }],
  },
  { timestamps: true }
      
  );
  const User= mongoose.model('user', userSchema);
  module.exports = User;