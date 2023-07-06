import React from "react";
import { Link } from "react-router-dom";
import NavbarMenu from "./NavbarMenu"

function Navbar(){
return (
    <>
        <div id="nav" className="w-full flex items-center 
        transition duration-300 ease-out justify-around bg-gray-500 h-[100px]">
            <div className=" bg-black ">
                <p className="text-yellow-50">Hello World</p>
            </div>
            <div className=" bg-gray-400" onClick={(e)=> this.classList.add("bg-blue")}>
             <ul>
              <li key='1'>
               <a href="/" >Link</a>
              </li>
             </ul>

                
            </div>
        
        </div>
        <NavbarMenu />
    </>
)
}

export default  Navbar