const express = require("express");
const router = new express.Router();
const Student = require("../models/students");

// create student
router.post("/students", async (req, res) => {
  try {
    const student = new Student(req.body);
    const createStudent = await student.save();
    console.log(req.body);
    res.status(201).send(createStudent);
  } catch (err) {
    es.status(400).send(err);
  }
});

//get all students
router.get("/students", async (req, res) => {
  try {
    const allStudentData = await Student.find();
    res.send(allStudentData);
  } catch (e) {
    res.send(e);
  }
});

//get a single student
router.get("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const singleStudentData = await Student.findById(_id);

    if (!singleStudentData) {
      res.status(404).send();
    } else {
      res.send(singleStudentData);
    }
  } catch (e) {
    req.status(500).send(e);
  }
});

//update a student
router.patch("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateStudent = await Student.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(201).send(updateStudent);
  } catch (e) {
    res.send(e);
  }
});

//delete a student
router.delete("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteStudent = await Student.findByIdAndDelete(_id);
    if (!_id) {
      res.status(400).send();
    } else {
      res.status(204).send(deleteStudent);
    }
  } catch (e) {
    res.send(e);
  }
});

module.exports = router;

// router.get("/viper", (req, res) => {
//   res.send("hello from viper");
// });

// router.post("/students", (req, res) => {
//   console.log(req.body);
//   const student = new Student(req.body);
//   student
//     .save()
//     .then(() => {
//       res.status(201).send(student);
//     })
//     .catch((err) => res.status(400).send(err));
// });
