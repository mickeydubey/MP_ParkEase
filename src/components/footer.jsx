import React from 'react'
import Logo from "../assets/logo.png"
import X from "../assets/X.png"
import F from "../assets/F.png"
import I from "../assets/I.png"

const Footer = () => {
  return (
    <div>
      <div className='w-full flex justify-between items-center bg-[#2F3645]'>
        <div className='w-32 h-32 mx-10'>
            <img src={Logo} alt="" />
        </div>
        <div className=''>
            <div className='flex gap-10 m-10' >
            <div className="w-10 h-10 rounded-full bg-white">
    <img src={X} alt="Parking Icon" className="w-full h-full object-cover" />
  </div>
  <div className="w-10 h-10 rounded-full bg-white">
    <img src={F} alt="Parking Icon" className="w-full h-full object-cover" />
  </div>
  <div className="w-10 h-10 rounded-full bg-white">
    <img src={I} alt="Parking Icon" className="w-full h-full object-cover" />
  </div>
            </div>
        </div>
      </div>
      <div className='w-full bg-[#2F3645] text-center text-white p-3'>
      ParkEase© 2024. All rights reserved.
      </div>
    </div>
  )
}

export default Footer
