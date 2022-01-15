// configure server

// step 1: Import express package
const express = require("express");

// step 2: create server
const server = express();

// step 3: configure port
server.listen(3100);

// step 4: handle request on default path
server.get("/", (req, res) => {
  // sending response to client
  res.send("Hello from ExpressJS");
});

console.log("Server is running on localhost:3100");
