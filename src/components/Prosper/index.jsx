import React from "react";
import Banner from "../../atoms/Banner";
import Layout from "../Layout";
import prosper from '../../images/work-images/prosper.svg';
import prosperTeam from "../../images/case-studies/the-team.svg"
import Brief from "../../atoms/Brief";

const ProsperCase = () =>{
    return(

        <>
<Banner 
heading="My Prosper App"
content="A case of bringing purpose through technology, expertise and mentorship during COVID 19 Pandemic"
link="#"
image={prosper}
imageAlt="Prosper Case study"
linkText="MyProsperApp"
bgColor="bg-cardPurple"
/>
<Brief
heading="The Ask"
content="We have been running this advisor program for a while now and it has gained way more traction than we originally thought. 
We would like to scale the ideas by building a platform that connects people looking for advisors with a pool of vetted advisors. Can you help us conceptualize design, and pilot the solution
"
image={prosperTeam}
imageAlt="Prosper Case Team"
/>
</>

    )
}
export default ProsperCase
