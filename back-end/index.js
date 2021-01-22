const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const sstk = require("shutterstock-api");
const imageRoute = require("./api/image");
const videoRoute = require("./api/video");
const audioRoute = require("./api/audio");
const computerVisionRoute = require("./api/computerVision");

dotenv.config();

app.use(express.json());
app.use(cors())

app.use((req, res, next) => {
  sstk.setBasicAuth(process.env.API_KEY, process.env.API_SECRET);
  sstk.setAccessToken(process.env.API_TOKEN)
  console.log(`The path '${req.path}' was targeted at ${new Date().toLocaleTimeString()}`);
  next();
});

app.use("/images", imageRoute);
app.use("/videos", videoRoute);
app.use("/audio", audioRoute);
app.use("/cv", computerVisionRoute)

app.listen(process.env.PORT, (error) => (error ? console.error(error) : console.info("4D is up and running!")));
