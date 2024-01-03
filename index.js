import path from "path";
import express from "express";

import {
  uploadPost,
} from "./server/upload.js";

import {
  barPage,
} from "./server/barChart.js"

const PORT = 8080;
const app = express();

const staticPath = path.resolve("public");
app.use(express.static(staticPath));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.set("view engine", "ejs");


//landing
app.get("/", (req, res) => {
  res.render("page/landing");
});

//home
app.get("/home", (req, res) => {
  res.render("page/home");
});

//upload
app.get("/upload", (req, res) => {
  res.render("page/upload");
});
app.post("/uploadPost",uploadPost);

app.get("/summary", (req, res) => {
  res.render("page/summary");
});

//bar chart
app.get("/barChart", barPage);

//scatter plot
app.get("/scatterPlot", (req, res) => {
  res.render("page/scatterPlot");
});

app.listen(PORT);