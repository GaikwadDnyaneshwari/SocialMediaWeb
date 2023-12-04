const express = require("express")
const app = express();
const cookieParser = require("cookie-parser")

const dotenv = require("dotenv");
dotenv.config({path: "config/.env"});

//using middaleware
app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({limit: "50mb", extended:true}));
app.use(cookieParser());



//importing Routes

const post = require("./routes/post");
const user = require("./routes/user");

//using routes
app.use("/api/v1", post);
app.use("/api/v1", user);

module.exports = app