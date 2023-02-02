import React from "react";
import button from "../../images/work-images/button.svg"

const PersonaData = ({descriptionData,behavior,pains,goals})=>{
    return(
        <div className=" py-10 w-9/12 ml-10 sm:ml-1 sm:w-10/12 xsm:w-10/12 xsm:ml-1">
           <img src={button} alt="Persona Button"/>
            
            <h1 className="text-xl pt-2"><b>Description</b></h1>
            <p className=" leading-loose">{descriptionData}</p>
            <hr/>
            <div className="grid grid-cols-2 px-8 md:grid-cols-1 sm:grid-cols-1 sm:px-2 xsm:grid-cols-1 xsm:px-2">
                <div className="pt-5">
                    <h3 ><b>Behavior Traits</b></h3>
                    <ol className="list-disc italic">
                        {behavior.map(item=>
                            <li>{item.data}</li>)}
                    </ol>
                </div>
                <div className="py-5">
                    <h3><b>Goals and Needs</b></h3>
                    <ul className="list-disc italic">
                        {goals.map(item=>
                            <li>{item.data}</li>)}
                    </ul>
                </div>
                <div className="py-5">
                    <h3><b>Pains and Gains</b></h3>
                    <ul className="list-disc pt-5 italic">
                        {pains.map(item=>
                            <li>{item.data}</li>)}
                    </ul>
                </div>  
            </div>
            <hr/>
        </div>
    )
}
export default PersonaData;