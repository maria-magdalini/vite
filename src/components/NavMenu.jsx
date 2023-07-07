import React from 'react'
import './Scripts'
import { Fragment,useState } from "react";
import { Transition } from "@headlessui/react";
import NavLinks from './NavLinks';
 


// burger.addEventListener('click',(setIsShowing)=>!setIsShowing)

function NavMenu({show, className}) {


  return (
    <>

      <div className='absolute  transition z-30 top-[100px] duration-1000 ease-in-out ' id='menuCnt' data-toogled=''>
        <Transition
        show={show}
        enter="transition-opacity  duration-350"
        enterFrom="opacity-0 top-[100%]"
        enterTo="opacity-100 "
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100 top-[100px]"
        leaveTo="opacity-0 top-[100%]">

          <div  className='w-full fixed  bg-white h-[100%] ' >
          <NavLinks />
          
          </div>
        </Transition>
      </div>
    </>
  )
}

export default NavMenu