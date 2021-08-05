require("dotenv").config();

const { PORT } = require("./config");

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());

server.use("*", (req, res) => {
	res.json({
		message: "web 44 is awesome indeed",
	});
});

server.listen(PORT, () => {
	console.log(`listening on ${PORT}`);
});
// changes
