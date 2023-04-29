import React, {useEffect} from "react";
import Layout from "../Layout";
import automation from "../../images/work-images/automation.svg";
import aza from "../../images/case-studies/aza-team.svg";
import discover from "../../images/work-images/discover.svg";
import define from "../../images/work-images/define.svg";
import ideate from "../../images/work-images/ideate.svg";
import design from "../../images/work-images/design.svg";
import productUser from "../../images/work-images/product-user.svg";
import bitstamp from "../../images/work-images/bitstamp.svg";
import azimo from "../../images/work-images/azimo.svg";
import userPersona from "../../images/work-images/user-persona.svg";
import Maslow from "../../images/work-images/maslow-pyramid.svg";
import quote from "../../images/work-images/quote.svg";
import task from "../../images/work-images/task-mapping.svg";
import eisen from "../../images/work-images/eisen-matrix.svg";
import why from "../../images/work-images/why.svg";
import rca from "../../images/work-images/rca.svg";
import taskflow from "../../images/work-images/taskflow.svg";
import taskflow2 from "../../images/work-images/taskflow2.svg";
import screens from "../../images/work-images/major-screens.svg";
import connect from "../../images/work-images/connect.svg";
import voice from "../../images/work-images/voice.svg";
import masoko from "../../images/work-images/masoko.svg";
import prosper from "../../images/work-images/prosper.svg";
import document from "../../images/work-images/document.svg";
import wallet from "../../images/work-images/wallet.svg";
import api from "../../images/work-images/api.svg";
import { NavLink as Link } from "react-router-dom";

const AzaCase = () => {
  // useEffect(() => {
  //   window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  // }, []);
  return (
    <Layout>
      <div
        className={`grid grid-cols-2 gap-4 bg-cardBlue px-24 py-20 sm:grid-cols-1 sm:px-8 xsm:grid-cols-1 xsm:px-4`}
      >
        <div className=" w-5/6 mt-14 sm:w-full sm:mt-4 md:mt-2 xsm:mt-2">
          <h1 className="text-3xl font-bold text-personaFaith">
            AZA Finance Onboarding
          </h1>
          <p className="text-2xl py-10 text-white">
            Simplifying Onboarding Journey using Open Source API
          </p>
          <a href="#" className="text-xl underline text-personaFaith">
            AZA finance
          </a>
        </div>
        <img src={automation} alt="Aza Case" className="w-10/12 sm:w-screen" />
      </div>
      <div className="grid grid-cols-2 gap-4 px-20 py-10 sm:grid-cols-1 xsm:grid-cols-1 sm:px-5 xsm:px-5">
        <div>
          <h1 className="text-orange font-bold text-2xl">The Ask</h1>
          <p className="text-taskHeading py-5">
            Can users understand and complete the AZA onboarding journey unaided
          </p>
          <h1 className="text-orange font-bold text-2xl">
            Objectives &amp; Goals
          </h1>
          <ul className="text-taskHeading ml-5 py-5 list-decimal ">
            <li>
              To get customers to sign up for the correct product for their
              requirements
            </li>
            <li>
              To reduce the dependency on AZA staff to guide users through the
              journey
            </li>
          </ul>
          <h1 className="text-orange font-bold text-2xl">
            Business Challenges
          </h1>
          <ul className="text-taskHeading ml-5 py-5 list-decimal ">
            <li>
              Difficult and time-consuming to make changes across our current
              journeys.
            </li>
            <li>No sign-up journey for API customers</li>
            <li>
              AZA Finance Rebranding and adding more products under her wing
            </li>
            <li>Large internal intervention to onboard clients</li>
          </ul>
        </div>
        <img
          src={aza}
          alt="Masoko Case"
          className="w-3/6  ml-20 sm:w-10/12 sm:ml-0 md:w-10/12 xsm:ml-0"
        />
      </div>
      <div>
        <h1 className="text-personaFaith font-bold text-2xl text-center">
          Our Process
        </h1>
        <br />
        <br />
        <div className="grid grid-cols-4 mx-5 place-items-center sm:grid-cols-1 xsm:grid-cols-1">
          <img src={discover} alt="Discover Process" />
          <img src={define} alt="Define Process" />
          <img src={ideate} alt="Ideate Process" />
          <img src={design} alt="Design Process" />
        </div>
      </div>
      <br />
      <br />
      <img src={productUser} alt="Product User" className="w-full" />
      <div className="px-20 sm:px-5 xsm:px-5">
        <h1 className="text-orange font-bold text-2xl">
          Quantitative Research
        </h1>
        <p className="text-taskHeading py-5  ">
          We conducted a remote usability test with 6 users who fall in our
          target demographic
        </p>
        <h1 className="text-orange font-bold text-2xl">Observations</h1>
        <div className="grid grid-cols-2 gap-4 px-20 py-5 w-9/12 sm:grid-cols-1 xsm:grid-cols-1 sm:px-5 xsm:px-5">
          <div>
            <h1 className="text-personaFaith text-3xl">80%</h1>
            <p className="text-taskHeading py-5  ">
              Of the users face difficulties when uploading documents during
              onboarding
            </p>
          </div>
          <div>
            <h1 className="text-personaFaith text-3xl">50%</h1>
            <p className="text-taskHeading py-5  ">
              Of user take more than 72 hours onboarding on the AZA platform
            </p>
          </div>
          <div>
            <h1 className="text-personaFaith text-3xl">300k</h1>
            <p className="text-taskHeading py-5  ">
              Lost in revenue by business every month when users are unable to
              convert to paying customer
            </p>
          </div>
          <div>
            <h1 className="text-personaFaith text-3xl">60%</h1>
            <p className="text-taskHeading py-5  ">
              Of internal onboarding stuff and Engineers lost helping users and
              fixing onboarding issues on the platform respectively
            </p>
          </div>
        </div>
      </div>
      <div className="px-20 sm:px-5 xsm:px-5">
        <h1 className="text-orange font-bold text-2xl">User Needs</h1>
        <ul className="text-taskHeading ml-5 py-5 list-decimal   ">
          <li>
            Get a reliable partner with scale who can support with navigating
            regulations
          </li>
          <li>
            Quick fullfilment of trade to profit from arbitrage through speedy
            withdrawals into bank accounts{" "}
          </li>
          <li>
            Ensure their buisness operations accross all branches run smoothly
            for which they need consistent access to liquidity
          </li>
          <li>
            Be seen as trustworthy int he market that needs proper documentation
            such as transactions history for annual reports
          </li>
        </ul>
      </div>
      <div className="bg-[#F6FAFE66] py-5">
        <h1 className="text-orange font-bold text-2xl text-center">
          Features and Personalities
        </h1>
        <h1 className="text-personaFaith font-bold text-2xl text-center">
          To resolve user needs
        </h1>
        <br />
        <br />
        <div className="grid grid-cols-3 mx-5 place-items-center sm:grid-cols-1 xsm:grid-cols-1">
          <img src={api} alt="API Integration" />
          <img src={document} alt="Document Verification" />
          <img src={wallet} alt="Secure Wallet" />
        </div>
      </div>
      <br />
      <div className="px-20 sm:px-5 xsm:px-5">
        <h1 className="text-orange font-bold text-2xl">
          Product User Challenges
        </h1>
        <ul className="text-taskHeading ml-5 py-5 list-decimal   ">
          <li>
            Documents irregularities. Some customers upload documents that are
            not up to standards
          </li>
          <li>
            Long onboarding process. Cutomers take more than 5 days onboarding
            to the platform{" "}
          </li>
          <li>Slow decision making for interal teams on potential clients</li>
        </ul>
      </div>
      <br />
      <div className="px-20 sm:px-5 xsm:px-5">
        <h1 className="text-orange font-bold text-2xl">Competitor Analysis</h1>
        <div className="grid grid-cols-2 gap-4 py-10 w-9/12 sm:grid-cols-1 xsm:grid-cols-1">
          <div>
            <img src={azimo} alt="Azimo" />
            <p className="text-taskHeading py-5  ">
              Azimo offers money transfers to 190 receiving countries in over 80
              different currencies
            </p>
            <p className="text-personaFaith py-5  ">Features</p>
            <ul className="text-taskHeading ml-5 py-5 list-decimal  ">
              <li>
                Uses the same security levels as banks-so is safe and secure.
              </li>
              <li>
                Azimo businesses can send up to 250,000 GBP or equivalent in a
                single transfer with no monthly limits{" "}
              </li>
            </ul>
          </div>
          <div>
            <img src={bitstamp} alt="Bitstamp" />
            <p className="text-taskHeading py-5  ">
              Bitstamp makes trading easy, fast &amp; reliable with 24/7
              support, staking and bank-grade security &amp; insurance.
            </p>
            <p className="text-personaFaith py-5  ">Features</p>
            <ul className="text-taskHeading ml-5 py-5 list-decimal  ">
              <li>Identify and verify feature</li>
              <li>Multiple users account access </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-grey ">
        <div className="px-20 sm:px-5 xsm:px-5">
          <h1 className="text-orange font-bold text-2xl pt-5">
            AZA Onboarding Unique Features
          </h1>
          <ul className="text-taskHeading ml-5 py-5 list-decimal   ">
            <li>
              Users can have access to all AZA trading products with a single
              sign on
            </li>
            <li>Increase operational efficiency for internal teams</li>
            <li>
              {" "}
              Open corporates API integration to make the onboarding process
              faster and accurate
            </li>
          </ul>
        </div>
      </div>
      <br />
      <img src={userPersona} alt="User Persona" className="px-20 sm:px-5 xsm:px-5" />
      <div className="grid grid-cols-2 gap-2 py-10 px-20  sm:grid-cols-1 xsm:grid-cols-1 sm:px-5 xsm:px-5">
        <div>
          <h1 className="text-personaFaith font-bold text-2xl ">Description</h1>
          <p className="text-taskHeading py-5 w-10/12  ">
            Toby is the CFO of an import and export company, who is a workaholic
            and often spends late nights in the office. He is ambitious,
            rigorous, faithful, inquisitive, and hardworking, decicated to both
            his family and his job. He always has his phone on him.
          </p>
          <img src={Maslow} alt="Maslow Pyramid" />
        </div>
        <div>
          <h1 className="text-personaFaith font-bold text-2xl ">
            Customer Journey
          </h1>
          <br />
          <h1 className="text-personaFaith text-2xl ">Awareness</h1>
          <p className="text-taskHeading py-5  ">
            Ask network, internal financial or Sales teams, or through industry
            events.
          </p>
          <h1 className="text-personaFaith text-2xl ">Consideration</h1>
          <p className="text-taskHeading py-5  ">
            He will ask friends, partners, agents, his network if they are
            familiar with a company, check for client testimonials. This aspect
            of familiarity and trust is very important for him.
          </p>
          <h1 className="text-personaFaith text-2xl ">Decision</h1>
          <p className="text-taskHeading py-5  ">
            He will base his final decision on the feedback received from his
            network, particularly the experiences of the partners he trusts.
          </p>
          <h1 className="text-personaFaith text-2xl ">Barriers</h1>
          <ul className="text-taskHeading ml-5 py-5 list-disc  ">
            <li>Paying suppliers in foreign currencies</li>
            <li>Getting liquidity at a good rate to make a margin</li>
            <li>
              Slow payment process, that will delay the shipment of his goods{" "}
            </li>
            <li>Regulation and documents to be provided</li>
            <li>Needs to physically go to the bank to make a transaction</li>
          </ul>
          <img src={quote} alt="User Quote" />
        </div>
      </div>
      <br />
      <div className="px-20 sm:px-5 xsm:px-5">
        <h1 className="text-orange text-2xl  font-bold">Task Mappping</h1>
        <br />

        <img src={task} alt="Task Mapping" className="w-full" />
      </div>
      <br />
      <div className="px-20 sm:px-5 xsm:px-5">
        <h1 className="text-orange text-2xl  font-bold">Eisen Hover Matrix</h1>
        <br />

        <img src={eisen} alt="Eisen Hover Matrix" />
      </div>
      <br />
      <div className="px-20 sm:px-5 xsm:px-5">
        <h1 className="text-orange text-2xl  font-bold">5 Why Analysis</h1>
        <br />

        <img src={why} alt="Why Analysis" className="w-full" />
      </div>
      <br />
      <div className="px-20 sm:px-5 xsm:px-5">
        <h1 className="text-orange text-2xl  font-bold">
          Root Cause Analysis (RCA)
        </h1>
        <br />

        <img src={rca} alt="Root Cause Analysis" />
      </div>
      <br />
      <img src={taskflow} alt="TaskFlow" className="px-20 sm:px-5 xsm:px-5" />
      <br />
      <img src={taskflow2} alt="TaskFlow" className="px-20 sm:px-5 xsm:px-5" />
      <br />
      <img src={screens} alt="Screens" className="px-20 m-auto sm:px-5 xsm:px-5" />
      <div className="w-full bg-connect flex items-center justify-center flex-col">
        <img src={connect} alt="Letus Connect" className="mx-auto pt-10" />
        <button className="border border-darkBlue py-2 px-4 text-darkBlue mx-auto mb-10">
        <a href="mailto:Wangari.design@gmail.com">Contact me</a>
        </button>
        <br />
        <br />
      </div>
      <br />
      <div className="flex items-center justify-center">
        <button className="border bg-darkBlue py-2 px-4 text-white  font-bold">
          <Link to="/masoko-case"> View next casestudy</Link>
        </button>
        <button className="border border-darkBlue py-2 px-10 text-darkBlue  font-bold ml-2">
          Resume
        </button>
      </div>
      <br />

      <h1 className="text-personaKamau text-2xl font-bold pt-2 text-center">
        View More
      </h1>
      <br />
      <div className="grid grid-cols-3 px-20 gap-8 sm:grid-cols-1 xsm:grid-cols-1 sm:px-5 xsm:px-5">
        <div className="bg-cardPink flex items-center justify-center flex-col ">
          <Link to="/case/masoko-case">
            <p className=" text-white text-center text-lg font-bold">
              Masoko Vendor Platform
            </p>
            <br />
            <img src={masoko} alt="Masoko" className="" />
          </Link>
        </div>

        <div className="bg-cardGreen flex items-center justify-center flex-col ">
          <Link to="/case/voice-case"

          >
            <br />
            <p className=" text-white text-lg text-center font-bold">My Voice</p>
            <br />
            <img src={voice} alt="Voice" />
          </Link>
        </div>

        <div className="bg-cardPurple flex items-center justify-center flex-col ">
          <Link to="/case/prosper-case">
            <p className=" text-white text-lg text-center font-bold">
              My prosper App
            </p>
            <br />
            <img src={prosper} alt="Prosper" className="" />
          </Link>
        </div>
      </div>
      <br />

      {/* <br/> */}
    </Layout>
  );
};
export default AzaCase;
