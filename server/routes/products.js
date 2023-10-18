const express = require("express");
const router = express.Router();

const post = [
  { name: "Cris", email: "Cris email" },
  { name: "Arvid", email: "Arvid email" },
];
router.get("/", (req, res) => {
  res.send(post);
});
module.exports = router;
