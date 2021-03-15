import React, { useState } from 'react';
import Burger from '@animated-burgers/burger-arrow';
import '@animated-burgers/burger-arrow/dist/styles.css';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
  const [burger, setBurger] = useState(false);
  return (
    <div className="w-full sticky top-0 z-40">
      <div className="bg-black p-6 items-center justify-between flex z-40">
        <div className="flex items-center">
          <img src="/logo.svg" className="h-7" />
        </div>
        <Burger
          style={{
            fontSize: '10px',
          }}
          isOpen={burger}
          direction="up"
          onClick={() => setBurger(!burger)}
        />
      </div>

      <AnimatePresence>
        {burger && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'tween', duration: 0.35 }}
            className="fixed left-0 w-full bg-white text-black shadow-m px-6 py-10 border-b border-black"
            style={{ top: 78, zIndex: '-1' }}
          >
            <ul className="select-none space-y-6 text-xl">
              <li>
                <span className="nav-link">Home</span>
              </li>
              <li>
                <span className="nav-link">Contact us</span>
              </li>
              <li>
                <span className="nav-link">Projects</span>
              </li>
              <li>
                <span className="nav-link">Github</span>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
