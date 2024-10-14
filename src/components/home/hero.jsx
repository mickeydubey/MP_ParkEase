import React from 'react'
import Parkease from "../../assets/PARKIMAGE.png"

const Hero = () => {
  return (
    <div>
      <div className='w-full h-[100vh] bg-black'>
      {/* <img className='w-full h-[100vh]' src={Parkease} alt="Example" /> */}
      
      <div className='w-full h-full bg-no-repeat bg-cover bg-center flex justify-center items-center' style={{
        backgroundImage: `url(${Parkease})`,
      }}>
    <h1 className='text-white text-7xl font-semibold text-center'>Find Your Spot, <br /> Park With Ease!</h1>
      </div>
      </div>
    </div>
  )
}

export default Hero
