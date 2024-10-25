import React from 'react'
import Navbar from '../components/Navbar'
import background1 from '../assests/background1.jpg'

function Contact() {
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
    </div>
  )
}

export default Contact