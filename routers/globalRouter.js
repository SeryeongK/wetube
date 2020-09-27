import express from "express";
import routes from "../routes";     // 현재 디렉토리를 빠져나감
import { home, search } from "../controllers/videoControllers";
import { getJoin, getLogin, join, login, logout, postJoin, postLogin } from "../controllers/userControllers";

const globalRouter = express.Router();

globalRouter.get(routes.Join, getJoin);
globalRouter.post(routes.Join, postJoin);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, logout);

export default globalRouter;  