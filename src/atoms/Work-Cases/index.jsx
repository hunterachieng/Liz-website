import React from "react";
import {FaLongArrowAltRight} from "react-icons/fa"

const WorkCases = ({imageUrl,heading,content, bgColor})=>{
    return(
        <div className={`${bgColor}  items-center`}>
        <div className={`text-white  flex flex-col justify-center items-center text-left my-10 mx-24 sm:w-10/12 sm:mx-4 xsm:w-10/12 xsm:mx-4 md:w-10/12 md:mx-4`}>
            <h1 className="font-bold" >{heading}</h1>
            <br/>
            <p >{content}</p>
            <img src={imageUrl} alt="Case study images" />
           
            

        </div>
        </div>
    )
}
export default WorkCases;