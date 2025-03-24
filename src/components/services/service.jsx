import React from 'react'
import Carimage from '../../assets/carimage.png'
import P from '../../assets/P.png'
import IT from '../../assets/IT.png'
import S from '../../assets/S.png'
import C from '../../assets/C.png'

const Service = () => {
  return (
    <div>
      <div>
        <div className='h-[72vh] flex justify-center items-center'>
            <img src={Carimage} alt="" className='w-full' />
        </div>

        <div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-16">

  <div class="bg-[#EEEDEB] h-72 text-black flex justify-center items-center flex-col rounded-2xl">
    <div className='flex-1 flex justify-center items-center flex-col self-start p-10 '>
      <div className='w-10 h-10 bg-transparent self-start'>
      <img src={P} alt="Parking Icon" className="w-full h-full object-cover" />
      </div>
      <div className='font-semibold'>Parking Facility Management</div>
    </div>
    <div className='flex-1  w-full flex justify-center items-center p-10 text-sm'> From small lots to large parking structures, we manage every aspect to ensure smooth operations.</div>
  </div>

<div class="bg-[#EEEDEB] h-72 text-black flex justify-center items-center flex-col rounded-2xl">
    <div className='flex-1 flex justify-center items-center flex-col self-start p-10 '>
      <div className='w-10 h-10 bg-transparent self-start'>
      <img src={IT} alt="Parking Icon" className="w-full h-full object-cover" /> 
      </div>
      <div className='font-semibold'>Parking Facility Management</div>
    </div>
    <div className='flex-1  w-full flex justify-center items-center p-10 text-sm'> From small lots to large parking structures, we manage every aspect to ensure smooth operations.</div>
  </div>

  <div class="bg-[#EEEDEB] h-72 text-black flex justify-center items-center flex-col rounded-2xl">
    <div className='flex-1 flex justify-center items-center flex-col self-start p-10 '>
      <div className='w-10 h-10 bg-transparent self-start'>
      <img src={S} alt="Parking Icon" className="w-full h-full object-cover" />
      </div>
      <div className='font-semibold'>Parking Facility Management</div>
    </div>
    <div className='flex-1  w-full flex justify-center items-center p-10 text-sm'> From small lots to large parking structures, we manage every aspect to ensure smooth operations.</div>
  </div>

  <div class="bg-[#EEEDEB] h-72 text-black flex justify-center items-center flex-col rounded-2xl">
    <div className='flex-1 flex justify-center items-center flex-col self-start p-10 '>
      <div className='w-10 h-10 bg-transparent self-start'>
      <img src={C} alt="Parking Icon" className="w-full h-full object-cover" />
      </div>
      <div className='font-semibold'>Parking Facility Management</div>
    </div>
    <div className='flex-1  w-full flex justify-center items-center p-10 text-sm'> From small lots to large parking structures, we manage every aspect to ensure smooth operations.</div>
  </div>

  
</div>

<div className='h-10'></div>
        </div>

      </div>
    </div>
  )
}

export default Service
