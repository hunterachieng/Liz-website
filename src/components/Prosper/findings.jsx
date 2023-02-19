import React from "react";
import findings from  "../../images/work-images/findings.svg";

const ResearchFindings  = ()=>{
    return(
        <div className="grid grid-cols-2 gap-4 px-20 sm:grid-cols-1 xsm:grid-cols-1">
            <div>
                <h1 className="text-orange text-2xl font-bold">Workshop and Desktop Research Findings</h1>
                <p className="text-2xl text-icons w-4/5 pt-2 leading-relaxed sm:w-full xsm:w-full">Despite the significant adoption of smart phone in Kenya, 
                    mobile apps download and usage is still significantly low. 
                    As a result, building a native mobile app would nor be the best 
                    way to develop the first version of Myprosper. Instead, 
                    building a mobile first site is a better approach. </p>
            </div>
            <img src={findings} alt="Research Findings" className="w-10/12 sm:w-full xsm:w-full"/>

        </div>
    )
}
export default ResearchFindings