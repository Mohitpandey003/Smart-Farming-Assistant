import { useState } from "react";
import img from "../../assets/img1.jpg";

const Carousel = () => {
  const images = [
    "https://wallpapercave.com/wp/wp3708762.jpg",
    "https://t3.ftcdn.net/jpg/07/51/93/08/360_F_751930854_WJ9JiIUaOMuDQ13FqjKqIZqDsrNTax5d.jpg",
    img,
    "https://t4.ftcdn.net/jpg/07/55/21/71/360_F_755217109_DOWJnB1pPjUPDVsMhuAgDZZKueQ7KGpL.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleGetStarted = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full h-[85vh]">
      {/* Carousel Image */}
      <div className="overflow-hidden w-full h-full rounded-md">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover filter brightness-60"
        />
      </div>
      {/* Overlay Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-4xl font-bold">YOUR SMART FARMING ASSISTANT</h1>
        <p className="text-xl mt-2">
          Smart Crops, Smart Choices with Smart Agro!
        </p>
        <button
          onClick={handleGetStarted}
          className="mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded"
        >
          Get Started
        </button>
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200"
      >
        &lt;
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200"
      >
        &gt;
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-2.5 h-2.5 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
