const express = require("express");
const router = express.Router();
const authorController = require("../controller/authorController");
const blogController = require("../controller/blogController");

router.get("/test-me", function (req, res) {
  res.send("My first ever api!");
});

router.post("/authors", authorController.CreateAuthor);

// get api
router.get("/blogs", blogController.allBlogs)

module.exports = router;
