const express = require('express');
const axios = require('axios');
const CropPrediction = require('../models/CropPrediction.js');

const router = express.Router();

const cropImageMap = {
    wheat: "wheat.jpg",
    rice: "rice.jpg",
    maize: "maize.jpg",
    kidneybeans: "kidneybeans.jpg",
    mothbeans: "mothbeans.jpg",
    pigeonpeas: "pigeonpeas.jpg",
    banana:"banana.jpg",
    apple:"apple.jpg",
    coconut:"coconut.jpg",
    blackgram:"blackgram.jpg",
    chickpea:"chickpea.jpg",
    coffee:"coffee.jpg",
    cotton:"cotton.jpg",
    grapes:"grapes.jpg",
    jute:"jute.jpg",
    lentil:"lentil.jpg",
    mango:"mango.jpg",
    mungbeans:"mungbeans.jpg",
    muskmelon:"muskmelon.jpg",
    orange:"orange.jpg",
    papaya:"papaya.jpg",
    pomegranate:"pomegranate.jpg",
    watermelon:"watermelon.jpg",

};

// POST /api/crop-recommendation
router.post('/', async (req, res) => {
    try {
        const mlServiceUrl = "http://localhost:8000/predict-crop"; // ML Model URL
        const response = await axios.post(mlServiceUrl, req.body);

        if (!response.data || !response.data.predicted_crop) {
            return res.status(500).json({ error: "Invalid response from prediction model" });
        }

        const predictedCrop = response.data.predicted_crop.toLowerCase(); // Ensure lowercase
        const imageFile = cropImageMap[predictedCrop] || "default.jpg";

        // Dynamic Image URL
        const cropImageUrl = `${req.protocol}://${req.get("host")}/crops/${imageFile}`;

        return res.json({ cropName: predictedCrop, cropImage: cropImageUrl });
    } catch (error) {
        console.error("Error in backend:", error.message);
        
        if (error.response) {
            return res.status(error.response.status).json({ error: error.response.data.error || "Prediction service error" });
        } else if (error.request) {
            return res.status(500).json({ error: "ML service unavailable. Please try again later." });
        } else {
            return res.status(500).json({ error: "Internal server error" });
        }
    }
});

router.get("/crop-recommendation", (req, res) => {
    res.send("🌱 Crop Recommendation API is working. Use POST request to get predictions.");
  });

module.exports = router;
