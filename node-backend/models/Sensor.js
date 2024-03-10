const mongoose = require('mongoose')

const SensorDetails = mongoose.Schema({
    gasData: {
        type: String
    },
    Temperature: {
        type: String
    },
    Humidity: {
        type: String
    },
    SoilMoisture: {
        type: String
    },
    Rain: {
        type: String
    },
}, { timestamps: true })

const data = mongoose.model('data', SensorDetails)

module.exports = data
