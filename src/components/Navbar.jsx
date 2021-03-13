import React, { useState } from 'react';
import Burger from '@animated-burgers/burger-arrow';
import '@animated-burgers/burger-arrow/dist/styles.css';
const Navbar = () => {
  const [burger, setBurger] = useState(false);
  return (
    <div className="sticky w-full border-b border-gray-500 p-6 flex justify-between">
      <div>Verbose 9</div>
      <Burger
        style={{ fontSize: '10px' }}
        isOpen={burger}
        direction="up"
        onClick={() => setBurger(!burger)}
      />
      {burger && (
        <div
          className="fixed left-0 w-full bg-black shadow-md border-b-2 border-gray-500 p-6"
          style={{ top: 79 }}
        >
          <div className="font-semibold text-lg">This is Menu</div>
          <ul className="select-none mt-4 text-gray-300">
            <li>Home</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
