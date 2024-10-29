import React from 'react'
import Navbar from '../components/Navbar'
import background1 from '../assests/background1.jpg'
import { motion } from 'framer-motion';

function Shop() {
  return (
    <div>
      {/* Background Image 1*/}
      <div>
      <img 
      src={background1}
      alt='Background'
      className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-95" />

      </div>

      {/* Navbar Component */}
      <Navbar />

      <h1 className='relative text-3xl font-bold text-center text-gray-50 '>Our Guitar Collection</h1>

      <div className='relative flex flex-col gap-10 overflow-x-hidden'>
          <motion.div 
          variants={{hidden: {opacity:0}, show: {opacity:1}}} 
          className='grid grid-cols-3 gap-10 p-10'>
            <div className='relative flex items-center justify-center gap-20 rounded-lg bg-slate-900 aspect-square'>
              <button className='p-3 font-bold text-white transition duration-300 ease-in-out transform bg-blue-800 rounded mt-72 hover:bg-blue-700 hover:scale-105 hover:shadow-lg duration-20'>
                Add to Cart<i className="ml-3 fas fa-shopping-cart"></i>
              </button>
            </div>
            <div className='relative flex items-center justify-center gap-20 rounded-lg bg-slate-900 aspect-square'>
              <button className='p-3 font-bold text-white transition duration-300 ease-in-out transform bg-blue-800 rounded mt-72 hover:bg-blue-700 hover:scale-105 hover:shadow-lg duration-20'>
                Add to Cart<i className="ml-3 fas fa-shopping-cart"></i>
              </button>
            </div>
            <div className='relative flex items-center justify-center gap-20 rounded-lg bg-slate-900 aspect-square'>
              <button className='p-3 font-bold text-white transition duration-300 ease-in-out transform bg-blue-800 rounded mt-72 hover:bg-blue-700 hover:scale-105 hover:shadow-lg duration-20'>
                Add to Cart<i className="ml-3 fas fa-shopping-cart"></i>
              </button>
            </div>
          </motion.div>
      </div>
    </div>
  )
}

export default Shop