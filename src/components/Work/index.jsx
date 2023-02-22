import React from "react";
import WorkCases from "../../atoms/Work-Cases";
import voice from "../../images/work-images/voice.svg";
import prosper from "../../images/work-images/prosper.svg";
import masoko from "../../images/work-images/masoko.svg";
import automation from "../../images/work-images/automation.svg";
import cat from "../../images/work-images/cat.svg";
import me from "../../images/work-images/about-me.svg";
import {NavLink as Link} from "react-router-dom";
import Footer from "../Footer";
import { FaLinkedinIn, FaFigma } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
import {MdOutlinePets} from "react-icons/md"

const Work = () => {
  const data = [
    {
        id:1,
      heading: "AZA Finance Automation",
      content: "Simplifying Onboarding Journey using Open source API",
      imageUrl: automation,
      backgroundColor:"bg-cardBlue",
      link:"/aza-case"
    },
    {
        id:2,
      heading: "Masoko Vendor Platform",
      content:
        "How might we design the Masoko Vendorplatform to enable merchants to sell their products and services with ease?",
      imageUrl: masoko,
      backgroundColor:"bg-cardPink",
      link:"/masoko-case"
    },
    {
        id:3,
        heading:"My prosper App",
        content:"A case of bring purpose through technology, expertise and mentorship during COVID 19 Pandemic",
        imageUrl:prosper,
        backgroundColor:"bg-cardPurple",
        link:"/prosper-case"
        
    },
    {
        id:4,
        heading:"My Voice",
        content:"Designing for marginalized communities with low literacy (written and spoken) using simple relatable visuals",
        imageUrl:voice,
        backgroundColor:"bg-cardGreen",
        link:"/voice-case"
    }
  ];
  return (
    <div className="sm:bg-dark xsm:bg-dark sm:pl-4 xsm:pl-2" >
      <div className="bg-dark px-40 w-full mt-0 grid grid-cols-3 gap-4 sm:grid-cols-1 sm:px-2 xsm:grid-cols-1 xsm:px-2">
      <div className="items-start text-text text-justify mt-4 sm:ml-2 sm:w-full sm:text-left md:ml-12 md:w-10/12 md:text-left xsm:w-full xsm:ml-2">
        <h1 className="text-3xl text-personaFaith font-bold sm:text-2xl xsm:text-xl">LIZ KAGIMBI</h1>
        <br/>
        <h1 className="font-bold text-white">Product Designer &amp; Researcher</h1>
        <br/>
        <p className="text-white">
          I believe every experience is an opportunity to understand ourselves
          better, I am a Product Designer and Researcher based in Nairobi, Kenya
        </p>
        <br />
        <br/>
        <p className=" text-white">
          Currently designing for impact and Empowering girls venture into tech
        </p>
        <br />

        <button className="text-white border border-darkBlue px-8 py-2 items-center rounded font-bold">
         Let&apos;s Connect
        </button>
      </div>
      <img src={cat} alt="Cat" className="sm:hidden xsm:hidden"/>
      <div className="sm:hidden xsm:hidden" >
        <div className="flex justify-between w-1/2 mt-3 md:w-full">
          <Link to="/" className={({isActive})=>(isActive? "text-personaFaith":"text-white")}>Work</Link>
          <p><Link to="/about" className={({isActive})=>(isActive? "text-personaFaith":"text-white")}>More Info</Link></p>
        </div>
<br/>
      <img src={me} alt="Liz" />
      <br/>
      <p className="text-white">Small small things <Link to="/about">About me</Link></p>
      <br/>
      <div className="flex justify-between  mt-2 w-1/4 md:w-1/2">
        <BsMedium className="bg-yellow p-1 text-personaFaith  text-2xl rounded-full m-1" />
        <FaLinkedinIn className="bg-yellow p-1 text-personaFaith text-2xl rounded-full m-1" />
        <FaFigma className="bg-yellow p-1 text-personaFaith  text-2xl rounded-full m-1" />
      </div>
      </div>
      </div>
      
      <MdOutlinePets className="m-auto text-3xl text-text rotate-180 sm:text-white sm:mt-2 xsm:text-white xsm:mt-2"/>
      <div className="grid grid-cols-2 gap-4 mx-auto w-10/12 mt-5 sm:grid-cols-1 sm:mx-2 sm:w-11/12 sm:gap-2  xsm:grid-cols-1 xsm:mx-2 xsm:w-11/12 xsm:gap-2">
        {data.map(item=>
            <Link to={item.link}><WorkCases heading={item.heading} content={item.content} imageUrl={item.imageUrl} key={item.id} bgColor={item.backgroundColor}/></Link>)}
      </div>
      <br/>
      <Footer/>
    </div>
  );
};
export default Work;
