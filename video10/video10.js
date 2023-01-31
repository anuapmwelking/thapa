//os module used to find the operating system architecture
const os = require("os");
let data = os.arch();
const freeMemory = os.freemem();
const totalMemory = os.totalmem();
// console.log(`${freeMemory / 1024 / 1024 / 1024}`);
// console.log(`${totalMemory / 1024 / 1024 / 1024}`);
// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.tmpdir());
// console.log(os.type());
console.log(data); //result x64
