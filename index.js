const express = require("express");
const cors = require('cors')
const mongoose = require("mongoose");

const jopPortalSearch = require("./routes/jobPortal.route");
const auth = require("./routes/auth");
const users = require("./routes/users");

require("dotenv").config();

mongoose.set("strictQuery",true);

// console.log(process.env.DB_URL);
mongoose.connect(process.env.DB_URL).then(() => console.log("Connected On Mongoose")).catch(() => console.log("Error Accoured on Connecting Mongoose DB"));
const app = express();

app.use(express.json());
app.use(cors());
app.use(`/api/job`, jopPortalSearch);
app.use(`/api/auth`, auth);
app.use(`/api/users`, users);


app.get("/", (req, res) => {
  res.send("Your in Home Page");
});

app.listen(process.env.PORT, () => {
  console.log(`Connected on Port ${process.env.PORT}`);
});
