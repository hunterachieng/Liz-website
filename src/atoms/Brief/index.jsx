import React from "react";

const Brief = ({heading, content, image, imageAlt}) =>{
    return(
        <div className="grid grid-cols-2 gap-4 px-8 py-10 sm:grid-cols-1 xsm:grid-cols-1">
            <div >
                <h1 className="text-orange font-bold text-2xl">{heading}</h1>
                <p className="text-text text-2xl py-10  w-5/6 leading-relaxed md:w-full sm:w-full xsm:w-full">{content}</p>

            </div>
          <img src={image} alt={imageAlt} className="w-8/12 ml-10 sm:w-10/12 sm:ml-0 md:w-10/12 xsm:ml-0"/>
        </div>

    )
}
export default Brief;