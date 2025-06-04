// src/components/Footer.jsx
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white px-4 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links Column */}
          <div className="mx-4">
            <h3 className="text-xl font-bold mb-4 underline">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/crop-prediction" className="hover:underline">
                  Crop
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/fertilizer-recommendation"
                  className="hover:underline"
                >
                  Fertilizer
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/weather-analysis" className="hover:underline">
                  Weather
                </Link>
              </li>
            </ul>
          </div>

          {/* Extra Links Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 underline">Extra Links</h3>
            <ul>
              <li className="mb-2">
                <Link to="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/terms-of-use" className="hover:underline">
                  Terms of Use
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/ask-a-question" className="hover:underline">
                  Ask a Question
                </Link>
              </li>
            </ul>
          </div>

          {/* In Future Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 underline">In Future</h3>
            <ul>
              <li className="mb-2">
                <Link to="/future-scope" className="hover:underline">
                  Future Scope
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/community-forum" className="hover:underline">
                  Community Forum
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/newsletter" className="hover:underline">
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Horizontal Line Above Copyright */}
        <hr className="my-8 border-t-2 border-white" />

        {/* Copyright Section */}
        <div className="text-center text-sm">
          <p>© Copyright – All Rights Reserved Team AgroLabs</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
