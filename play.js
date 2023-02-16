const net = require("net");
const { stdin } = require("process");
const connect = require("./client")

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput); 
  return stdin;
};

const handleUserInput = function (key) {
    if (key === '\u0003') return process.exit();

};

setupInput()

console.log("Connecting ...");
connect();