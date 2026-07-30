const express = require("express");
const cors = require("cors");

const visitorRoutes = require("./routes/visitorRoutes.js");

const app = express();

app.use(express.json());

app.use(cors());
