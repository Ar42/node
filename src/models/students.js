const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 14,
  },
  age: {
    type: Number,
    min: 4,
  },
  roll: {
    type: Number,
    min: 1,
  },
  class: {
    type: Number,
    min: 1,
  },
  isPassed: {
    type: Boolean,
  },
});

// new collection model
const Student = new mongoose.model("Student", studentSchema);

module.exports = Student;
