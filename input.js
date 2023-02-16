const { connect } = require("http2");

let connection;
// Stores the active TCP connection object.
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};




const handleUserInput = function (key) {
  if (key === '\u0003') return process.exit();
  if (key === 'w') return console.log("Move: up");
  if (key === 'a') return console.log("Move: left");
  if (key === 's') return console.log("Move: down");
  if (key === 'd') return console.log("Move: right");
  if (key === 'p') return console.log("Say: punch you")
};

  module.exports = { setupInput }