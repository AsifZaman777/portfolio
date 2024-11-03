import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaEllipsisV } from 'react-icons/fa';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(""); // Track active link
  const [isOpen, setIsOpen] = useState(false); // Toggle menu for mobile view

  const handleModalOpen = () => {
    console.log("Opening login modal...");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-3xl px-10 py-4 rounded-lg flex items-center justify-between z-50 mt-4 transition-all
      lg:bg-white lg:bg-opacity-10 lg:backdrop-blur-lg md:shadow-lg lg:border`}>

        
      
      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden" onClick={toggleMenu}>
        <FaEllipsisV className="text-green-400 text-2xl cursor-pointer" />
      </div>

      {/* Navbar Links - hidden on mobile */}
      <div className={`flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 ml-0 -mt-1 ${isOpen ? "flex" : "hidden"} md:flex`}>
        {["Home", "About", "Experience", "Projects", "Research", "Contact"].map((item) => (
          <Link
            key={item}
            to={item.toLowerCase()}
            smooth={true}
            duration={500}
            offset={-70}
            onClick={() => {
              setActiveLink(item);
              setIsOpen(false); // Close menu on item click
              if (item === "Login") handleModalOpen();
            }}
            className={`
              px-4 py-2 rounded-full 
              flex items-center gap-2 
              text-slate-500
              shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_3px_3px_10px_rgba(0,_0,_0,_0.25)]
              transition-all
              hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
              hover:text-violet-500
              ${activeLink === item ? "text-violet-500" : "text-slate-500"}
            `}
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
