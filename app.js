const path = require("path");
const express = require("express");

const app = express();
app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.redirect("/home-page");
});

app.get("/home-page", (req, res) => {
  res.render("main");
});

app.get("/store", (req, res) => {
  res.render("store");
});

app.get("/tos", (req, res) => {
  res.render("tos");
});

app.get("/pvc", (req, res) => {
  res.render("pvc");
});

app.get("/test", (req, res) => {
  res.render("test");
});

app.use((req, res) => {
  res.status(404).render("404");
});

app.listen(3000, '0.0.0.0');
