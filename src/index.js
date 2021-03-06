const express = require("express");
// const PORT = process.env.port || 6000;
const app = express();
const path = require("path");
const hbs = require("hbs");

const staticPath = path.join(__dirname, "../public");
const dynamicPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", dynamicPath);
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/weather", (req, res) => {
  res.render("weather");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(process.env.PORT || 3001, "0.0.0.0", () => {
  console.log("Listening to request");
});
