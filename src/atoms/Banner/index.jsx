import React from "react";

const Banner = ({heading, content, link,linkText, image,imageAlt, bgColor})=>{
    return(
        <div className={`grid grid-cols-2 gap-4 ${bgColor}  px-24 py-20 sm:grid-cols-1 sm:px-8 xsm:grid-cols-1 xsm:px-4`}>
            <div className="text-white w-5/6 mt-14 sm:w-full sm:mt-4 md:mt-2 xsm:mt-2">
                <h1 className="text-3xl font-bold">{heading}</h1>
                <p className="text-2xl py-10">{content}</p>
                <a href={link} className="text-xl underline">{linkText}</a>
            </div>
            {/* <div className="border w-8/12"> */}
                <img src={image} alt={imageAlt} className="w-10/12 sm:w-screen"/>
            {/* </div> */}
        </div>  

    )
}
export default Banner;