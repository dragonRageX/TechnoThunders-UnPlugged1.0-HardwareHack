const asyncHandler = require("express-async-handler");
const axios = require("axios");
const Data = require('../models/Sensor')

let mqttHandler = require("../mqtt/mqtt_handler");

// let mqttClient = new mqttHandler();
// mqttClient.connect();

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
    if (req.body) {
        // console.log(temperature, humidity, gas, moisture, rain);
        // mqttClient.sendMessage(req.body.temperature);

        let data = new Data(req.body)
        await data.save()
        res.send('sucess')
    }
    else {
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