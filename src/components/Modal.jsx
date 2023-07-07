import React,{Fragment, useState}  from 'react'
import { Transition } from '@headlessui/react';
function Modal({data}) {
    const [isShowing, setIsShowing] = useState(false);
    const {id, title,descrisption} = data

    function setState(){
      (isShowing) ? setIsShowing(false) : setIsShowing(true)
    }
  
  return (
    <>
    <div className="flex flex-col items-center ">
    <button onClick={setState}>
    Show More
    </button>
        <Transition as='Fragment'
        show={isShowing}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        >
        <div className='absolute top-0 bg-slate-400 text-sm z-10
        rounded-md shadow-2xl w-full left-0 h-max p-6 text-white'>{data.description}
        <div className=''>
           <button className='font-["Acme"] absolute right-2 top-1 text-white' onClick={setState}>X</button>
        </div>
        </div>
        
    </Transition>
    </div>
  </>
  )
}

export default Modal