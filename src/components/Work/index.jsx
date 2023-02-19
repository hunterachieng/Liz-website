import React from "react";
import WorkCases from "../../atoms/Work-Cases";
import voice from "../../images/work-images/voice.svg";
import prosper from "../../images/work-images/prosper.svg";
import masoko from "../../images/work-images/masoko.svg";
import automation from "../../images/work-images/automation.svg"
import {FaLongArrowAltDown} from "react-icons/fa";
import {NavLink as Link} from "react-router-dom";

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
    <>
      <div className="bg-icons px-40">
      <div className="items-start text-text w-1/3   text-justify mt-4 sm:ml-2 sm:w-full sm:text-left md:ml-20 md:w-10/12 md:text-left xsm:w-full xsm:ml-2">
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
      </div>
      <FaLongArrowAltDown className="m-auto text-3xl text-text"/>
      <div className="grid grid-cols-2 gap-4 mx-auto w-10/12 mt-5 sm:grid-cols-1 sm:mx-2 sm:w-11/12 sm:gap-2  xsm:grid-cols-1 xsm:mx-2 xsm:w-11/12 xsm:gap-2">
        {data.map(item=>
            <Link to={item.link}><WorkCases heading={item.heading} content={item.content} imageUrl={item.imageUrl} key={item.id} bgColor={item.backgroundColor}/></Link>)}
      </div>
      <br/>
    </>
  );
};
export default Work;
