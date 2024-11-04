import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars } from 'react-icons/fa';

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
    <div className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-10 py-4 rounded-lg flex items-center justify-between z-50 mt-4 transition-all
      lg:bg-white lg:bg-opacity-10 lg:backdrop-blur-lg md:shadow-sm md:border`}>
      
      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden" onClick={toggleMenu}>
        <FaBars className="text-neutral-950 text-2xl cursor-pointer" />
      </div>

      {/* Navbar Links - visible on desktop */}
      <div className={`hidden md:flex md:flex-row space-y-4 md:space-y-0 md:space-x-8 ml-5`}>
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
            className={`relative
              px-4 py-2 rounded-full 
              cursor-pointer
              flex items-center gap-2 
              text-slate-400
              shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_3px_3px_10px_rgba(0,_0,_0,_0.25)]
              transition-all
              hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
              hover:text-neutral-950
              ${activeLink === item ? "text-neutral-950" : "text-slate-500"}
            `}
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Mobile Links Dropdown with Blur Background */}
      <div className={`absolute left-1/2 transform -translate-x-1/2 w-full max-w-xs mt-60 rounded-lg shadow-lg z-40 bg-slate-300 bg-opacity-30 backdrop-blur-md ${isOpen ? "block" : "hidden"} md:hidden`}>
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
            className={`block px-4 py-2 text-slate-600 hover:bg-green-100 rounded transition-colors`}
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
