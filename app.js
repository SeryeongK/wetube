import helmet from "helmet";
import express from "express";
// const express = require('express'); <- 와 같음
// import express
import morgan from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from "./middlewares";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

const app = express();              // app variable에 선언해서 express 실행

app.use(helmet());
app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("dev"));
app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);       // url로 들어갈 시에 함수 전체를 사용
app.use(routes.videos, videoRouter);

export default app;      // 이 file을 import할 때 app objecct를 주겠다