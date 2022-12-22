const express = require("express");
const router = express.Router();
const User = require("../models/User");
//POST :  ADD A NEW USER TO THE DATABASE
router.post("/newUser", (req, res) => {
  let newUser = new User(req.body);
  newUser.save((err, data) => {
    err ? console.log(err) : res.send({ msg: "New user was added" });
  });
});

//GET :  RETURN ALL USERS
router.get("/getAll", (req, res) => {
  User.find({}, (err, data) => {
    err ? console.log(err) : res.json(data);
  });
});

//PUT : EDIT A USER BY ID
router.put("/:id", (req, res) => {
  User.findByIdAndUpdate(
    { _id: req.params.id },
    { ...req.body },
    (err, data) => {
      err ? console.log(err) : res.json({ msg: "User is updated" });
    }
  );
});

//DELETE : REMOVE A USER BY ID
router.delete("/:id", (req, res) => {
  User.findByIdAndDelete({ _id: req.params.id }, (err, data) => {
    err ? console.log(err) : res.json({ msg: "User was deleted" });
  });
});

module.exports = router;
