const express = require("express");
const app = express();
const cors = require("cors");

//Middleware app.use
app.use(cors());

const data = [
  { name: "Cris", email: "Cris email" },
  { name: "Arvid", email: "Arvid email" },
];

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/post", (req, res) => {
  res.send(data);
});

app.listen(8080);
