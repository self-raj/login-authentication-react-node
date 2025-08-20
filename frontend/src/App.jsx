import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import ProtectedRoutes from './components/ProtectedRoutes';
import Sidebar from './components/Sidebar';
import Sidebars from './components/Sidebars';
import Gallery from './components/Gallery';
import Dashboard from './components/Dashboard';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/sidebars" element={<Sidebars />} />
         <Route path="/gallery" element={<Gallery />} />
      </Route>
    </Routes>
  );
}