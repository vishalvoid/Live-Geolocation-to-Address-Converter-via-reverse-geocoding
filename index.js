const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const formidableMiddleware = require("express-formidable");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(formidableMiddleware());

const port = 8081;

app.get("/", (req, res) => {
  res.sendFile(__dirname + `/index.html`);
});

app.post("/fetch", async (request, response) => {
  axios
    .get(
      `https://apis.mappls.com/advancedmaps/v1/MAP_MY_INDIA_API_KEY/rev_geocode?lat=28.5812024&lng=77.3204116&region=IND`
    )
    .then((res) => {
      return response.status(200).json({
        message: res.data.results[0],
      });
    })
    .then((err) => console.log(err));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
