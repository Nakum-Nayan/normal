import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-center sm:justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-xl md:text-3xl font-bold text-black-300 hover:text-orange-900 transition"
        >
          Gurukrupa Enterprise
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-black font-medium">
          <li>
            <Link
              to="/"
              className="hover:text-orange-900 transition duration-200"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/calculator"
              className="hover:text-orange-900 transition duration-200"
            >
              Calculator
            </Link>
          </li>

          <li>
            <Link
              to="/materials"
              className="hover:text-orange-900 transition duration-200"
            >
              Materials
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="hover:text-orange-900 transition duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <ul className="bg-blue-800 text-white text-center">

          <li className="border-b border-blue-700">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="block py-3 hover:bg-blue-900"
            >
              Home
            </Link>
          </li>

          <li className="border-b border-blue-700">
            <Link
              to="/calculator"
              onClick={() => setMenuOpen(false)}
              className="block py-3 hover:bg-blue-900"
            >
              Calculator
            </Link>
          </li>

          <li className="border-b border-blue-700">
            <Link
              to="/materials"
              onClick={() => setMenuOpen(false)}
              className="block py-3 hover:bg-blue-900"
            >
              Materials
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="block py-3 hover:bg-blue-900"
            >
              Contact
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;