const { User } = require("../models/user.model");
const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("email or password incorrect");

  const validPassword = await bcrypt.compare(req.body.password, user.password);

  if (!validPassword)
    return res.status(400).send("email or password incorrect");

  res.send({ data: user });
});

module.exports = router;
