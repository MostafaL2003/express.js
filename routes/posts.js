const express = require("express");
const router = express.Router();
const {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/postController");

//GET ALL POSTS
router.get("/", getPosts);

//GET SIGNLE POSTS
router.get(`/:id`, getPost);

//CREATE NEW POST
router.post("/", createPost);

//UPDATE POST
router.put("/:id", updatePost);

//DELETE POST
router.delete("/:id", deletePost);

module.exports = router;
