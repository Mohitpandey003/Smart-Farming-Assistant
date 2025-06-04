const cardsData = [
  {
    image:
      "https://www.thomasnet.com/insights/_next/image/?url=https://thomasmkt.wpengine.com/wp-content/uploads/2024/02/shutterstock_2381159015.jpg&w=3840&q=75",
    title: "Precision Agriculture",
    description:
      "This feature uses advanced technologies like GPS, IoT sensors, and data analytics to monitor and manage crops and soil health in real-time. By collecting data such as soil moisture, temperature, and nutrient levels, the assistant can provide tailored recommendations for irrigation, fertilization, and pest control, ensuring optimal crop growth and reducing resource wastage.",
  },
  {
    image:
      "https://t4.ftcdn.net/jpg/06/22/57/63/360_F_622576324_LDZSnjbh7bofz8kjeNQmtDB0TQNf9DeT.jpg",
    title: "Fertilizer Recommendation",
    description:
      "Based on soil nutrient levels and crop requirements, the assistant provides tailored fertilizer suggestions. It can recommend the optimal type and amount of fertilizer for each crop, ensuring that the plants receive the necessary nutrients for healthy growth while minimizing overuse and environmental impact.",
  },
  {
    image:
      "https://t4.ftcdn.net/jpg/08/99/49/75/360_F_899497527_pQwtJpEqhBaMRdHTAUl9atVYXGieZerH.jpg",
    title: "Weather Analysis and Forecasting",
    description:
      "By leveraging weather data and forecasting models, this feature keeps farmers informed about upcoming weather patterns. It alerts them to potential weather events like storms, frosts, or droughts, so they can adjust their practices accordingly. This feature also helps in planning irrigation and determining the best planting and harvesting times.",
  },
  {
    image:
      "https://eos.com/wp-content/uploads/2023/08/border-img-main.png.webp",
    title: "Growth Stage Monitoring",
    description:
      "The assistant monitors the growth stages of crops through sensors or image recognition technology. It provides real-time insights into crop development, helping farmers track the progress and identify any issues that may require attention (e.g., nutrient deficiencies, pests, or water stress), ensuring the crops are growing as expected.",
  },
];

const Cards = () => {
  return (
    <div>
      <section className="py-8 bg-gray-50 text-center">
        <div className="container mx-auto">
          {/* Use a single-column grid to stack cards vertically */}
          <div className="grid grid-cols-1 gap-6">
            {cardsData.map((card, index) => (
              <div
                key={index}
                className={`bg-gray-100 p-6 rounded-lg shadow-lg flex items-center ${
                  index % 2 !== 0 ? "flex-row-reverse" : ""
                }`}
              >
                <div className={`w-1/2 ${index % 2 !== 0 ? "pl-6" : "pr-6"}`}>
                  <img
                    src={card.image}
                    alt="Feature Image"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="w-1/2">
                  <h3 className="text-2xl font-semibold mb-4">{card.title}</h3>
                  <p className="text-gray-700">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cards;
