import React from "react";
import advisor from "../../images/work-images/advisor.svg";
import advisee from "../../images/work-images/advisee.svg";
import eisen from "../../images/work-images/eisen.svg";
import userFlow from "../../images/work-images/user-flow.svg";
import sketches1 from "../../images/work-images/sketches1.svg";
import sketches2 from "../../images/work-images/sketches2.svg";
import sketches3 from "../../images/work-images/sketches3.svg";
import sketches4 from "../../images/work-images/sketches4.svg";
import sketches5 from "../../images/work-images/sketches5.svg";
import sketches6 from "../../images/work-images/sketches6.svg";
import sketches7 from "../../images/work-images/sketches7.svg";
import sketches8 from "../../images/work-images/sketches8.svg";
import plan from "../../images/work-images/plan.svg";
import insights from  "../../images/work-images/insights.svg";
import major from  "../../images/work-images/major.svg";
import connect from  "../../images/work-images/connect.svg"
import masoko from "../../images/work-images/masoko.svg";
import voice from "../../images/work-images/voice.svg";
import automation from "../../images/work-images/automation.svg"

const Process = ()=>{
    return(
        <div className="px-8">
            <h1 className="text-orange text-2xl font-bold">Our Process</h1>
            <h1 className="text-personaKamau text-2xl font-bold">Step 1: Task Mapping</h1>
            <p className="text-2xl text-icons w-3/6 py-2 sm:w-full xsm:w-full">Task mapping helped us assign tasks that will take advantage of each persona&apos;s 
            Wants and interests. We have seen an these interests evolve over time</p>
            <h1 className="text-taskHeading text-3xl font-bold"> Task Mapping - Advisee</h1>
            <br/>
            <div>
            <img src={advisor} alt="Advisor" className="w-screen"/>

            </div>
            <br/>
           <div>
           <h1 className="text-personaKamau text-2xl font-bold">Step 2: Decision Metrix</h1>
            <p className="text-2xl text-icons w-3/6 py-2 sm:w-full xsm:w-full">

            The Eisenhower Matrix helped us prioritise and manage the work load, We categorised these tasks according to their urgency and importance
            </p>
            <img src={eisen} alt="Eisen" className=""/>
           </div>
           <div>
           <h1 className="text-personaKamau text-2xl font-bold">Step 3: User Flow</h1>
            <p className="text-2xl text-icons w-3/6 py-2 sm:w-full xsm:w-full">

            We collaborated with the expert/stakeholder to create user flows to to present the correct information to users at the right time, and allow users to complete desired tasks in as few steps as possible.
Doing this exercise with stakeholders cemented trust and confidence in what we were building , everyone was in alignment which made the process move much quicker and effectively 
            </p>
            <br/>
            <h1 className="text-taskHeading text-xl font-bold">User flow: Advisee Journey</h1>
            <p className="text-2xl text-icons font-bold w-3/6 py-2 sm:w-full xsm:w-full">
            I am preparing for an interview later in the afternoon and I need to prep with an expert in the industry
            </p>
            <img src={userFlow} alt="User Flow" className="w-full"/>
           </div>
           <div>
           <h1 className="text-personaKamau text-2xl font-bold pt-2">Step 4: Sketches (Lo-fi wireframes)</h1>
            <p className="text-2xl text-icons w-3/6 py-4 sm:w-full xsm:w-full">

            We quickly did rough layout sketches of concept  to enable the  teams and project stakeholders to quickly 
            determine the best solutions for users. We did this exercise with engineers whereby they helped us navigate 
            the constrains in our capacity, we considered these barriers as risks for a quick launch and it also helped 
            prioritise the features to be built within the set timeframe
            </p>
            <div className="grid grid-cols-3">
            <img src={sketches1} alt="Sketches" className="w-10/12"/>
            <img src={sketches2} alt="Sketches" className="w-10/12"/>
            <img src={sketches3} alt="Sketches" className="w-10/12"/>
            <img src={sketches4} alt="Sketches" className="w-10/12"/>
            <img src={sketches5} alt="Sketches" className="w-10/12"/>
            <img src={sketches6} alt="Sketches" className="w-10/12"/>
            <img src={sketches7} alt="Sketches" className="w-10/12"/>
            <img src={sketches8} alt="Sketches" className="w-10/12"/>

            </div>
           </div>
           <div>
           <h1 className="text-personaKamau text-2xl font-bold pt-2">Step 5: Tests and iterations of the Lo-fi wireframes</h1>
           <h1 className="text-taskHeading text-xl font-bold">Plan and Insights</h1>
           <h1 className="text-personaKamau text-2xl font-bold pt-4 pb-2">PLAN</h1>
           <p className="text-2xl text-taskHeading w-3/6 py-2 sm:w-full xsm:w-full">
           5 participants industry experts, go through the wireframes and answer gauge their 
overall mental model
            </p>
            <hr className="w-1/2"/>
            <br/>
           <div className="grid grid-cols-2 sm:grid-cols-1 xsm:grid-cols-1">
             <div className="grid grid-cols-2 text-lg text-icons w-full sm:grid-cols-1 xsm:grid-cols-1">
                <div>
                    <p className="font-bold py-2">Things we were looking for</p>
                    <ul className="list-disc ml-4 italic">
                        <li>Can they easily find topic of interest and get triggered to sign up.</li>
                        <li>How much time can they offer for a session</li>
                        <li>Are they comfortable being on camera</li>
                        <li>How are their presentation skills</li>
                    </ul>
                </div>
                <div>
                    <p className="font-bold py-2">Insights</p>
                    <ul className="list-disc ml-4 italic">
                        <li>Users found the product worth signing up for</li>
                        <li>They also raised concerns about the authenticity of the advisee</li>
                        <li>They were only able to commit 1 hour of their day</li>
                        <li>Since this wasn't their primary work, they prefered having session during their lunch breaks</li>
                        <li>48% of the Advisee tested preferred having group sessions</li>
                    </ul>
                </div>
                <div>
                <p className="font-bold py-2">Barriers/Risks</p>
                    <ul className="list-disc ml-4 italic">
                        <li>Advisee wants advisor to be available on demand</li>
                        <li>Advisors found it a bit straining to their work schedule </li>
                        <li>The quality of video session wasn&apos;t guaranteed</li>
                    </ul>

                </div>
                <div>
                <p className="font-bold py-2">Mitigation</p>
                    <ul className="list-disc ml-4 italic">
                        <li>We introduced a payment feature where Advisee could pay a small fee for a session to guarantee commitment</li>
                        <li>We introduced a rating system where advisor&apos;s could be kept on toe to deliver meaningful, quality and relatable advise</li>
                        <li>On engineers advise on the quality of video, we decided to go with Agora for real time engagement</li>
                    </ul>
                </div>
            </div>
            <img src={plan} alt="Plan" className="ml-24 w-9/12 sm:ml-2 md:ml-2 sm:w-full md:w-full"/>
            
           </div>

          
           </div>
           <h1 className="text-personaKamau text-2xl font-bold pt-2">Insights</h1>
    <div className="grid grid-cols-2 sm:grid-cols-1 xsm:grid-cols-1 gap-6">
    <div >
           <p className="font-bold py-2">Learning</p>
                    <ul className="list-disc ml-4 ">
                        <li>Spend more time understanding the needs of the users</li>
                        <li>Understand that the more you iterate and test the more aware you are on the cognitive bias 
                            using abbreviations could be viewed as inappropriate or distract from the intent of the product, Experts in different fields 
                            have different ways of abbreviating
                        </li>
                        <li>Trust the process, it will work out at the end</li>
                        <li>Work with different stakeholders to get a different perspective and move quicker</li>
                        
                    </ul>
           </div>
           <div>
           <p className="font-bold py-2">Next Steps</p>
                    <ul className="list-disc ml-4 ">
                        <li>Continue to iterate the prototypes based on data gathered from different testing stages</li>
                        <li>Understand that the more you iterate and test the more aware you are on cognitive bias using 
                            abbreviations could be viewed as inappropriate or distract from the intent of the product, Experts in different
                            fields have different ways of abbreviating 
                        </li>
                        <li>Trust the process, it will work out at the end</li>
                        <li>Work with different stakeholders to get a different perspective and move quicker</li>
                    </ul>
           </div>
    </div>
    <br/>
    <img src={insights} alt="Insights" className="w-screen"/>
    <br/>
    <h1 className="text-orange text-2xl font-bold">Major Screens</h1>
    <br/>
    <img src={major} alt="Major Screens" className="w-screen"/>
    <br/>
    <div className="w-full bg-connect flex items-center justify-center flex-col">
    <img src={connect} alt="Letus Connect" className="mx-auto pt-10" />
    <button className="border border-darkBlue py-2 px-4 text-darkBlue mx-auto mb-10">Contact me</button>
    <br/>
    <br/>
    </div>
    <br/>

    <div className="flex items-center justify-center">
    <button className="border bg-darkBlue py-2 px-4 text-white underline font-bold">View next casestudy</button>
    <button className="border border-darkBlue py-2 px-10 text-darkBlue underline font-bold ml-2">Resume</button>
    </div>
    <br/>

    <h1 className="text-personaKamau text-2xl font-bold pt-2 text-center">View More</h1>
    <br/>
         <div className="grid grid-cols-3 gap-8 sm:grid-cols-1 xsm:grid-cols-1 ">
           <div className="bg-cardPink flex items-center justify-center flex-col ">
            {/* <br/> */}
            <a href="" className="underline text-white text-lg font-bold">Masoko Vendor Platform</a>
            <br/>
           <img src={masoko} alt="Masoko" className=""/>
           </div>
           <div className="bg-cardGreen flex items-center justify-center flex-col "> 
           <br/>
           <a href="" className="underline text-white text-lg font-bold">My Voice</a>
           <br/>
           <img src={voice} alt="Voice"/>
           </div>
           <div className="bg-cardBlue flex items-center justify-center flex-col ">
           <a href="" className="underline text-white text-lg font-bold">AZA Finance Automation</a>
           <br/>
           <img src={automation} alt="AZA" />
           </div>
            </div> 

        </div>
    )
}
export default Process;