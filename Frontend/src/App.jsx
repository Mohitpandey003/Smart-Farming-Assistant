// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Home/navbar";
import Home from "./pages/home";
import CropPrediction from "./pages/cropprediction";
import FertilizerRecommendation from "./pages/FertilizerRecommendation";
import WeatherAnalysis from "./pages/WeatherAnalysis";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/crop-prediction" element={<CropPrediction />} />
            <Route
              path="/fertilizer-recommendation"
              element={<FertilizerRecommendation />}
            />
            <Route path="/weather-analysis" element={<WeatherAnalysis />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
