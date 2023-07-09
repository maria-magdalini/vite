import React from "react";
import Products from "./Products";
import Carousel from "./Carousel";


function Hero(){



return (
    
    <>
        <div className="w-full bg-slate-500 h-full transition duration-500" id="hero">
            <Carousel/>
                <Products />
                   
        </div>
    </>
)
}

export default  Hero