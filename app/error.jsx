"use client";
import { useEffect } from "react";
const Error = ({error, reset}) => {
    useEffect(() => {
       console.log(error); 
    },[error])
    return (
        <div className="text-center  mt-12" >
           <h1 className="font-bold dark:text-red-400 text-black"> Error , something happend wronge...!
            please try it later</h1>
            <button className="hover:text-amber-600 transition-colors duration-300" onClick={()=>reset()} >Try Again</button>
        </div>
    );
}

export default Error;