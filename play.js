const net = require("net");
const { stdin } = require("process");
const connect = require("./client")
const {setupInput} = require('./input');




console.log("Connecting ...");
connect();
setupInput();