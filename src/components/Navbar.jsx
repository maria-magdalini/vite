import React from "react";
import { Link } from "react-router-dom";
import NavMenu from "./NavMenu"
import { Fragment,useState } from "react";
import { Transition } from "@headlessui/react";
import "./Scripts"

function Navbar(){
    const [isShowing, setIsShowing] = useState(false);
    // let windowHeight = window.innerHeight || 
    // document.documentElement.clientHeight || document.body.clientHeight;

    // function slideMenu(oldClass, newClass, element){
    //     element.classList.remove(oldClass);
    //     element.classList.add(newClass)
    // }
    
    // const menu = document.getElementById('menuCnt')
    // const burger = document.getElementById('burger')
    // console.log(burger)
    // burger.addEventListener('click',() => setIsShowing(!isShowing));
    

       
    // })

return (
    <>
    <div id="nav" className="w-full flex items-center font-['Acme'] z-50
        transition duration-300 ease-out justify-around bg-gray-500 h-[100px]">
        

            <div className="">
                <p className="text-yellow-50 text-[20px]" id='shop'><a href="/vite/">Samurai's Shop</a></p>
            </div>
            <div className=" h-[100px] w-[50px] right-0  top-0 absolute"  id="burger" onClick={()=>{setIsShowing(!isShowing)
            console.log(isShowing)}}>
             <span className="w-6 h-[3px] rounded-md mt-10 absolute  bg-black "></span>
             <span className="w-6 h-[3px] rounded-md mt-12 m-auto absolute  bg-blue-800 "></span>
             <span className="w-6 h-[3px] rounded-md mt-14 m-auto absolute  bg-red-600 "></span>
            

                
            </div>
        {}
          
          <NavMenu 
          className="mt-1"
          show={isShowing}/>
        </div>
        
    </>
)
}

export default  Navbar