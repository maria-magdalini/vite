import React from 'react'

function NavLinks() {
  return (
    <div className='flex flex-col w-full items-center gap-5 relative 
    '>
        <p className='text-[32px] mt-6  cursor-zoom-in text-blue-700'>Home</p>
        <p className='text-[32px] mt-6 cursor-zoom-in text-red-600'>About us</p>
        <p className='text-[32px] mt-6 cursor-zoom-in text-blue-700'>Location</p>
        <p className='text-[32px] mt-6 cursor-zoom-in text-red-600'>Terms of service</p>

        <button className='absolute before:content-[""] before:w-2 before:h-2 before:bg-blue-600
        before:absolute before:left-0 before:rounded-full before:animate-ping hover:before:animate-none
        hover:before:opacity-0
        bottom-[-150px] w-32 transition duration-100 rounded-xl px-3 ring-2 ring-pink-500 ring-inset
         hover:translate-y-1 hover:shadow-lg '>
            <h2 className='text-[32px] bg-gradient-to-r from-blue-700 to-red-600
             text-transparent  fill-transparent bg-clip-text '>Sign up</h2>
        </button>
    </div>
  )
}

export default NavLinks
