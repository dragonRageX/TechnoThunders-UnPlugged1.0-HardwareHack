const mongoose = require('mongoose')

const SensorDataSchema = mongoose.Schema({
        gasData: {
            type: Number
        },
        Temperature: {
            type: Number
        },
        Humidity: {
            type: Number
        },
        SoilMoisture: {
            type: Number
        },
        Rain: {
            type: Number
        },
    }, 
    { 
        timestamps: true 
    }
);

module.exports = mongoose.model('SensorData', SensorDataSchema)
