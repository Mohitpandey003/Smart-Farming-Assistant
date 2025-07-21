import { Link } from "react-router-dom";

function Features() {
  return (
    <div>
      <section id="features" className="py-8 bg-gray-50 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Empty grid cells for left and right positions */}
            <div className="p-4"></div>
            <div className="p-4 flex justify-center items-center">
              {/* Paragraph centered in the middle grid */}
              <p className="text-center max-w-lg">
                Our Smart Agriculture Assistant offers a range of powerful
                features designed to revolutionize farming. With real-time
                monitoring, it tracks soil conditions, weather patterns, and
                crop health 24/7, providing valuable data to optimize farming
                practices. Powered by advanced analytics, it offers actionable
                insights for irrigation, pest control, and fertilization,
                helping farmers make informed decisions. Predictive analytics
                further enable optimization of crop yields and reduction of
                waste.
              </p>
            </div>
            {/* Empty grid cell */}
            <div className="p-4"></div>
          </div>
          {/* Buttons section */}
          <div className="flex justify-center mt-8 space-x-4">
            <Link
              to="/crop-prediction"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Crop Prediction
            </Link>
            <Link
              to="/fertilizer-recommendation"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Fertilizer Recommendation
            </Link>
            <Link
              to="/weather-analysis"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            >
              Weather Analysis
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;
