import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { 
  FaHome, FaPhone, FaDollarSign, FaEye, 
  FaInfoCircle, FaUpload, FaImages, FaSignOutAlt 
} from "react-icons/fa";
import axios from "axios";

function Sidebars() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "flex items-center gap-3 bg-gray-900 text-white p-3 rounded"
      : "flex items-center gap-3 text-gray-300 hover:bg-gray-700 p-3 rounded";

  // logout
  const handleLogout = async () => {
    try {
      await axios.get('http://localhost:8080/logout', { withCredentials: true });
      localStorage.clear(); // If using localStorage for auth flags
      window.location.href = '/'; // Or use `navigate('/')` if inside a component
    } catch (err) {
      console.error("Logout error:", err);
      alert("Logout failed. Try again.");
    }
  };

  return (
    <div className="flex w-full h-screen bg-gray-100 ">
      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white w-64 p-5 space-y-6 h-full 
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 transition-transform duration-300 ease-in-out z-50 fixed md:relative`}
        style={{ top: 0, left: 0, height: '100vh' }}
      >
        <h2 className="text-2xl font-bold text-center mb-6">Admin Panel</h2>
        <nav className="flex flex-col space-y-2">
          <NavLink to="/home" className={linkClass} onClick={() => setIsOpen(false)}>
            <FaHome /> Home
          </NavLink>
          <NavLink to="/contact" className={linkClass} onClick={() => setIsOpen(false)}>
            <FaPhone /> Contact
          </NavLink>
          <NavLink to="/pricing" className={linkClass} onClick={() => setIsOpen(false)}>
            <FaDollarSign /> Pricing
          </NavLink>
          <NavLink to="/our_vision" className={linkClass} onClick={() => setIsOpen(false)}>
            <FaEye /> Our Vision
          </NavLink>
          <NavLink to="/about/content" className={linkClass} onClick={() => setIsOpen(false)}>
            <FaInfoCircle /> About
          </NavLink>
          <NavLink to="/gallery" className={linkClass} onClick={() => setIsOpen(false)}>
            <FaUpload /> Gallery
          </NavLink>
          <NavLink to="/all-images" className={linkClass} onClick={() => setIsOpen(false)}>
            <FaImages /> All Images
          </NavLink>

          <button
            onClick={handleLogout}
            className="flex items-center gap-3 bg-red-500 hover:bg-red-600 p-3 rounded text-white mt-4"
          >
            <FaSignOutAlt /> Logout
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="bg-gray-800 text-white p-4 flex items-center md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-3 py-2 bg-gray-700 rounded-md"
          >
            ☰ Menu
          </button>
          <h1 className="ml-4 font-bold">Dashboard</h1>
        </div>

        {/* Page Content */}
        <div>
          <h1 className="w-full text-3xl font-bold mb-4 p-4 bg-amber-950">Main Content</h1>
          <p className="text-gray-700">
            Yaha par aapka actual content show hoga.  
            Large screen par sidebar left me dikhega aur mobile par toggle hoga.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sidebars;
