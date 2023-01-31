const express = require("express");
const app = express();
const path = require("path");

// ../thisIsRelativePath
// console.log(__dirname);
// console.log(path.join(__dirname, "../public"));

let staticPath = path.join(__dirname, "../video31/public");
console.log(staticPath);

//builtin middleware
// app.use(express.static(staticPath));

//set view engine
app.set("view engine", "hbs");

//template enginer route
app.get("", (req, res) => {
  res.render("index");
});

app.get("/", (req, res) => {
  // res.write("<h1>this is a hellp</h1>");
  res.send("Hello from exprss tempsite");
});
app.get("/html", (req, res) => {
  res.send("<b>Hello from exprss site</b>");
});
app.get("/about", (req, res) => {
  res.send("Hello from about page");
  // res.status(200).send("Hello from about page"); optional
});

app.listen(8000, (err) => {
  console.log("listening at 8000");
});
