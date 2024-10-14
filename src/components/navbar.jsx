import React from 'react'
import Logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <div>
        <div className='flex justify-center'>
        <div className='absolute w-[70%] top-14'>
      <header className="bg-[#2F3645]  rounded-full">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12">
        <a className="block text-teal-600" href="/">
          <span className="sr-only">Home</span>
          <img src={Logo} alt="" className='w-24 h-24'/>
        </a>
      </div>

      <div className="hidden md:block">
        <nav aria-label="Global">
          <ul className="flex items-center gap-12 ">
            
            <li>
              <a className="text-white transition hover:text-gray-500/75 " href="/aboutus"> About us </a>
            </li>

            <li>
              <a className="text-white transition hover:text-gray-500/75 " href="/services"> Services </a>
            </li>

            <li>
              <a className="text-white transition hover:text-gray-500/75 " href="/contactus"> Contact us </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <a
            className="rounded-full bg-[#939185] px-5 py-2.5 text-sm font-medium text-white shadow"
            href="/admin"
          >
            Admin
          </a>

          <div className="hidden sm:flex">
            <a
              className="rounded-full bg-[#939185] px-5 py-2.5 text-sm font-medium text-white"
              href="/user"
            >
              User
            </a>
          </div>
        </div>

        <div className="block md:hidden">
          <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</header>
    </div>
    </div>
    </div>
  )
}

export default Navbar
