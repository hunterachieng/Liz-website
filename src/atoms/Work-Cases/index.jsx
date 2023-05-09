import React from "react";
import {FaLongArrowAltRight} from "react-icons/fa"

const WorkCases = ({imageUrl,heading,content, bgColor})=>{
    return(
        <div className={`${bgColor}  items-center  p-5 max-h-max`}>
        <div className={`text-white  flex flex-col justify-centeritems-center text-left my-10 mx-24 sm:w-10/12 sm:mx-4 xsm:w-10/12 xsm:mx-4 md:w-10/12 md:mx-4`}>
            <h1 className="font-bold" >{heading}</h1>
            <br/>

            <p >{content}</p>
            <br/>
            <img src={imageUrl} alt="Case study images" className={`hover:scale-75 ease-in duration-500 ${imageUrl=== "/static/media/masoko.0fbc07b36a323cf48a0b8128120190f4.svg" ? " aspect-[4/3] max-h-72 md:aspect-[3/2] lg:aspect-[4/2]":" max-h-80 aspect-[2/2] md:aspect-[4/3] lg:aspect-[3/2] "}`}/>
            <br/>
           
            

        </div>
        </div>
    )
}
export default WorkCases;