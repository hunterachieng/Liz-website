import React from "react";
import WorkCases from "../../atoms/Work-Cases";
import voice from "../../images/work-images/voice.svg";
import prosper from "../../images/work-images/prosper.svg";
import masoko from "../../images/work-images/masoko.svg";
import automation from "../../images/work-images/automation.svg"
import {FaLongArrowAltDown} from "react-icons/fa";
const Work = () => {
  const data = [
    {
        id:1,
      heading: "AZA Finance Automation",
      content: "Simplifying Onboarding Journey using Open source API",
      imageUrl: automation,
      backgroundColor:"bg-cardBlue"
    },
    {
        id:2,
      heading: "Masoko Vendor Platform",
      content:
        "How might we design the Masoko Vendorplatform to enable merchants to sell their products and services with ease?",
      imageUrl: masoko,
      backgroundColor:"bg-cardPink"
    },
    {
        id:3,
        heading:"My prosper App",
        content:"A case of bring purpose through technology, expertise and mentorship during COVID 19 Pandemic",
        imageUrl:prosper,
        backgroundColor:"bg-cardPurple"
    },
    {
        id:4,
        heading:"My Voice",
        content:"Designing for marginalized communities with low literacy (written and spoken) using simple relatable visuals",
        imageUrl:voice,
        backgroundColor:"bg-cardGreen"
    }
  ];
  return (
    <div>
      <div className="items-start text-text w-1/3 ml-80  text-justify mt-4 sm:ml-2 sm:w-full sm:text-left md:ml-20 md:w-10/12 md:text-left xsm:w-full xsm:ml-2">
        <h1 className="text-3xl font-bold sm:text-2xl xsm:text-xl">Product Designer & Researcher</h1>
        <p className="text-2xl sm:text-lg leading-10 xsm:text-lg xsm:w-11/12 xsm:leading-7">
          I believe every experience is an opportunity to understand ourselves
          better, I am a Product Designer and Researcher based in Nairobi, Kenya
        </p>
        <br />
        <br/>
        <p className="text-2xl sm:text-lg xsm:text-lg xsm:w-11/12">
          Currently designing for impact and Empowering girls venture into tech
        </p>
        <br />

        <button className="text-white bg-darkBlue px-8 py-2 items-center rounded font-bold">
          Resume
        </button>
      </div>
      <FaLongArrowAltDown className="m-auto text-3xl text-text"/>
      <div className="grid grid-cols-2 gap-4 mx-auto w-10/12 mt-5 sm:grid-cols-1 sm:mx-2 sm:w-11/12 sm:gap-2  xsm:grid-cols-1 xsm:mx-2 xsm:w-11/12 xsm:gap-2">
        {data.map(item=>
            <WorkCases heading={item.heading} content={item.content} imageUrl={item.imageUrl} key={item.id} bgColor={item.backgroundColor}/>)}
      </div>
    </div>
  );
};
export default Work;
