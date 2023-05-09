import React, {useEffect,useState} from "react";
import {NavLink as Link} from "react-router-dom";
import Footer from "../Footer";
import liz from "../../images/work-images/liz.png"; 

const colors = ["bg-personaFaith", "bg-yellow","bg-bgOrange", "bg-dark"]
const About = ()=>{

    const [value, setValue] = useState(0);
    const [isHovering, setIsHovering] = useState(false)

    const handleMouseOver = ()=>{
      setIsHovering(true);
    }
    const handleMouseOut = ()=>{
      setIsHovering(false)
    }

    useEffect(() => {
      const interval = setInterval(() => {
        setValue((v) => {
          return v === 3 ? 0 : v + 1;
        });
      }, 3000);
      return () => clearInterval(interval);
    }, []);
    return(
 <>
        <div className={`px-8 ${colors[value]} transition-all ease-in duration-1000 ${colors[value] === "bg-dark"? "text-white": "text-taskHeading "} flex flex-col h-screen sm:h-full md:h-full xsm:h-fit`}>
            
            <div className="w-full flex justify-between mt-5">
                <Link to="/">Work</Link>
                <a href="https://www.dropbox.com/s/64f51687txigid1/lizkagimbi%20Resume.pdf?dl=0">Resume</a>

            </div>
            <br/>
            <div className="mx-40 w-9/12 grid grid-cols-2 gap-2 sm:grid-cols-1 sm:w-full md:mx-2 md:w-full sm:mx-2 xsm:grid-cols-1 xsm:w-full xsm:mx-2">
                <div className="ml-30  pl-10 md:ml-10 md:pl-0">
                    <h1 className="text-5xl font-bold hover:cursor-pointer"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    >LIZ KAGIMBI</h1>
                    <br/>
                    <h1 className="text-4xl font-bold">Let&apos;s Connect</h1>
                    <br/>
                    <p><a href="mailto:Wangari.design@gmail.com">Email me</a></p>
                    <br/>
                    <p><a href="https://www.linkedin.com/in/elizabeth-wangari-2505a75a/" target="_blank">LinkedIn</a></p>
                    <br/>
                    {isHovering && (
                      <img src={liz} alt="Liz" width={250}/>

                    )}
                    
                </div>
                <div className=" w-12/12 md:w-full">
                    <p>I'm a Product Designer who focuses on user experience, visual craft, 
and product strategy. I have a background in Product Management, 
UX research, Marketing, and Advertising.
Now I work at AZA finance in Kenya, as a Senior Product Designer, directing a small team of designers to meet the diverse needs of our 
web3 platform constituents at AZA  (AZA finance formerly BFX, and Bitpesa, ) Graduated from Nairobits School with a Diploma in Digital 
Arts and Business. </p>
<br/>
<p>Previously, I worked at a startup Made by people, was part of the team that build raise.io MVP, and spearheaded efforts in creating equitable learning and data collection efforts by Warchild in South Sudan, 
Malakal. Before that, I spent 5 years in advertising working at 
WPP Scangroup ( Squad digital) and VMLY&R in the creative 
department.</p>
<br/>
<p>When I&apos;m not working, you can catch me running, reading, writing, 
and mentoring young girls venturing into tech through community initiatives.</p>
<br/>
<p>Won 2 loeries Awards that defined my career trajectory in 2015 
under the Safaricom brand for the best TV, Film & Video 
Communication, and Digital &amp; Interactive Communication categories under the Open Your Eyes Kenya awareness campaign.</p>
                </div>
            </div>
            <br/>
            <br/>
           
        </div>
        
         <Footer/>
 </>
    )
}
export default About;