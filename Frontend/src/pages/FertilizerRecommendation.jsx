// src/pages/FertilizerRecommendation.jsx
import { useState } from "react";

const BASE_URL = "https://smart-farming-assistant-29x8.onrender.com";

const FertilizerRecommendation = () => {
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [nitrogen, setNitrogen] = useState("");
  const [potassium, setPotassium] = useState("");
  const [phosphorous, setPhosphorous] = useState("");
  const [soilType, setSoilType] = useState("Loamy");
  const [cropType, setCropType] = useState("Sugarcane");
  const [prediction, setPrediction] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${BASE_URL}/api/fertilizer-recommendation`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            temperature,
            humidity,
            nitrogen,
            potassium,
            phosphorous,
            soilType,
            cropType,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch fertilizer recommendation");
      }
      const data = await response.json();
      setPrediction(data);
    } catch (err) {
      throw new Error(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple Banner Section */}
      <div className="relative w-full h-64">
        <img
          src="https://t3.ftcdn.net/jpg/03/70/74/46/360_F_370744651_8CWp74w2gZE5qHU8xxvZxLHSjga131g2.jpg"
          alt="Fertilizer Recommendation Banner"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <h1 className="text-4xl font-bold text-white">
            Fertilizer Recommendation
          </h1>
        </div>
      </div>

      {/* Form Container with Two-Column Layout */}
      <div className="max-w-3xl mx-auto bg-white p-8 mt-[-40px] mb-8 rounded-lg shadow-xl relative z-10">
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold text-green-700">
            Enter Your Details
          </h2>
          <p className="mt-2 text-gray-600">
            Provide the following details to get the best fertilizer
            recommendation for your crop.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Temperature */}
          <div>
            <label
              htmlFor="temperature"
              className="block text-sm font-medium text-gray-700"
            >
              Temperature (°C)
            </label>
            <input
              id="temperature"
              type="number"
              step="0.01"
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
              placeholder="00"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500"
            />
          </div>
          {/* Humidity */}
          <div>
            <label
              htmlFor="humidity"
              className="block text-sm font-medium text-gray-700"
            >
              Humidity (%)
            </label>
            <input
              id="humidity"
              type="number"
              step="0.01"
              value={humidity}
              onChange={(e) => setHumidity(e.target.value)}
              placeholder="00"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500"
            />
          </div>
          {/* Nitrogen Content */}
          <div>
            <label
              htmlFor="nitrogen"
              className="block text-sm font-medium text-gray-700"
            >
              Nitrogen Content in Soil (ppm)
            </label>
            <input
              id="nitrogen"
              type="number"
              step="0.01"
              value={nitrogen}
              onChange={(e) => setNitrogen(e.target.value)}
              placeholder="00"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500"
            />
          </div>
          {/* Potassium Content */}
          <div>
            <label
              htmlFor="potassium"
              className="block text-sm font-medium text-gray-700"
            >
              Potassium Content in Soil (ppm)
            </label>
            <input
              id="potassium"
              type="number"
              step="0.01"
              value={potassium}
              onChange={(e) => setPotassium(e.target.value)}
              placeholder="00"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500"
            />
          </div>
          {/* Phosphorous Content */}
          <div>
            <label
              htmlFor="phosphorous"
              className="block text-sm font-medium text-gray-700"
            >
              Phosphorous Content in Soil (ppm)
            </label>
            <input
              id="phosphorous"
              type="number"
              step="0.01"
              value={phosphorous}
              onChange={(e) => setPhosphorous(e.target.value)}
              placeholder="00"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500"
            />
          </div>
          {/* Soil Type */}
          <div>
            <label
              htmlFor="soilType"
              className="block text-sm font-medium text-gray-700"
            >
              Select Soil Type
            </label>
            <select
              id="soilType"
              value={soilType}
              onChange={(e) => setSoilType(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500"
            >
              <option value="Loamy">Loamy</option>
              <option value="Sandy">Sandy</option>
              <option value="Clay">Clay</option>
              <option value="Silty">Silty</option>
              <option value="Peaty">Peaty</option>
              <option value="Chalky">Chalky</option>
              <option value="Black">Black</option>
              <option value="Red">Red</option>
            </select>
          </div>
          {/* Crop Type */}
          <div>
            <label
              htmlFor="cropType"
              className="block text-sm font-medium text-gray-700"
            >
              Select Crop Type
            </label>
            <select
              id="cropType"
              value={cropType}
              onChange={(e) => setCropType(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500"
            >
              <option value="Sugarcane">Sugarcane</option>
              <option value="Wheat">Wheat</option>
              <option value="Rice">Rice</option>
              <option value="Maize">Maize</option>
              <option value="Cotton">Cotton</option>
              <option value="Barley">Barley</option>
              <option value="Potato">Potato</option>
              <option value="Tomato">Tomato</option>
              <option value="Corn">Corn</option>
              <option value="Soybean">Soybean</option>
            </select>
          </div>
          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-bold text-white bg-green-600 hover:bg-green-700 transition duration-300"
            >
              Predict Fertilizer
            </button>
          </div>
        </form>
        {/* Prediction Display */}
        {prediction && (
          <div className="mt-8 p-4 border-t border-green-200">
            <h3 className="text-xl font-bold mb-4">Predicted Fertilizer:</h3>
            <div className="flex items-center space-x-4">
              <img
                src={prediction.fertilizerImage}
                alt={prediction.fertilizer}
                className="w-24 h-24 object-cover rounded"
              />
              <span className="text-2xl font-semibold">
                {prediction.fertilizer}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Additional Information Section */}
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h3 className="text-2xl font-bold text-green-700 mb-4 text-center">
          About Our Fertilizer Recommendations
        </h3>
        <p className="text-gray-700 text-center">
          Our recommendations are driven by advanced soil analysis and crop
          research. By providing accurate inputs, we ensure the best fertilizer
          blend is suggested to boost crop yield while reducing environmental
          impact.
        </p>
      </div>
    </div>
  );
};

export default FertilizerRecommendation;
