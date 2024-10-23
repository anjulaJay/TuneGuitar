import React from 'react'
import logo from '../assests/logo.png'

const Navbar = () => {
  return (
    <nav className="bg-black bg-transparent p-7 relative">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Tune_Guitar_Logo"
            className="h-20"
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 font-bold text-l font-mono text-white">
          <a href="/" className="group relative">
          <span className="text-white group-hover:text-blue-500 transition-colors duration-300">
            HOME
          </span>
          <span className="block w-full h-[2px] bg-blue-500 absolute bottom-0 left-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </a>
        <a href="/" className="group relative">
          <span className="text-white group-hover:text-blue-500 transition-colors duration-300">
            ABOUT US
          </span>
          <span className="block w-full h-[2px] bg-blue-500 absolute bottom-0 left-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </a>
        <a href="/" className="group relative">
          <span className="text-white group-hover:text-blue-500 transition-colors duration-300">
            DETAILING SERVICES
          </span>
          <span className="block w-full h-[2px] bg-blue-500 absolute bottom-0 left-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </a>
        <a href="/" className="group relative">
          <span className="text-white group-hover:text-blue-500 transition-colors duration-300">
            SHOP
          </span>
          <span className="block w-full h-[2px] bg-blue-500 absolute bottom-0 left-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </a>
        <a href="/" className="group relative">
          <span className="text-white group-hover:text-blue-500 transition-colors duration-300">
            PREVIOUS PROJECTS
          </span>
          <span className="block w-full h-[2px] bg-blue-500 absolute bottom-0 left-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </a>
        <a href="/" className="group relative">
          <span className="text-white group-hover:text-blue-500 transition-colors duration-300">
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