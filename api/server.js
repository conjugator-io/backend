const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const authenticate = require("../auth/auth-middleware.js");
const authRouter = require("../auth/auth-router.js");
const usersRouter = require("../users/users-router.js");
const verbsRouter = require("../verbs/verbs-router.js");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.send("<h1>Welcome to the backend!</h1>");
});

server.use("/api/auth", authRouter);
server.use("/api/users", authenticate, usersRouter);
server.use("/api/verbs", verbsRouter);

module.exports = server;
