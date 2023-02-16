
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
  console.log('Moving up')
  if (key === '\u0003') return process.exit();
  if (key === 'w') {
    connection.write("Move: up");
  }
  if (key === 'a') {
    connection.write("Move: left");
  }
  if (key === 's') {
    connection.write("Move: down");
  }
  if (key === 'd') {
    connection.write("Move: right");
  }
  if (key === 'p') {
    connection.write("Say: punch you")
  }
};


  module.exports = { setupInput }