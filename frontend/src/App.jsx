import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";





export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      {/* Protected + Sidebar Layout */}
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={< Dashboard/>}>
        <Route path="sidebar" element={<Sidebar />} />
          <Route path="home" element={<Home />} />
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="pricing" element={<Pricing />} /> */}
          {/* <Route path="our_vision" element={<Vision />} /> */}
          {/* <Route path="about" element={<About />} /> */}
          <Route path="gallery" element={<Gallery />} />
          {/* <Route path="all-images" element={<AllImages />} /> */}
        </Route>
      </Route>
    </Routes>
  );
}
