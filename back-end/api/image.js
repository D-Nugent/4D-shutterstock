const express = require("express");
const app = express();
const router = express.Router();
const sstk = require("shutterstock-api");
const imagesApi = new sstk.ImagesApi()

router.route("/").get((req, res) => {
    console.log(req.query);
    const queryParams = {
        "query": req.query.query,
        "image_type": "photo",
        "page": 1,
        "per_page": 10,
        "sort": "popular",
        "view": "minimal"
    }

    imagesApi.searchImages(queryParams)
    .then(({data}) => {
        console.log(data);
        res.status(200).send(data)
    })
    .catch((error) => {
        console.error(error);
    })
})

module.exports = router;