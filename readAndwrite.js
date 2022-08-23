const fs = require("fs");

let readerStream = fs.createReadStream("testInput.txt");
let writerStream = fs.createWriteStream("testOutput.txt");

readerStream.pipe(writerStream);
console.log("程序执行完毕");
