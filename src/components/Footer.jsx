import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-4 gap-10">

          {/* College */}
          <div>

            <h2 className="text-2xl font-bold">
              Our College
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Empowering students with quality education,
              skills and opportunities for a successful future.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-lg font-semibold">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 mt-4">

              <Link to="/" className="text-gray-400 hover:text-white">
                Home
              </Link>

              <Link to="/about" className="text-gray-400 hover:text-white">
                About
              </Link>

              <Link to="/courses" className="text-gray-400 hover:text-white">
                Courses
              </Link>

              <Link to="/admission" className="text-gray-400 hover:text-white">
                Admission
              </Link>

            </div>

          </div>

          {/* Student */}
          <div>

            <h3 className="text-lg font-semibold">
              Student
            </h3>

            <div className="flex flex-col gap-3 mt-4">

              <Link to="/login" className="text-gray-400 hover:text-white">
                Login
              </Link>

              <Link to="/signup" className="text-gray-400 hover:text-white">
                Signup
              </Link>

              <Link to="/dashboard" className="text-gray-400 hover:text-white">
                Dashboard
              </Link>

              <Link to="/fees" className="text-gray-400 hover:text-white">
                Fees
              </Link>

            </div>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-lg font-semibold">
              Contact Us
            </h3>

            <div className="text-gray-400 mt-4 space-y-3">

              <p>
                📍 Mohali, Punjab, India
              </p>

              <p>
                📞 +91 98765 43210
              </p>

              <p>
                ✉️ info@ourcollege.com
              </p>

            </div>

          </div>

        </div>

      </div>

      <div className="border-t border-gray-800">

        <div className="max-w-7xl mx-auto px-6 py-5 text-center">

          <p className="text-gray-400 text-sm">
            © 2026 Our College. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;