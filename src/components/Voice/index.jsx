import React, {useEffect} from "react";
import Layout from "../Layout";
import Banner from "../../atoms/Banner";
import voice from "../../images/work-images/voice.svg";
import voiceTeam from "../../images/case-studies/voice-team.svg";
import voiceUsers from "../../images/work-images/voice-users.svg";
import fun from "../../images/work-images/fun.svg";
import interview from "../../images/work-images/interview.svg";
import designThinking from "../../images/work-images/design-thinking.svg";
import pains from "../../images/work-images/pains.svg";
import unique from "../../images/work-images/unique-features.svg";
import recommendations from "../../images/work-images/recommendations.svg";
import testFindings from "../../images/work-images/test-findings.svg";
import connect from  "../../images/work-images/connect.svg";
import masoko from "../../images/work-images/masoko.svg";
import automation from "../../images/work-images/automation.svg";
import prosper from "../../images/work-images/prosper.svg";
import {NavLink as Link} from "react-router-dom";

const Voice = () => {

  // useEffect(() => {
  //   window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  // }, []);

  return (
    <Layout>
           <div
        className={`grid grid-cols-2 gap-4 bg-cardGreen px-24 py-20 sm:grid-cols-1 sm:px-8 xsm:grid-cols-1 xsm:px-4`}
      >
        <div className=" w-5/6 text-white mt-14 sm:w-full sm:mt-4 md:mt-2 xsm:mt-2">
          <h1 className="text-3xl font-bold ">
          My Voice
          </h1>
          <p className="text-2xl py-10 text-white">
          Designing for marginalized communities with low literacy (written and spoken) using simple relatable visuals
          </p>
          <a href="#" className="text-xl underline ">
          Warchild/Sudan
          </a>
        </div>
        <img src={voice} alt="Voice Case" className="w-7/12 ml-5 sm:w-screen sm:ml-0" />
      </div>
      <div className="grid grid-cols-2 gap-4 px-20 py-10 sm:grid-cols-1 xsm:grid-cols-1 sm:px-5 xsm:px-5">
        <div>
          <h1 className="text-orange font-bold text-2xl">The Ask</h1>
          <p className="text-taskHeading py-5 w-10/12  ">
            War Child Holland has a number of projects in South Sudan focusing
            on psychosocial support to war-affected children in what they call
            child-safe spaces. One of the innovation projects is looking at
            improving feedback in these child-safe spaces. Children and women in
            these communities suffer and need to identify and report offences
            against them as soon as they are spotted.
          </p>
          <h1 className="text-orange font-bold text-2xl">Design Challenge</h1>

          <p className="text-taskHeading py-5  ">
            How might we design a tool that improves the feedback process in
            WarChild Holland child-safe spaces
          </p>
        </div>
        <img
          src={voiceTeam}
          alt="Voice Team"
          className="w-3/6  ml-20 sm:w-10/12 sm:ml-0 md:w-10/12 xsm:ml-0"
        />
      </div>
      <div className="grid grid-cols-2 gap-4 px-20 py-10 sm:grid-cols-1 xsm:grid-cols-1 sm:px-5 xsm:px-5">
        <div>
          <h1 className="text-orange font-bold text-2xl">
            Objectives &amp; Goals
          </h1>
          <ul className="text-taskHeading list-decimal py-5 ml-5  ">
            <li>
              To support WarChild Holland int their efforts to providing
              psychological safety to war affected children
            </li>
            <li>
              Educate the community volunteers who help run the programs in
              Malakal on how to collect feedback in an easy and intuitive way
            </li>
            <li>
              {" "}
              Automate how WarChild Holland collects children data that meets
              child protection guidelines
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-orange font-bold text-2xl">
            Organisation Challanges
          </h1>
          <ul className="text-taskHeading list-decimal py-5 ml-5  ">
            <li>
              Key volunteers are unable to use available tools for reporting
            </li>
            <li>
              Lack of stable and reliable internet hinders warchild from
              delivering help on time
            </li>
            <li>
              {" "}
              Lack of a unified database that is intuitive and supports
              volunteers in Malakal to meet their needs
            </li>
            <li>
              An accountability learning tool that will allow people to learn
              and get encouraged to give feedback
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-grey">
        <div className="grid grid-cols-2 gap-4 px-20 py-10 sm:grid-cols-1 xsm:grid-cols-1 sm:px-5 xsm:px-5">
          <div>
            <h1 className="text-taskHeading font-bold text-2xl">App Users</h1>
            <p className="text-taskHeading py-5 w-10/12  ">
              The target demographic are Children affected by war in Malakal ,
              South Sudan, who reside in child-safe spaces provided by Warchild
            </p>
            <h1 className="text-taskHeading font-bold text-2xl">
              Feedback Tool Users
            </h1>

            <p className="text-taskHeading py-5  ">
              The target audience are war child Volunteers living in Malakal,
              South sudan
              <span className="font-normal">
                with low literacy (written and spoken) levels and use Juba
                Arabic as their main language
              </span>
            </p>
          </div>
          <img
            src={voiceUsers}
            alt="Voice Users"
            className="w-9/12  ml-20 sm:w-10/12 sm:ml-0 md:w-10/12 xsm:ml-0"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 px-20 py-10 sm:grid-cols-1 xsm:grid-cols-1 sm:px-5 xsm:px-5">
        <div>
          <h1 className="text-taskHeading font-bold text-2xl">
            Research Methodology
          </h1>
          <p className="text-taskHeading py-5 w-10/12  ">
            We conducted various activities to help us gain insights and
            understand the inherent needs in giving and receiving feedback
          </p>
        </div>
        <div>
          <h1 className="text-taskHeading font-bold text-2xl">Observations</h1>

          <p className="text-taskHeading py-5  ">
            Designing for marginalised communities with low literacy (written
            and spoken) levels and a different language requires a significant
            shift in terms of the thought process. Shorter testing and feedback
            sessions will help you uncover usability and usefulness challenges
            early on
          </p>
        </div>
      </div>
      <div className="px-20 py-10 sm:px-5 xsm:px-5">
        <div className="text-center">
          <h1 className="text-orange font-bold text-2xl">The Process</h1>
          <br />
          <h1 className="text-taskHeading font-bold text-2xl">
            To resolve user needs
          </h1>
        </div>
        <br />
        <div className="grid grid-cols-3 gap-4 place-items-center  sm:grid-cols-1 xsm:grid-cols-1">
          <img src={fun} alt="Fun sketches" />
          <img src={interview} alt="Interview Sessions" />
          <img src={designThinking} alt="Design Thinking" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 px-20 py-10 sm:grid-cols-1 xsm:grid-cols-1 sm:px-5 xsm:px-5">
        <div>
          <h1 className="text-orange font-bold text-2xl">
            User Needs and Painpoints
          </h1>
          <ul className="ml-5 list-decimal leading-loose  ">
            <li>Children to feel safe in the child-safe facilities</li>
            <li>
              Volunteers to get basic understanding of both the psychological
              and social needs of children and families affected by war
            </li>
            <li>
              Reduce the impact of the mental health treatment gap in South
              Sudan especially in rural communities
            </li>
            <li>
              Facilitators living outside POC often have to walk a long diatance
              each day to get to the CFC (Child Friendly Centers)
            </li>
            <li>Lack of energy sources within CFC centers</li>
            <li>Poor network coverage inhibits communication</li>
            <li>
              Find ways to measure the efforts and resources required to fully
              support psychosocial effort in rural communities
            </li>
          </ul>
        </div>
        <img
          src={pains}
          alt="Needs and Painpoints"
          className="w-9/12  ml-20 sm:w-10/12 sm:ml-0 md:w-10/12 xsm:ml-0"
        />
      </div>
      <div className="bg-grey">
        <div className="grid grid-cols-2 gap-4 px-20 py-10 sm:grid-cols-1 xsm:grid-cols-1 sm:px-5 xsm:px-5">
          <div className="leading-loose">
            <h1 className="text-orange font-bold text-2xl">
              My Voice Unique Features
            </h1>
            <ul className="ml-5 list-decimal leading-loose  ">
              <li>
                Feedback tool- get feedback from children who are part of the
                program
              </li>
              <li>
                Learning tool- teach the community volunteers who help run the
                programs in Malakal in an easy and intuitive manner
              </li>
              <li>
                Attendance register-automate how they collect data on attendance
              </li>
              <li>Supporting continued development and adoption of the tool</li>
            </ul>
          </div>
          <img
            src={unique}
            alt="Unique Features"
            className="w-9/12  ml-20 sm:w-10/12 sm:ml-0 md:w-10/12 xsm:ml-0"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 px-20 py-10 sm:grid-cols-1 xsm:grid-cols-1 sm:px-5 xsm:px-5">
        <div className="leading-loose">
          <h1 className="text-orange font-bold text-2xl">Recommendations</h1>
          <h1 className="text-personaFaith font-semibold">
            Smiley-based application for the children
          </h1>
          <p className="text-taskHeading py-5  ">
            We sketched out different symbol-reactions with the children we
            spoke to in order to concisely capture what resonated best among the
            different children at the CFS center. Thumbs down and sad face to
            express dissatisfaction.
          </p>
          <h1 className="text-personaFaith font-semibold">Features:</h1>
          <br />
          <ol className="ml-5 text-taskHeading font-semibold list-decimal">
            <li>Simple symbols feature for children</li>
            <li>Written feedback feature for the facilitators</li>
          </ol>
          <h1 className="text-personaFaith font-semibold">
            Android-based feedback tool for facilitators and community workers
          </h1>
          <p className="text-taskHeading py-5  ">
            An android-based feedback platform that will allow for anonymity in
            incidences where the user prefers to remain anonymous. Due to the
            poor internet connection at the CFS centers, the application should
            be able to work offline, storing data locally and then synching
            online when there&apos;s an internet connection.
          </p>
          <h1 className="text-personaFaith font-semibold ">Features:</h1>
          <br />
          <ol className="ml-5 text-taskHeading font-bold list-decimal ">
            <li>
              Feedback tool that allows for anonymous submission of reports
            </li>
            <li>Ability to work offline</li>
          </ol>
          <br/>
          <h1 className="text-personaFaith font-semibold">
            Giving feedback through symbols as a learning tool
          </h1>
          <p className="text-taskHeading py-5  ">
            In order for the feedback tool to provide a seamless experience for
            the child protection committee and community volunteers who often
            report violations against children, it is essential that we bridge
            the gap in literacy that is common with this group of users. This
            can be done through mediums they are familiar with that will allow
            them to give concise feedback without having to get a secondary
            party to aid with translation. The use of symbols creates synergy
            among the different Arabic dialects and local language speakers. The
            use of symbols also provides the unique opportunity to educate CPC
            members in basic literacy, which could be later on leveraged to
            provide more sophisticated ways of learning such as reading, in
            future versions.
          </p>
          <h1 className="text-personaFaith font-semibold">Features:</h1>
          <br />
          <ol className="ml-5 text-taskHeading font-bold list-decimal">
            <li>
              Symbols depicting different situations. E.g a symbol that shows
              "sexual abuse of children" with a "button" to report
            </li>
            <li>
              Offline component to allow the app to work in low connectivity
              areas
            </li>
          </ol>
          <h1 className="text-personaFaith font-semibold">
            Dashboard Analysis
          </h1>
          <p className="text-taskHeading py-5  ">
            To stay abreast with what is happening at the CFS center, WCH staff
            will be able to view feedback from the children, staff and other
            project beneficiaries from a single dashboard. The dashboard will
            provide a visual analysis of the feedback received from the CFS
            centers as well as the ability view and download the raw data into
            CSV for further analysis.
          </p>
          <h1 className="text-personaFaith font-semibold pb-5">Features:</h1>
          
          <ol className="ml-5 text-taskHeading font-bold list-decimal">
            <li>
            Visual analysis of the feedback received from children and other beneficiaries as well as staff
            </li>
            <li>
            Ability to view feedback in its raw form
            </li>
            <li>Ability to export the data into a CSV</li>
          </ol>
        </div>
        <img
            src={recommendations}
            alt="Recommendations"
            className="w-9/12  ml-20 sm:w-10/12 sm:ml-0 md:w-10/12 xsm:ml-0"
          />
      </div>
      <img
            src={testFindings}
            alt="Test Findings"
            className="w-full"
          />
           <div className="w-full bg-connect flex items-center justify-center flex-col">
    <img src={connect} alt="Letus Connect" className="mx-auto pt-10" />
    <button className="border border-darkBlue py-2 px-4 text-darkBlue mx-auto mb-10"><a href="mailto:Wangari.design@gmail.com">Contact me</a></button>
    <br/>
    <br/>
    </div>
    <br/>
    <div className="flex items-center justify-center">
    <button className="border bg-darkBlue py-2 px-4 text-white font-bold" ><Link to="/case/aza-case">View next casestudy</Link></button>
    <button className="border border-darkBlue py-2 px-10 text-darkBlue font-bold ml-2">Resume</button>
    </div>
    <br/>

    <h1 className="text-personaKamau text-2xl font-bold pt-2 text-center">View More</h1>
    <br/>
         <div className="grid grid-cols-3 gap-8 px-20 sm:grid-cols-1 xsm:grid-cols-1 sm:px-5 xsm:px-5">
         <div className="bg-cardPink flex items-center justify-center flex-col ">
         <Link to="/case/masoko-case">
          {/* <br/> */}
          <p className=" text-white text-lg text-center font-bold">
            Masoko Vendor Platform
          </p>
          <br />
          <img src={masoko} alt="Masoko" className="" />
          </Link>
        </div>
           <div className="bg-cardBlue flex items-center justify-center flex-col ">
           <Link to="/case/aza-case" >
           <p className=" text-white text-lg text-center font-bold">AZA Finance Automation</p>
           <br/>
           <img src={automation} alt="AZA" />
           </Link>
           </div>
           <div className="bg-cardPurple flex items-center justify-center flex-col "><Link to="/case/prosper-case">
            {/* <br/> */}
            <p className=" text-white text-lg text-center font-bold">My prosper App</p>
            <br/>
           <img src={prosper} alt="Prosper" className=""/>
           </Link>
           </div>
            </div> 
            <br/>
            
    </Layout>
  );
};
export default Voice;
