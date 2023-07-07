import React,{useState, useEffect} from "react";
import { json } from "react-router-dom";

import Modal from "./Modal";


function Products(){
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true);


  const products = async()=>{
   try{
    const res = await fetch("https://fakestoreapi.com/products")
    const json = await res.json();
    setData(json)
    setIsLoading(false)
    console.log(json, res.status)
   } catch {
    console.error()
    
   }
   
  
}  

products
  return (
      
        <>
        
        
        <div className="h-full flex flex-col justify-center items-center gap-10">
        <button className="w-max h-max p-2 mt-10 bg-slate-50 rounded-md font-['Acme']" onClick={products}>Show Products</button>
        { (isLoading) ? <div className="w-10 h-10 animate-spin justify-center
        flex items-center hue-rotate-0 bg-fuchsia-200 m-auto rounded-full"></div>
        
        :( 
        <div className=" w-full">
          <div className="h-3/4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data.map((data)=>( 
              <div className="w-72 mt-4 p-2 bg-white h-96 mx-auto rounded-md" key={data.id}>
              <h2 className="font-['Acme'] text-center">{data.title}</h2>
              <div className="w-full h-2/4 relative">
                <img src={data.image} className="mt-4 mx-auto h-full object-fill"></img>
                <div className="flex flex-1 flex-col ">
                  <span className="absolute top-0 left-[-25px] text-[13px] p-1 bg-green-400 rounded-sm text-white font-['Helvetica] font-semibold">{data.category}</span>
                  <h3>Price: {data.price}</h3>
                  <div className="flex flex-col">
                    <span>Sales: {data.rating.count}</span>
                    <span>Rating: {data.rating.rate}</span>
                    <Modal data={data}/>
                  </div>
                  <div className=" text-black w-full">
                 
                    
                  </div>
                
                  

                </div>
              </div>

              </div>
        ))}
          </div>
          
          
        </div> )
        }

        
      </div>
        </>
    )
}
export default Products