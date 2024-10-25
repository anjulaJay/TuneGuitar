import React from 'react'
import background1 from '../assests/background1.jpg'
import background2 from '../assests/background2.jpg'
import logo from '../assests/logo.png'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion';
import '../additional.css'
import StickyIcon from '../components/Sticky_icon';



const Home = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image 1*/}
      <div>
      <img 
      src={background1}
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

      <motion.div 
      initial = {{opacity:0}}
      animate = {{opacity:1}}
      transition={{delay:0.5, duration:1}}
      >
      <button 
      className='h-12 mt-20 text-center bg-blue-500 rounded-[5px]  w-40 rounded-bl-[42px] rounded-tr-[42px] hover:bg-blue-400 hover:font-bold hover:rounded-tl-[32px] hover:rounded-br-[32px] hover:rounded-bl-[48px] hover:rounded-tr-[48px] trasition duration-500'
      >
        Shop Now
      </button>
      </motion.div>
      
      
      <div className='mt-8 mr-[850px] '>
      <motion.div
      initial={{
        x:300,
      }}
      animate={{
        x:450,
      }}
      transition={{
        delay:0.1,
        duration:220,
        type:"spring",
        stiffness:1,
        damping:0
      }}
      >
      <h1 className='font-bold text-transparent stroke-2 text-7xl stroke-text stroke-white'>TUNE GUITAR</h1>
      
      <h2 className='pt-2 font-mono text-3xl font-bold text-center text-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Unlock the Rhythm Within</h2>
      </motion.div>
      </div>
      <button className='bg-white rounded-full'>
      <StickyIcon/>
      </button> 
      </div>

      {/* Background Image 1*/}
      <div className='h-48 bg-slate-900'></div>

      <div className='relative h-screen bg-center bg-cover'>
        <div className='absolute inset-0 bg-black opacity-90'></div>
        <img 
          src={background2}
          alt='Background'
          className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-95 blur-sm" />
        <div>
            <div className='relative items-center justify-center h-full pt-32 text-center'>
              <h1 className='pt-4 font-bold text-7xl text-gray-50 '>Your Guitar's <span className='font-bold text-transparent stroke-2 text-7lx stroke-text '>Best Friend!</span></h1>
              <br/>
              <h2 className='pt-4 font-bold text-7xl text-gray-50'><span className='text-blue-800 stroke-text stroke-white'>Guitar Sales</span> | <span className='text-blue-800 stroke-text stroke-white'> Repairs </span> | <span className='text-blue-800 stroke-text stroke-white'>Accessories</span></h2>

              <button className='p-3 mt-32 font-bold text-white transition duration-300 ease-in-out transform bg-blue-800 rounded hover:bg-blue-700 hover:scale-105 hover:shadow-lg duration-20'>Call now<i className="ml-3 fas fa-phone"></i></button>
              <div className="flex justify-center mt-16">
                <img
                  src={logo}
                  alt="Tune_Guitar_Logo"
                  className="h-40"/>
              </div>

              
            </div>
        </div>
      </div>
    </div>

    
  );
};

export default Home;
