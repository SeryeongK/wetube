import { videos } from "../db"
import routes from "../routes"

export const home = (req, res) => {
    res.render("home", { pageTitle: "Home", videos });
};

export const search = (req, res) => {
    const {
        query: { term: searchingBy }
    } = req;
    // const searchingBy = console.log(req.query.term);
    res.render("search", { pageTitle: "Search", searchingBy, videos }); // searchingBy: searchingBy;
};

export const getUpload = (req, res) =>
    res.render("upload", { pageTitle: "Upload" });

export const postUpload = (req, res) => {
    const {
        body: { file, title, description }
    } = req;
    // To Do: Upload and save video
    res.redirect(routes.videoDetail());
};


export const videoDetail = (req, res) =>
    res.render("videoDetail", { pageTitle: "VideoDetail" });
export const editVideo = (req, res) =>
    res.render("editVideo", { pageTitle: "EditVideo" });
export const deleteVideo = (req, res) =>
    res.render("deleteVideo", { pageTitle: "DeleteVideo" });