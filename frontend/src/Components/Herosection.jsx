
import React, { useEffect, useRef, useState } from "react";
import logo from '../assets/imgs/logo.png'


const Herosection = () => {
  const name = "Alumini Connect.";
  const [title, setTitle] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const textRef = useRef(null);
  useEffect(() => {
    if (title.length <= name.length ) {
      const timeout = setTimeout(() => {
        setTitle(name.slice(0, title.length + 1)); // Add the next character
      }, 100);

      return () => clearTimeout(timeout); // Clean up timeout to avoid memory leaks
    }else{
        setIsComplete(true);
    }
  }, [title, name]);
const handleButtonClick = () => {
    
}

  return (
    <div className="w-full h-[100vh] flex flex-col justify-center  items-center  bg-black text-wrap  inset-0  bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] gap-4">
        <img src={logo} alt="logo" className='mix-blend-screen top-[2%] left-[12%] absolute' />
        {/* <div className="flex justify-center items-center text-wrap flex-wrap gap-3"> */}
        <h1
          ref={textRef} // Attach the ref to the text element
          className="
             
            text-5xl font-bold text-transparent bg-clip-text 
            bg-gradient-to-r from-white via-red-50 to-red-200
            drop-shadow-[0_0_5px_rgba(255,255,255,0.6)]
            drop-shadow-[0_0_10px_rgba(255,0,255,0.5)]
            drop-shadow-[0_0_20px_rgba(255,0,255,0.4)] 

          "
        >
          {title}
       </h1>
       
       <p className="text-white text-lg  transition-all ease-in delay-75 opacity-1 text-wrap  animate-pulse mt-1">
       Stay Connected, Stay Inspired, Your Alumni Network Awaits!  Reconnect, Revive, and Thrive - Join Our Alumni Network Today!
      </p>
      <div className="flex gap-2 w-full justify-center">
      <input type="email" name="email"  className="bg-slate-900 p-4 w-[50%] rounded-md text-white border-none outline-none" placeholder="Email Address"/>
      <button type="submit" className="text-black bg-white  p-4 h-full  w-[20%] rounded-md">Get Started &gt; </button>
      </div>
      
     
        </div>
       
       
       
       
      //  </div>
   
  );
};

export default Herosection;