<<<<<<< HEAD
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

if(process.env.NODE_ENV !== "production")
{
    require("dotenv").config({path:"backend/config/config.env"});
}

app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ extended: true}));

=======
const cookieParser = require("cookie-parser");

if(process.env.NODE_ENV !== "production"){
require("dotenv").config({path: "backend/config/config.env"});
};
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
app.use(cookieParser());

const post = require("./routes/post");
const user = require("./routes/user");

app.use("/api/v1", post);
app.use("/api/v1", user);

<<<<<<< HEAD
module.exports = app;
=======
module.exports = app;
>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
