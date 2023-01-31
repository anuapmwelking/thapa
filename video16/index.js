/*the http.createServer() method used to create our own serverin node js
in node js createrserver takes a callback function and used require and response as its parameter
the request object can be used to send a response from a current HTTP request

if the response from the http server is supposed to be displayes as HTML 
you should include an HTTP header with the current content type
*/
const http = require("http");

const server = http.createServer((req, res) => {
  let url = req.url;
  console.log(url);
  if (req.url == "/") {
    res.write("<h1>Our own web server</h1>");
    res.write("<p>Home page</p>");
    res.end();
  } else {
    res.write("<h1>other than home page</h1>");
    // res.statusCode = 404;
    res.writeHead(404, { "content-type": "text/html" });

    res.end();
  }
  //   res.end();
});
server.listen(3000);
// server.listen(3000, "127.0.0.1", () => {
//   console.log("listening to port no. 3000");
// });
