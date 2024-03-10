const asyncHandler = require("express-async-handler");
const axios = require("axios");
const SensorData = require('../models/Sensor')
let mqttHandler = require("../mqtt/mqtt_handler");
const CameraData = require('../models/camera')

// let mqttClient = new mqttHandler();
// mqttClient.connect();

// @desc   send gas sensor data input to flask ML backend and get back ML output/predictions as response
// @route   POST /api/fruit-quality
// @access   Public
const postFruitQualityData = asyncHandler(async (req, res) => {
    // const mqSensorData = req.body.mqSensorData;
    //const res = axios POST request to flask backend
    console.log(req.body)
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

urlp = 'http://8520-2409-40c0-33-4a67-c0ef-901e-cf73-d043.ngrok-free.app/crop_prediction'

// @desc   send dht sensor data input to flask ML backend and get back ML output/predictions as response
// @route   POST /api/plant-disease
// @access   Public
const postIdealCropData = asyncHandler(async (req, res) => {
    console.log(req.body);
    if (req.body) {
        let data = new SensorData(req.body)
        await data.save()
        // console.log(temperature, humidity, gas, moisture, rain);
        // mqttClient.sendMessage(req.body.temperature);
        let data2 = {
            temp: req.body.Temperature,
            humid: req.body.Humidity,
            rainfall: 100
        }
        const response = await axios.post(urlp, data2)
        res.send(response.data.prediction[0]);
    }
    else {
        throw new Error("Please provide all fields!");
    }
    //const res = axios POST request to flask backend
});

const getCropData = asyncHandler(async (req, res) => {
    const last12Records = await SensorData.find().sort({ $natural: -1 }).limit(12);
    res.status(200).send(last12Records)

})

module.exports = {
    postFruitQualityData,
    postLocustData,
    postPlantDiseasesAndFertilizersData,
    postIdealCropData,
    getCropData
}