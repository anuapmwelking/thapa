const fs = require("fs"); //importing the fs module
//for creating a new file
// fs.writeFileSync("readme.txt", "Welcome");

//this will override the previous data
// fs.writeFileSync("readme.txt", "Welcome to welkin ring");

//for appending data into the file
// fs.appendFileSync("readme.txt", " apending data");

//for reading a file readfile sync returns a buffer of data (additional data type while reading a file used to read binary files)
// const buf_data = fs.readFileSync("readme.txt");
//result : <Buffer 57 65 6c 63 6f 6d 65 20 74 6f 20 77 65 6c 6b 69 6e 20 72 69 6e 67 20 61 70 65 65 6e 64 69 6e 67 20 64 61 74>

//changing buffer data to string
// const org_data = buf_data.toString();
// console.log(org_data);
//result : Welcome to welkin ring apeending dat

//this is used to rename a file in node js
// fs.renameSync("readme.txt", "anup.txt");

//fs.mkdirSync('thapa); this is used for creating a new folder in node js
//fs.unlink('') used to delete a file

// **********asynchornus methods***********************
//write file method also takes a callback parameter
// fs.write("read.txt", "today is awesome day", (err) => {
//   console.log("files created successfully");
// });

//to append a data synchronusly
// fs.appendFile("read.txt", "like me", (e) => {
//   console.log("task compeleted");
// });
// fs.readFile("read.txt", "UTF-8", (err, data) => {
//   console.log(data);
//   //   console.log(data.toString()); USE THIS IN CASE WHEN UTF-8 NOT USED
//   //   console.log(err);
// });

// const data = fs.readFileSync("read.txt", "utf-8");
// console.log(data);
// console.log("afterData");

// result will be like : data of line number 40 first and then 41
// const data = fs.readFile("read.txt", "utf-8", (err, data) => {
//   console.log(data);
// });
// console.log("after data");
// result: fter data
// like melike me
