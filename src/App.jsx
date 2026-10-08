import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Admission from "./pages/Admission";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Faculty from "./pages/Faculty";
import Gallery from "./pages/Gallery";
import Campus from "./pages/Campus";
import Fees from "./pages/Fees";
import Scholarships from "./pages/Scholarships";
import Placement from "./pages/Placement";
import Contact from "./pages/Contact";
import Location from "./pages/Location";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/courses" element={<Courses />} />

        <Route path="/courses/:id" element={<CourseDetails />} />

        <Route path="/admission" element={<Admission />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/faculty" element={<Faculty />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/campus" element={<Campus />} />

        <Route path="/fees" element={<Fees />} />

        <Route path="/scholarships" element={<Scholarships />} />

        <Route path="/placement" element={<Placement />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/location" element={<Location />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;