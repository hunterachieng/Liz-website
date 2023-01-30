import React from "react";

const Banner = ({heading, content, link,linkText, image,imageAlt, bgColor})=>{
    return(
        <div className={`flex ${bgColor} justify-between items-center px-24 py-20`}>
            <div className="text-white w-1/3">
                <h1 className="text-3xl font-bold">{heading}</h1>
                <p className="text-2xl py-10">{content}</p>
                <a href={link} className="text-xl underline">{linkText}</a>
            </div>
            {/* <div className="border w-8/12"> */}
                <img src={image} alt={imageAlt} className="w-5/12"/>
            {/* </div> */}
        </div>  

    )
}
export default Banner;