import React from 'react'
import background2 from '../assests/background2.jpg'
import Navbar from './Navbar'
import { motion } from 'framer-motion';
import '../additional.css'


const Home = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div>
      <img 
      src={background2}
      alt='Background'
      className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-95" />

      </div>

      {/* Navbar Component */}
      <Navbar />

      {/* Other Home Page Content */}
      <div className="relative z-10 p-8 pb-10 pl-32 text-white">
      <motion.div
      initial = {{opacity:0, x:-100}}
      animate = {{opacity:1, x:0}}
      transition={{duration:1, ease:"easeOut", delay:0.5}}
      >
      <p className="mt-4 text-2xl">Welcome to Tune Guitar</p>
      </motion.div>
      
      <motion.div
      initial = {{opacity:0, x:-100}}
      animate = {{opacity:1, x:0}}
      transition={{duration:1, ease:"easeOut", delay:0.2}}
      >
      <h1 className="pt-4 text-5xl font-bold">Tune In, Rock Out!</h1>
      {/*Add additional css to get the stroke of the text (additional.css)*/}
      <h1 className='pt-4 text-5xl font-bold text-transparent stroke-2 stroke-text stroke-white'>Expert Eepairs</h1>
      <h1 className="pt-4 text-5xl font-bold">Exclusive Guitar Collections</h1>
      </motion.div>
      <button 
      className='h-12 mt-20 text-center bg-blue-500 rounded-[5px]  w-40 rounded-bl-[42px] rounded-tr-[42px] hover:rounded-tl-[32px] hover:rounded-br-[32px] hover:rounded-bl-[48px] hover:rounded-tr-[48px] trasition duration-500'
      >
        Shop Now
      </button>

      <div className='w-[1000px] mt-20 text-center'>
        <h1 className=' text-7xl'>TUNE GUITAR</h1>
        <h2>Unlock the Rhythm Within</h2>
      </div>
        
      </div>
    </div>
  );
};

export default Home;
