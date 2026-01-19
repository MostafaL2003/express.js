const express = require("express");
const router = express.Router();


let posts = [
  { id: 1, title: "post1" },
  { id: 2, title: "post2" },
  { id: 3, title: "post3" },
  { id: 4, title: "post4" },
];



//GET ALL POSTS
router.get("/",(req, res,next ) => {
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit)) {
    return res.status(200).json(posts.slice(0, limit));
  }
  res.status(200).json(posts);
});

//GET SIGNLE POSTS
router.get(`/:id`, (req, res,next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    const error = new Error(`A POST WITH THE ID OF ${id} WAS NOT FOUND`);
    error.status = 404;
    return next(error);
  }
  res.status(200).json(post);
});

//CREATE NEW POST
router.post("/", (req, res,next) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };
  if (!newPost.title) {
    const error = new Error(`Please include a title`);
    error.status = 400;
    return next(error);
  } else {
    posts.push(newPost);
  }
  res.status(201).json(posts);
});

//UPDATE POST
router.put("/:id", (req, res,next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).json({ msg: `A POST WITH ${id} DOESNT EXIST` });
  } else {
    post.title = req.body.title;
    res.status(200).json(posts);
  }
});

//DELETE POST
router.delete("/:id", (req, res,next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).json({ msg: `A POST WITH ${id} DOESNT EXIST` });
  } else {
    posts = posts.filter((post) => {
      return post.id !== id;
    });
    res.status(200).json(posts);
  }
});

module.exports = router;
