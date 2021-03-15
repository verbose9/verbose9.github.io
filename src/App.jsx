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
        className="px-6 py-4 text-lg"
      >
        <h1 className="text-6xl font-medium leading-tight my-4">
          Project <br />
          U7
        </h1>
        <p className="text-2xl mt-6 text-gray-400 leading-relaxed">
          A collaborative project
          <br />
          where developers
          <br />
          collaborate to the
          <br />
          Verbose 9 OS Project.
          <br />
          You are welcomed with
          <br />
          our whole heart.
          <br />
        </p>
        <div className="mt-6">
          <button className="px-6 py-2 rounded-none border-2 border-white text-white collab-btn text-xl">
            Collab
          </button>
        </div>
        <div className="mt-20 py-10 tech-stack z-20 relative overflow-hidden max-w-full">
          <div className="z-50">
            <h1 className="font-bold text-5xl text-white">
              Our Tech
              <br />
              Stack
            </h1>
            <ul className="mt-8 space-y-4 text-2xl">
              <li>React</li>
              <li>MonogoDB</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>#DevOps</li>
            </ul>
          </div>
        </div>
        <div className="mt-20">
          <img src="/circuit.svg" className="w-full" />
        </div>
      </motion.div>
    </div>
  );
};

export default App;
