var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "김민준", name: "홍길동" });
});

module.exports = router;
