import React from 'react'
import logo from '../assests/logo.png'

const Navbar = () => {
  return (
    <nav className="relative bg-transparent bg-black p-7">
      <div className="container flex items-center justify-between mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Tune_Guitar_Logo"
            className="h-20"
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden space-x-8 font-mono font-bold text-white md:flex text-l">
          <a href="/" className="relative group">
          <span className="text-white transition-colors duration-300 group-hover:text-blue-500">
            HOME
          </span>
          <span className="block w-full h-[2px] bg-blue-500 absolute bottom-0 left-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </a>
        <a href="/about" className="relative group">
          <span className="text-white transition-colors duration-300 group-hover:text-blue-500">
            ABOUT US
          </span>
          <span className="block w-full h-[2px] bg-blue-500 absolute bottom-0 left-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </a>
        <a href="/detailing" className="relative group">
          <span className="text-white transition-colors duration-300 group-hover:text-blue-500">
            DETAILING SERVICES
          </span>
          <span className="block w-full h-[2px] bg-blue-500 absolute bottom-0 left-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </a>
        <a href="/shop" className="relative group">
          <span className="text-white transition-colors duration-300 group-hover:text-blue-500">
            SHOP
          </span>
          <span className="block w-full h-[2px] bg-blue-500 absolute bottom-0 left-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </a>
        <a href="/previous" className="relative group">
          <span className="text-white transition-colors duration-300 group-hover:text-blue-500">
            PREVIOUS PROJECTS
          </span>
          <span className="block w-full h-[2px] bg-blue-500 absolute bottom-0 left-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </a>
        <a href="/contact" className="relative group">
          <span className="text-white transition-colors duration-300 group-hover:text-blue-500">
            CONTACT US
          </span>
          <span className="block w-full h-[2px] bg-blue-500 absolute bottom-0 left-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </a>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-10 text-white">
          <button className="hover:text-gray-400">
            <i className="fas fa-shopping-cart"></i>
          </button>
          <button className="hover:text-gray-400">
            <i className="fas fa-user"></i>
          </button>
          <button className="hover:text-gray-400">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
