let posts = [
  { id: 1, title: "post1" },
  { id: 2, title: "post2" },
  { id: 3, title: "post3" },
  { id: 4, title: "post4" },
];

//@Desc GET ALL POSTS
//@route GET /api/posts
export const getPosts = (req, res, next) => {
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit)) {
    return res.status(200).json(posts.slice(0, limit));
  }
  res.status(200).json(posts);
};

//@Desc GET SINGLE POST
//@route GET /api/posts/:id
export const getPost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    const error = new Error(`A POST WITH THE ID OF ${id} WAS NOT FOUND`);
    error.status = 404;
    return next(error);
  }
  res.status(200).json(post);
};

//@Desc CREATE NEW POST
//@route GET /api/posts/

export const createPost = (req, res, next) => {
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
};

//@Desc UPDARE POST
//@route PUT /api/posts/:id
export const updatePost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).json({ msg: `A POST WITH ${id} DOESNT EXIST` });
  } else {
    post.title = req.body.title;
    res.status(200).json(posts);
  }
};

//@Desc DELETE POST
//@route DELETE /api/posts/:id
export const deletePost =(req, res, next) => {
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
};
