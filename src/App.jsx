import React from 'react';
import Navbar from './components/Navbar';
const App = () => {
  return (
    <div className="h-screen bg-black text-white max-h-screen">
      <Navbar></Navbar>
      <div className="px-6 py-4">
        <div>Verbose 9's</div>
        <h1 className="text-6xl font-medium leading-tight my-4">Project U7</h1>
        <p className="text-sm italic text-gray-400">Everybody's welcome</p>
      </div>
    </div>
  );
};

export default App;
