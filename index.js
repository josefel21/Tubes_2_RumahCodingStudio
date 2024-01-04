import path from "path";
import express from "express";

import {
  landingPage,
  homePage,
  uploadPage,
  barPage,
  scatterPage,
  summaryPage
} from "./server/util.js"

import {
  uploadPost,
} from "./server/upload.js";

import { 
  getScatterData,
  getAttributes
} from "./server/scatterPlot.js";

import {
  getBarData
} from "./server/barChart.js"

const PORT = 8080;
const app = express();

const staticPath = path.resolve("public");
app.use(express.static(staticPath));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.set("view engine", "ejs");


//landing
app.get("/", landingPage);

//home
app.get("/home", homePage);

//upload
app.get("/upload", uploadPage);
app.post("/uploadPost",uploadPost);

//summary
app.get("/summary", summaryPage);

//bar chart
app.get("/barChart", barPage);
app.get("/api/barChartData",getBarData);

//scatter plot
app.get("/scatterPlot", scatterPage);
app.get("/api/scatterData", getScatterData);

//get attributes
app.get("/api/getAttributes", getAttributes);

app.listen(PORT);