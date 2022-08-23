const fs = require("fs");
let data = "";

// 读取流
let readerStream = fs.createReadStream("testInput.txt");
readerStream.setEncoding("UTF8");
readerStream.on("data", function (chunk) {
  data += chunk;
});
readerStream.on("end", function () {
  console.log(data);
});
readerStream.on("error", function () {
  console.log(err.stack);
});
console.log("读取程序执行完毕");

// 写入流
let writeData = "123456";
let writerStream = fs.createWriteStream("testOutput.txt");
writerStream.write(writeData, "UTF8");
writerStream.end();
writerStream.on("finish", function () {
  console.log("写入完成");
});
writerStream.on("error", function (err) {
  console.log(err.stack);
});
console.log("写入程序执行完毕");
