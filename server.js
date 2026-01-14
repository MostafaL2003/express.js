const express = require("express");
const path = require("path");
const port = process.env.PORT || 8000;

const app = express();

//SETUP STATIC FOLDER
// app.use(express.static(path.join(__dirname,'public')));

let posts = [
  { id: 1, title: "post1" },
  { id: 2, title: "post2" },
  { id: 3, title: "post3" },
  { id: 4, title: "post4" },
];

//GET ALL POSTS
app.get("/api/posts", (req, res) => {
  res.json(posts);
});

//GET SIGNLE POSTS
app.get(`/api/posts/:id`, (req, res) => {
  const id = parseInt(req.params.id);
  res.json(posts.filter((posts) => posts.id === id));
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
