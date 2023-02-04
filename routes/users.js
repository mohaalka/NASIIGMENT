const express = require("express");
const router = express.Router();
const { User } = require("../models/user.model");
const bcrypt = require("bcrypt");

router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.send({ data: user });
});

router.post("/", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("user already registered");

  user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  /// hash password
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();

  res.send({ data: user });
});

router.put("/:id", async (req, res) => {
  // hash password before update
  const salt = await bcrypt.genSalt(10);
  req.body.password = await bcrypt.hash(req.body.password, salt);

  const user = await User.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    },
    { new: true }
  );

  if (!user) return res.status(404).send("user is not exist in the db");

  res.send({ data: user });
});

router.delete("/:id", async (req, res) => {
  const user = await User.findByIdAndRemove(req.params.id);
  if (!user) return res.status(404).send("user is not exist in the db");

  res.send({ data: user });
});

module.exports = router;
