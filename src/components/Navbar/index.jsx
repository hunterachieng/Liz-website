/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

import { FaLinkedinIn, FaFigma, FaTimes } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
import logo from "../../images/logo/logo-liz.svg";
import smallLogo from "../../images/logo/Lizkagimbi.svg"
import {NavLink as Link} from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="flex justify-between flex-wrap  sm:bg-orange xsm:bg-orange">
      <div className="pt-2 ml-8">
        <Link to="/"><img src={logo} alt="Liz logo" className="sm:hidden xsm:hidden " /></Link>
        <Link to="/"><img src={smallLogo} alt="Liz small logo"
        className="pt-5 lg:hidden md:hidden"
        /></Link>
      </div>
      <button
        onClick={handleClick}
        className=" hidden inline-flex p-3 hover:bg-orange rounded sm:inline-flex lg:hidden md:hidden text-[#ffffff] ml-auto hover:text-white outline-none m-2"
      >
      {!active?   <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg> : <FaTimes className="text-2xl font-light"/> }
      </button>

      <div
        className={` flex justify-evenly  
                items-center  
                text-taskHeading
                font-bold 
                w-1/3 
                sm:hidden
                xsm:hidden
              
                `
            }
      > 
      {/* Fix the padding in the a tags 
      Fix active links
      */}
        <Link to="/" className={({isActive})=>(isActive? "text-darkBlue hover:text-gray-300":"text-taskHeading hover:text-gray-300")}  >Work</Link>
        <Link to="/about" className={({isActive})=>(isActive? "text-darkBlue hover:text-gray-300":"text-taskHeading hover:text-gray-300")} >About</Link>
        <Link to="/resume" className={({isActive})=>(isActive? "text-darkBlue hover:text-gray-300":"text-taskHeading hover:text-gray-300")} >Resume</Link>
        <a href="mailto:Wangari.design@gmail.com" className={({isActive})=>(isActive? "text-darkBlue hover:text-gray-300 ":"text-taskHeading hover:text-gray-300")} >Contacts</a>
      </div>
      <div
        className={`${
            active? ` flex   
            text-white 
            font-bold 
            flex-col
            h-screen
          bg-orange
            w-full
            item-start
            text-2xl
            font-bold
            pl-7                                     
            ` : "hidden"
          }`
            }
      >
        {/* className={({isActive})=>(isActive? "text-text":"text-white")} */}
        <Link to="/" className={({isActive})=>(isActive? "text-darkBlue hover:text-gray-300 ":"text-white hover:text-gray-300")}  >Work</Link>
        <Link to="/about" className={({isActive})=>(isActive? "text-darkBlue hover:text-gray-300":"text-white hover:text-gray-300")} >About</Link>
        <Link to="/resume" className={({isActive})=>(isActive? "text-darkBlue hover:text-gray-300":"text-white hover:text-gray-300")} >Resume</Link>
        <a href="mailto:Wangari.design@gmail.com" className={({isActive})=>(isActive? "text-darkBlue hover:text-gray-300":"text-white hover:text-gray-300")} >Contacts</a>
      </div>

      <div
        className={` flex  justify-center items-center   space-x-2 w-1/6 sm:hidden xsm:hidden`}
      >
        {/* <BsMedium className="bg-icons p-1 text-white text-2xl rounded-full" />
        <FaLinkedinIn className="bg-icons p-1 text-white text-2xl rounded-full" />
        <FaFigma className="bg-icons p-1 text-white text-2xl rounded-full" /> */}
      </div>
      {/* ${
          active === false ? "" : "hidden"
        } */}
    </nav>
  );
};

export default Navbar;
