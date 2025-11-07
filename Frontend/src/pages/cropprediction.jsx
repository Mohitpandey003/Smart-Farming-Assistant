import { useState } from "react";
import { HelpCircle, ChevronRight, ChevronLeft, RefreshCw } from "lucide-react";

const CropRecommendation = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const [inputs, setInputs] = useState({
    nitrogen: 50,
    phosphorus: 50,
    potassium: 50,
    temperature: 25,
    humidity: 60,
    ph: 6.5,
    rainfall: 100,
  });

  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showTooltip, setShowTooltip] = useState(null);

  // Tooltips content
  const tooltips = {
    nitrogen:
      "Nitrogen is essential for leaf growth. Measured in parts per million (ppm).",
    phosphorus:
      "Phosphorus promotes root and flower development. Measured in parts per million (ppm).",
    potassium:
      "Potassium helps overall plant health and disease resistance. Measured in parts per million (ppm).",
    temperature: "Average temperature in degrees Celsius.",
    humidity: "Relative humidity percentage in the air.",
    ph: "pH measures soil acidity or alkalinity. 7 is neutral, below 7 is acidic, above 7 is alkaline.",
    rainfall: "Average rainfall in millimeters.",
  };

  // Handle slider input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: parseFloat(value) });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setPrediction(null);
    setLoading(true);

    try {
      const response = await fetch(
        `https://smart-farming-assistant-29x8.onrender.com/api/crop-recommendation`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(inputs),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setPrediction(data); // This should include cropName and cropImage from the backend
      } else {
        setError(data.error || "Failed to fetch prediction.");
      }
    } catch (err) {
      setError("Error connecting to the server. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Group inputs by step
  const renderInputsByStep = () => {
    if (currentStep === 1) {
      return (
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Soil Properties</h3>
          {renderSlider("nitrogen", "Nitrogen", "ppm", 0, 140)}
          {renderSlider("phosphorus", "Phosphorus", "ppm", 5, 145)}
          {renderSlider("potassium", "Potassium", "ppm", 5, 205)}
          {renderSlider("ph", "pH Level", "", 3.5, 9, 0.1)}
        </div>
      );
    } else if (currentStep === 2) {
      return (
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Environmental Conditions</h3>
          {renderSlider("temperature", "Temperature", "°C", 10, 45)}
          {renderSlider("humidity", "Humidity", "%", 10, 99)}
          {renderSlider("rainfall", "Rainfall", "mm", 20, 300)}
        </div>
      );
    } else if (currentStep === 3) {
      return (
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Review Your Inputs</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium text-gray-700">Soil Properties</h4>
              <ul className="mt-2 space-y-1">
                <li>Nitrogen: {inputs.nitrogen} ppm</li>
                <li>Phosphorus: {inputs.phosphorus} ppm</li>
                <li>Potassium: {inputs.potassium} ppm</li>
                <li>pH Level: {inputs.ph}</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium text-gray-700">Environment</h4>
              <ul className="mt-2 space-y-1">
                <li>Temperature: {inputs.temperature}°C</li>
                <li>Humidity: {inputs.humidity}%</li>
                <li>Rainfall: {inputs.rainfall} mm</li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="w-full py-3 px-4 text-white bg-green-600 hover:bg-green-700 rounded-md flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <>
                  <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                "Get Crop Recommendation"
              )}
            </button>
          </div>
        </div>
      );
    }
  };

  // Render an individual slider with tooltip
  const renderSlider = (name, label, unit, min, max, step = 1) => {
    return (
      <div className="relative">
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm font-medium text-gray-700 flex items-center">
            {label}
            <button
              type="button"
              className="ml-1 text-gray-400 hover:text-gray-600"
              onClick={() => setShowTooltip(showTooltip === name ? null : name)}
            >
              <HelpCircle className="w-4 h-4" />
            </button>
          </label>
          <div className="flex items-center">
            <span className="font-medium">{inputs[name]}</span>
            <span className="text-gray-500 ml-1">{unit}</span>
          </div>
        </div>

        {showTooltip === name && (
          <div className="absolute z-10 p-2 bg-gray-800 text-white text-xs rounded shadow-lg max-w-xs mb-1">
            {tooltips[name]}
          </div>
        )}

        <input
          id={name}
          name={name}
          type="range"
          min={min}
          max={max}
          step={step}
          value={inputs[name]}
          onChange={handleChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>{min}</span>
          <span>{max}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-cyan-100">
      {/* Banner Section */}
      <div className="relative w-full h-64">
        <img
          src="https://eos.com/wp-content/uploads/2020/09/1_1920%D1%85600-e1670509527732.jpg.webp"
          alt="Farm Banner"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <h1 className="text-4xl font-bold text-white">Crop Recommendation</h1>
        </div>
      </div>

      {/* Form Container */}
      <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-2xl -mt-12 relative z-10">
        {/* Progress Indicator */}
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">
              Step {currentStep} of {totalSteps}
            </span>
            <span className="text-sm font-medium">
              {currentStep === 1
                ? "Soil"
                : currentStep === 2
                ? "Environment"
                : "Review"}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-green-600 h-2 rounded-full"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {renderInputsByStep()}

          {/* Navigation Buttons */}
          {currentStep < 3 ? (
            <div className="mt-8 flex justify-end">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="flex items-center px-4 py-2 mr-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Back
                </button>
              )}
              <button
                type="button"
                onClick={() => setCurrentStep(currentStep + 1)}
                className="flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded"
              >
                Next
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          ) : null}
        </form>

        {/* Error Display */}
        {error && <p className="text-center text-red-500 mt-4">{error}</p>}

        {/* Prediction Display - Uses the cropImage from API response */}
        {prediction && (
          <div className="mt-8 p-4 border-t">
            <h3 className="text-xl font-bold mb-4">Recommended Crop:</h3>
            <div className="flex items-center space-x-4">
              <img
                src={prediction.cropImage}
                alt={prediction.cropName}
                className="w-24 h-24 object-cover rounded-lg border border-slate-300"
              />
              <div>
                <span className="text-2xl font-semibold block">
                  {prediction.cropName}
                </span>
                <span className="text-green-600 text-sm">
                  Best match for your conditions
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CropRecommendation;
