import React from 'react';
import Navbar from './components/Navbar';
import { motion } from 'framer-motion';
const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar></Navbar>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="px-6 py-4"
      >
        <div>Verbose 9's</div>
        <h1 className="text-6xl font-medium leading-tight my-4">Project U7</h1>
        <p className="text-sm italic text-gray-400">Everybody's welcome</p>
        <div className="mt-6">
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="px-6 py-2 rounded-full bg-blue-600"
          >
            Let me in
          </motion.button>

          <div className="h-screen"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default App;
