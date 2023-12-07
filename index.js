import path from "path";
import express from "express";

const PORT = 8080;
const app = express();



const staticPath = path.resolve("public");
app.use(express.static(staticPath));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.set("view engine", "ejs");


//home
app.get("/home", (req, res) => {
  res.render("page/home");
});

app.get("/", (req, res) => {
  res.render("page/landing");
});

app.listen(PORT);