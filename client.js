const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });

  conn.on("connect", () => {
    conn.write("Successfully connected to game server");
  });

  conn.on("data", (data) => {
    conn.write("Name: YSZ");
  })

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('data', () => {
    console.log('you ded cuz you idled')
  })
  return conn;
};





module.exports = connect;