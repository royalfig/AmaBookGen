var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
  res.render("search", {
    title: "Search the Book Generator"
  });
});

module.exports = router;
