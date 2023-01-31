const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const data = fs.readFileSync(`${__dirname}/userApi/userapi.json`, "utf-8");
  const objData = JSON.parse(data);
  // const objData = JSON.stringify(data);
  let url = req.url;
  // console.log(url);
  if (req.url == "/") {
    res.write("<h1>Our own web server</h1>");
    res.write("<p>Home page</p>");
    res.end();
  } else if (req.url == "/userapi") {
    res.write("hello from user api");
    fs.readFile(`${__dirname}/userApi/userapi.json`, "utf-8", (err, data) => {
      console.log(objData);

      res.end(objData);
    });
    res.end();
  } else {
    res.write("<h1>other than home page</h1>");
    // res.statusCode = 404;
    // res.writeHead(404, { "content-type": "text/html" });

    res.end();
  }
  //   res.end();
});
server.listen(3000);
