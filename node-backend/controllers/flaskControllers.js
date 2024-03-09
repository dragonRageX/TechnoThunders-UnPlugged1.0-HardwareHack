const asyncHandler = require("express-async-handler");
const axios = require("axios");

// @desc   send gas sensor data input to flask ML backend and get back ML output/predictions as response
// @route   POST /api/fruit-quality
// @access   Public
const postFruitQualityData = asyncHandler(async (req, res) => {
    const mqSensorData = req.body.mqSensorData;
    //const res = axios POST request to flask backend
});

// @desc   send image data input to flask ML backend and get back ML output/predictions as response
// @route   POST /api/locust
// @access   Public
const postLocustData = asyncHandler(async (req, res) => {
    const imageData = req.body.imageData;
    //const res = axios POST request to flask backend
});


// @desc   send gas sensor data input to flask ML backend and get back ML output/predictions as response
// @route   POST /api/plant-disease
// @access   Public
const postPlantDiseasesAndFertilizersData = asyncHandler(async (req, res) => {
    const imageData = req.body.imageData;
    //const res = axios POST request to flask backend
});

// @desc   send dht sensor data input to flask ML backend and get back ML output/predictions as response
// @route   POST /api/plant-disease
// @access   Public
const postIdealCropData = asyncHandler(async (req, res) => {
    const temperature = req.body.temperature;
    const humidity = req.body.humidity;
    if(temperature && humidity)
    {
        console.log(temperature, humidity);
        res.status(200).send("Data Received!");
    }
    else
    {
        throw new Error("Please provide all fields!");
    }
    //const res = axios POST request to flask backend
});

module.exports = {
    postFruitQualityData,
    postLocustData,
    postPlantDiseasesAndFertilizersData,
    postIdealCropData
}