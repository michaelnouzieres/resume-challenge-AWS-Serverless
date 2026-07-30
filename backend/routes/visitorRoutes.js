const express = require("express");
const visitorController = require("../controllers/visitorController.js")

const router = express.router();

router.post("/add", visitorController.addCount);

router.get("/get", visitorController.getCount);

export default router;
