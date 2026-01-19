const colors = require("colors");

const logger = (req, res, next) => {
  const methodcolors = {
    GET: "green",
    POST: "blue",
    PUT: "yellow",
    DELETE: "red",
  };

  const color = methodcolors[req.method] || white;

  console.log(
    `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`[
      color
    ],
  );
  next();
};

module.exports = logger;
