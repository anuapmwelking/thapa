const express = require("express");
const app = express();
// api- > get post put delete
/*
The callback function has 2 parameters , request(req) and response (res).
the request object(req)represents the HTTP request and has properties for the request query string, parameteres, body,HTTP headers ,ets.
similarly the response object represents the HTTP response that the express app sends when it receivs an HTTP request 
*/

app.get("/", (req, res) => {
  // res.write("<h1>this is a hellp</h1>");
  res.send("Hello from exprss site");
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
