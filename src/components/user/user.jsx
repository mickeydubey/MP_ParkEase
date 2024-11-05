import React from 'react'
import Image from "../../assets/carillustration.svg"
import Image2 from "../../assets/carillustration2.svg"

const Userpage = () => {
  return (
    <div className='overflow-x-hidden'>
      <div className='h-[100vh] w-full '>
     
        <div className='h-full w-full justify-center flex items-center overflow-y-hidden z-20'>
            <div className='min-w-96 border-2 border-black min-h-[400px] rounded-xl justify-center flex items-center flex-col mt-20'>
                <div className='mb-12 text-3xl font-semibold'>User</div>
                <div className='w-[80%] mx-10 py-2 text-white rounded-lg m-10 mb-6 bg-[#2F3645] text-center'>login</div>
                <div className='bg-[#2F3645] w-[80%] text-white  py-2 rounded-lg text-center'>sign in</div>
                
            </div>
        </div>
        <img src={Image} alt="" className='absolute bottom-0 left-0 -translate-x-1/2 z-10'/>
      <img src={Image2} alt="" className='absolute bottom-0 right-0'/>
         </div>
    </div>
  )
}

export default Userpage
