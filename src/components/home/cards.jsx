import React from 'react'
import Image from "../../assets/react.svg"

const Cards = () => {
  return (
    <div>
      <div className='w-full min-h-[300px] bg-white flex justify-center items-center'>

        

      <div className="container mx-auto p-4">
     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 mx-20">
     
          <div
           
            className="bg-[#EEEDEB] rounded-lg shadow-md p-4 transition-transform transform hover:scale-105 flex "
          >
            <div className='flex justify-center items-center'>
                <img src={Image} className='w-10 h-10 m-8'/>
            </div>
            <div className='flex justify-center items-center flex-col mr-3'>
                <div className='text-xl font-semibold self-start'>Save Money</div>
                <div>Save up to 70% on our site compared to the cost of on-airport parking.</div>
            </div>
          </div>

          <div
           
            className="bg-[#EEEDEB] rounded-lg shadow-md p-4 transition-transform transform hover:scale-105 flex "
          >
            <div className='flex justify-center items-center'>
                <div className='w-10 h-10 bg-slate-500 m-8'></div>
            </div>
            <div className='flex justify-center items-center flex-col mr-3'>
                <div className='text-xl font-semibold self-start'>Save Money</div>
                <div>Save up to 70% on our site compared to the cost of on-airport parking.</div>
            </div>
          </div>

          <div
           
           className="bg-[#EEEDEB] rounded-lg shadow-md p-4 transition-transform transform hover:scale-105 flex "
         >
           <div className='flex justify-center items-center'>
               <div className='w-10 h-10 bg-slate-500 m-8'></div>
           </div>
           <div className='flex justify-center items-center flex-col mr-3'>
               <div className='text-xl font-semibold self-start'>Save Money</div>
               <div>Save up to 70% on our site compared to the cost of on-airport parking.</div>
           </div>
         </div>
       
      </div>
    </div>

      </div>
    </div>
  )
}

export default Cards
