import React from 'react'
import Image from "../../assets/Wallet.png"
import T from "../../assets/time.png"
import Tu from "../../assets/Thumb Up.png"


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
                <img src={Image} className='w-14 h-14 m-10 '/>
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
            <img src={T} className='w-14 h-14 m-12 '/>
            </div>
            <div className='flex justify-center items-center flex-col mr-3'>
                <div className='text-xl font-semibold self-start'>Save Time</div>
                <div>It’s easy to compare parking at all major airports. Booking a reservation is quick & simple!</div>
            </div>
          </div>

          <div
           
           className="bg-[#EEEDEB] rounded-lg shadow-md p-4 transition-transform transform hover:scale-105 flex "
         >
           <div className='flex justify-center items-center'>
           <img src={Tu} className='w-14 h-14 m-12 '/>
           </div>
           <div className='flex justify-center items-center flex-col mr-3'>
               <div className='text-xl font-semibold self-start'>Save stress</div>
               <div>Guarantee your parking spot by booking in advance. Can’t make it? Cancellations are free.</div>
           </div>
         </div>
       
      </div>
    </div>

      </div>
    </div>
  )
}

export default Cards
