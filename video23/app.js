const express = require("express");
const app = express();
let PORT = 5000;

const sendMail = require("./controllers/sendmail");
app.get("/", (req, res) => {
  res.send("I m a server boss");
});

app.get("/sendemail", sendMail);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`i am live on port no. ${PORT}`);
    });
  } catch (error) {}
};

start();
