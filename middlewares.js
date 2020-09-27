import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;    // 뒤의 routes가 impot한 routes
    res.locals.user = {
        isAuthenticated: true,
        id: 1
    }
    next();
};