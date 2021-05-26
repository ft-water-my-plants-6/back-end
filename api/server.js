const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());

const authRouter = require("./auth/auth-router");
const usersRouter = require("./users/users-router");

const restricted = require("./auth/auth-restricted");

server.use("/api/auth", authRouter);
server.use("/api/users", restricted, usersRouter);

server.get("/", (req, res) => {
  res.json({ Hello: "Everyone!" });
});

module.exports = server;
