import React from "react";
import { Link } from "react-router-dom";
import NavMenu from "./NavMenu"
import "./Scripts"

function Navbar(){
return (
    <>
        <div id="nav" className="w-full flex items-center font-['Acme'] z-50
        transition duration-300 ease-out justify-around bg-gray-500 h-[100px]">
            <div className="">
                <p className="text-yellow-50 text-[20px]" id='shop'><a href="/vite/">Samurai's Shop</a></p>
            </div>
            <div className=" h-[100px] w-[50px] right-0  top-0 absolute"  id="burger">
             <span className="w-6 h-[3px] rounded-md mt-10 absolute  bg-black "></span>
             <span className="w-6 h-[3px] rounded-md mt-12 m-auto absolute  bg-blue-800 "></span>
             <span className="w-6 h-[3px] rounded-md mt-14 m-auto absolute  bg-red-600 "></span>
            

                
            </div>
        
        </div>
        
    </>
)
}

export default  Navbar