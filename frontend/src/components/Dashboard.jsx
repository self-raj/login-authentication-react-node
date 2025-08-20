import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
// import Sidebar from './Sidebar';
import Sidebars from './Sidebars';
import Gallery from './Gallery';





export default function Dashboard() {
 




  const animateCount = (target, setter) => {
    let start = 0;
    const interval = setInterval(() => {
      start += 1;
      if (start <= target) {
        setter(start);
      } else {
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
  };


  return (
    <div className="flex min-h-screen text-white">
      {/* <Sidebar /> */}
       <Sidebars/>
      
    
    </div>
  );
}
