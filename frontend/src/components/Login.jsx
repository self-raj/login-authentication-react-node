import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { axiosInstance, LOGIN } from '../config/apiConfig';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post(LOGIN, { email, password });
      alert(res.data.message);
      navigate('/dashboard');
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4">
      <motion.form
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        onSubmit={handleLogin}
        className="bg-[#1f2937] border border-gray-700 p-8 rounded-xl w-full max-w-md shadow-xl"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-6 drop-shadow-md">🔒 Admin Login</h2>

        <div className="flex items-center bg-gray-800 px-3 py-2 rounded mb-4 focus-within:ring-2 focus-within:ring-blue-500">
          <FaUserAlt className="text-blue-400 mr-3" />
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-transparent outline-none text-white placeholder-gray-400"
          />
        </div>

        <div className="flex items-center bg-gray-800 px-3 py-2 rounded mb-6 focus-within:ring-2 focus-within:ring-blue-500">
          <FaLock className="text-blue-400 mr-3" />
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
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition-all duration-300"
        >
          Login
        </motion.button>

        <p className="mt-4 text-center text-sm text-gray-300">
          <a href="/forgot-password" className="text-blue-400 hover:underline">
            Forgot Password?
          </a>
        </p>
      </motion.form>
    </div>
  );
}
