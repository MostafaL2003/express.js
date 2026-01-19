const express = require("express");
const path = require("path");
const posts = require("./routes/posts");
const port = process.env.PORT || 8000;
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/error");
const notFound = require("./middleware/not_found");

const app = express();

//BODY PARSER MIDDLEWARE

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//LOGGER MIDDLEWARE
app.use(logger);

//SETUP STATIC FOLDER
// app.use(express.static(path.join(__dirname,'public')));

//Routes

app.use("/api/posts", posts);

//USE ERROR HANDLER
app.use(notFound);
app.use(errorHandler);


app.listen(port, () => console.log(`Server is running on port ${port}`));
