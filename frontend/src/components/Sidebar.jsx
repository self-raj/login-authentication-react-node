import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaBook, FaQuestionCircle, FaSignOutAlt } from 'react-icons/fa';
import { LuLayoutDashboard } from 'react-icons/lu';
import { MdContactMail } from 'react-icons/md';
import { motion } from 'framer-motion';
import { PiNewspaperClipping } from 'react-icons/pi';
import { RiNotification2Line } from 'react-icons/ri';
import { FaCalendarAlt } from 'react-icons/fa';
import axios from 'axios';
const navItems = [
  { label: 'Dashboard', icon: <LuLayoutDashboard />, path: '/dashboard' },
  { label: 'Add Courses', icon: <FaBook />, path: '/add-course' },
  { label: 'News', icon: <PiNewspaperClipping />, path: '/news' },
  { label: 'Notices', icon: <RiNotification2Line />, path: '/notices' },
  { label: 'Event', icon: <FaCalendarAlt />, path: '/academic-events' },
  { label: 'Contact', icon: <MdContactMail />, path: '/update-contact' },
  { label: 'Testimonial', icon: <FaQuestionCircle />, path: '/testimonial' },
];

const Sidebar = () => {

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
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-64 bg-gray-900 shadow-md p-4 min-h-screen"
    >
      <div className="flex justify-center mb-6">
        <img
          src="/Photo.png"
          alt="Logo"
          className="w-20 h-20 rounded-full object-cover border-4 border-blue-500"
        />
      </div>

      <nav className="space-y-4 text-gray-300 text-[17px] font-medium">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              `group flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ease-in-out transform cursor-pointer relative overflow-hidden
              ${isActive ? 'bg-blue-600 text-white scale-105' : 'hover:text-blue-400 hover:scale-[1.02]'}`
            }
          >
            {/* Active indicator bar */}
            {({ isActive }) =>
              isActive && (
                <motion.span
                  layoutId="active-pill"
                  className="absolute left-0 top-0 h-full w-1 bg-blue-400 rounded-r"
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                />
              )
            }
            {item.icon} {item.label}
          </NavLink>
        ))}

        <div
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2 mt-8 rounded-lg text-red-400 hover:text-red-500 cursor-pointer transition-all"
        >
          <FaSignOutAlt /> Log Out
        </div>

      </nav>
    </motion.div>
  );
};

export default Sidebar;
