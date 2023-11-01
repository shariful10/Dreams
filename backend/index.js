const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;

// <==<<=== Middleware ===>>==>
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Dreams Server is running...");
});

app.listen(port, () => {
	console.log(`Dreams is running on port ${port}`);
});
