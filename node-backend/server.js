const express = require("express");
const dotenv = require("dotenv").config();
const cors = require('cors');
const path = require("path");

const port = process.env.PORT || 5000;

const app = express();

const flaskFruitQualityRouter = require("./routes/fruitQualityRoutes");
const flaskLocustPredictionRouter = require("./routes/locustPredictionRoutes");
const flaskPlantDiseasesAndFertilisersRouter = require("./routes/plantDiseasesAndFertilisers");
const { errorHandler } = require("./middleware/errorMiddleware");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/fruit-quality", [flaskFruitQualityRouter, errorHandler]);
app.use("/api/locust", [flaskLocustPredictionRouter, errorHandler]);
app.use("/api/plant-disease", [flaskPlantDiseasesAndFertilisersRouter, errorHandler]);

app.listen(port, () => console.log("Server is listening on port " + port));