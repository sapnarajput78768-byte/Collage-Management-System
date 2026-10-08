import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" onClick={closeMenu}>
          <div>
            <h1 className="text-2xl font-bold text-blue-700">
              Our College
            </h1>

            <p className="text-xs text-gray-500">
              Learn • Grow • Succeed
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-7">

          <Link
            to="/"
            className="text-gray-700 hover:text-blue-700 transition"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="text-gray-700 hover:text-blue-700 transition"
          >
            About
          </Link>

          <Link
            to="/courses"
            className="text-gray-700 hover:text-blue-700 transition"
          >
            Courses
          </Link>

          <Link
            to="/admission"
            className="text-gray-700 hover:text-blue-700 transition"
          >
            Admission
          </Link>

          <Link
            to="/campus"
            className="text-gray-700 hover:text-blue-700 transition"
          >
            Campus
          </Link>

          <Link
            to="/gallery"
            className="text-gray-700 hover:text-blue-700 transition"
          >
            Gallery
          </Link>

          <Link
            to="/contact"
            className="text-gray-700 hover:text-blue-700 transition"
          >
            Contact
          </Link>

          {/* Login */}
          <Link
            to="/login"
            className="text-blue-700 font-medium hover:text-blue-900 transition"
          >
            Login
          </Link>

          {/* Apply Now */}
          <Link
            to="/admission"
            className="bg-blue-700 text-white px-5 py-2.5 rounded-lg hover:bg-blue-800 transition"
          >
            Apply Now
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t bg-white px-6 py-5">

          <div className="flex flex-col gap-4">

            <Link
              to="/"
              onClick={closeMenu}
              className="text-gray-700 hover:text-blue-700"
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={closeMenu}
              className="text-gray-700 hover:text-blue-700"
            >
              About
            </Link>

            <Link
              to="/courses"
              onClick={closeMenu}
              className="text-gray-700 hover:text-blue-700"
            >
              Courses
            </Link>

            <Link
              to="/admission"
              onClick={closeMenu}
              className="text-gray-700 hover:text-blue-700"
            >
              Admission
            </Link>

            <Link
              to="/campus"
              onClick={closeMenu}
              className="text-gray-700 hover:text-blue-700"
            >
              Campus
            </Link>

            <Link
              to="/gallery"
              onClick={closeMenu}
              className="text-gray-700 hover:text-blue-700"
            >
              Gallery
            </Link>

            <Link
              to="/contact"
              onClick={closeMenu}
              className="text-gray-700 hover:text-blue-700"
            >
              Contact
            </Link>

            <Link
              to="/login"
              onClick={closeMenu}
              className="text-blue-700 font-medium"
            >
              Login
            </Link>

            <Link
              to="/admission"
              onClick={closeMenu}
              className="bg-blue-700 text-white px-5 py-2.5 rounded-lg text-center"
            >
              Apply Now
            </Link>

          </div>

        </div>
      )}

    </nav>
  );
}

export default Navbar;