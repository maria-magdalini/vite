import React from "react";



function Some(){
return (
    <>
        <div className="w-full  h-[200px] flex-col items-center  font-['Acme']">
            <div className="flex-row justify-between gap-4 ml-7" >
                <h2 className="shadow-orange-50 
                   text-[32px] ">Find Your Katana</h2>
                <h3>Now</h3>
            </div>
            
            <div className="bg-white w-[300px] h-60 mx-auto mt-7 ">
                <img className="bg-transparent rounded-md object-contain w-full h-full" src='src/components/katana.png' alt="katana"/> 
            </div>
        </div>
    </>
)
}

export default  Some