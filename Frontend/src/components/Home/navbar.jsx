import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/Logo1.png";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleTranslate = (langCode) => {
    const selectField = document.querySelector(".goog-te-combo");
    if (selectField) {
      selectField.value = langCode;
      selectField.dispatchEvent(new Event("change"));
    } else {
      alert("Google Translate is not loaded. Please refresh the page.");
    }
    setIsDropdownOpen(false);
  };

  return (
    <nav className="bg-gray-700 p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Smart Agro Logo" className="h-12" />
          <Link to="/" className="text-white text-xl font-bold">
            AGRO LABS
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="space-x-6 text-white font-medium hidden md:flex">
          <NavLink to="/" className="hover:text-yellow-400">
            Home
          </NavLink>
          <NavLink to="/crop-prediction" className="hover:text-yellow-400">
            Crop Prediction
          </NavLink>
          <NavLink
            to="/fertilizer-recommendation"
            className="hover:text-yellow-400"
          >
            Fertilizer Recommendation
          </NavLink>
          <NavLink to="/weather-analysis" className="hover:text-yellow-400">
            Weather Analysis
          </NavLink>
        </div>

        {/* Translate Dropdown */}
        <div className="relative">
          <button
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow-md flex items-center space-x-2"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            🌐 Translate
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
              <ul className="text-gray-800">
                <li
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleTranslate("en")}
                >
                  🇺🇸 English
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleTranslate("hi")}
                >
                  🇮🇳 Hindi
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleTranslate("ur")}
                >
                  🇵🇰 Urdu
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleTranslate("bho")}
                >
                  🎤 Bhojpuri
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
