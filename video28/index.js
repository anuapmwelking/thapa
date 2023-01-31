const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("hello world from video 28");
});

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
