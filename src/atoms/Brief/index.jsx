import React from "react";

const Brief = ({heading, content, image, imageAlt}) =>{
    return(
        <div className="flex justify-between items-center px-8 py-10 `">
            <div className="w-9/12  ">
                <h1 className="text-orange font-bold text-2xl">{heading}</h1>
                <p className="text-text text-2xl py-10 w-3/5 leading-relaxed">{content}</p>

            </div>
          <img src={image} alt={imageAlt} className="w-2/4"/>
        </div>

    )
}
export default Brief;