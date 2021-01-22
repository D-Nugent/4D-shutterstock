const express = require("express");
const app = express();
const router = express.Router();
const sstk = require("shutterstock-api");
const imagesApi = new sstk.ImagesApi()

module.exports = router;