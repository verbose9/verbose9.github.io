import React, { useEffect, useState } from 'react';
import Burger from '@animated-burgers/burger-arrow';
import '@animated-burgers/burger-arrow/dist/styles.css';
import { AnimatePresence, motion } from 'framer-motion';
const Navbar = () => {
  const [burger, setBurger] = useState(false);
  useEffect(() => {
    document.body.addEventListener('scroll', (e) => {
      console.log(e);
    });
  }, []);
  return (
    <div className="w-full sticky top-0 z-40">
      <div className="bg-black border-b border-gray-500 p-6 items-center justify-between flex z-40">
        <div className="font-semibold">Verbose 9</div>
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
            exit={{ y: '-110%' }}
            transition={{ type: 'tween', duration: 0.35 }}
            className="fixed left-0 w-full bg-black shadow-md border-b border-gray-500 p-6"
            style={{ top: 79, zIndex: '-1' }}
          >
            <div className="font-semibold text-lg">This is Menu</div>
            <ul className="select-none mt-4 text-gray-300">
              <li>Home</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
