const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://127.0.0.1:27017/formData")
  .then(() => {
    console.log("Connected");
  })
  .catch((e) => {
    console.log("Error connecting: " + e);
  });
