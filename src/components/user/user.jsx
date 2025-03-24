import React from 'react'
import { useNavigate } from 'react-router-dom';
import Image from "../../assets/carillustration.svg"
import Image2 from "../../assets/carillustration2.svg"

const Userpage = () => {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate('/usersignin');
  };

  const handleLogInClick = () => {
    navigate('/userlogin');
  };
  return (
    <div className='overflow-x-hidden'>
      <div className='h-[100vh] w-full '>
     
        <div className='h-full w-full justify-center flex items-center overflow-y-hidden z-20'>
            <div className='min-w-96 border-2 border-black min-h-[400px] rounded-xl justify-center flex items-center flex-col mt-20'>
                <div className='mb-12 text-3xl font-semibold'>User</div>
             <button
              onClick={handleLogInClick}
              className='bg-[#2F3645] w-[80%] text-white py-2 rounded-lg text-center mb-8'
            >
              Login
            </button>
                <button
              onClick={handleSignInClick}
              className='bg-[#2F3645] w-[80%] text-white py-2 rounded-lg text-center'
            >
              Sign In
            </button>
                
            </div>
        </div>
        <img src={Image} alt="" className='absolute bottom-0 left-0 -translate-x-1/2 z-10'/>
      <img src={Image2} alt="" className='absolute bottom-0 right-0'/>
         </div>
    </div>
  )
}

export default Userpage
