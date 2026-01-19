const errorHandler = (err, req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  if (err.status) {
    res.status(err.status).json({ msg: err.message });
  } else {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = errorHandler;
