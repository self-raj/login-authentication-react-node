import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLock } from 'react-icons/fa';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
  'http://localhost:8080/signup',
  { email, password },
  { withCredentials: true } // <-- ADD THIS
);
      alert(res.data.message);
      navigate('/');
    } catch (err) {
      alert(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4">
      <motion.form
        onSubmit={handleSignup}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#1f2937] border border-gray-700 p-8 rounded-xl w-full max-w-md shadow-lg"
      >
        <h2 className="text-2xl font-bold text-white text-center mb-6">Admin Signup</h2>

        <div className="flex items-center bg-gray-800 px-3 py-2 rounded mb-4 focus-within:ring-2 focus-within:ring-green-500">
          <FaEnvelope className="text-green-400 mr-3" />
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-transparent outline-none text-white placeholder-gray-400"
          />
        </div>

        <div className="flex items-center bg-gray-800 px-3 py-2 rounded mb-6 focus-within:ring-2 focus-within:ring-green-500">
          <FaLock className="text-green-400 mr-3" />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-transparent outline-none text-white placeholder-gray-400"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded transition-all duration-300"
        >
          Signup
        </motion.button>
      </motion.form>
    </div>
  );
}
