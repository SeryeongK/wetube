import express from "express"
// const express = require('express'); <- 와 같음
// import express
import morgan from "morgan"
import helmet from "helmet"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"
const app = express();              // app variable에 선언해서 express 실행

const PORT = 4000;

const handlelistening = () =>
    console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) =>      // request object, response object
    res.send("Hello from home");

const handleProfile = (req, res) =>
    res.send("You are on my profile");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());
app.use(morgan("dev"));

// route 생성 - mainurl로 접근할 경우 handleHome 함수 실행
app.get("/", handleHome)      // betweenHome은 middleware임

app.get("/profile", handleProfile);

app.listen(PORT, handlelistening);