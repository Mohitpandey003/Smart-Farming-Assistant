const mongoose = require('mongoose');

const cropPredictionSchema = new mongoose.Schema({
    nitrogen: Number,
    phosphorus: Number,
    potassium: Number,
    temperature: Number,
    humidity: Number,
    ph: Number,
    rainfall: Number,
    predictedCrop: String,
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("CropPrediction", cropPredictionSchema);
