import React from "react";
import Banner from "../../atoms/Banner";
import Layout from "../Layout";
import prosper from "../../images/work-images/prosper.svg";
import faith from "../../images/work-images/faith.svg";
import kamau from "../../images/work-images/kamau.svg";
import prosperTeam from "../../images/case-studies/the-team.svg";
import Brief from "../../atoms/Brief";
import Persona from "../Persona";
import ResearchFindings from "./findings";
import Process from "./process";

const ProsperCase = () => {
  const behavior = [
    {
      id: "1",
      data: "Loves giving back to the community",
    },
    { id: "2", data: "Reads and writes about strategy and growth" },
    { id: "3", data: "Loves sharing her Career experiences" },
    {
      id: "4",
      data: "Enjoy spending time with her family",
    },
  ];

  const goals = [
    {
      id: "1",
      data: "Spend her time helping othersas they navigate through remote work",
    },
    { id: "2", data: "Spare head industrial conversation" },
    { id: "3", data: "Empowering the community through technology" },
  ];
  const pains = [
    {
      id: "1",
      data: "Find purpose and inspire generations after her",
    },
    { id: "2", data: "Keep up with her industry development" },
    {
      id: "3",
      data: "Way of sharing her vast knowledge without sacrificing her family time",
    },
  ];

  const behavior2 = [
    {
      id: "1",
      data: "Reads motivational and personal growth books",
    },
    { id: "2", data: "Enjoys some time with friends after work" },
    { id: "3", data: "Loves road trips and adventures" },
    {
      id: "4",
      data: "Uses his spare time watching educational videos",
    },
  ];

  const goals2 = [
    {
      id: "1",
      data: "Get a promotion and a salary increment",
    },
    { id: "2", data: "Give time to further his studies" },
    { id: "3", data: "Keep up with the current industry trends" },
    { id: "4", data: "Win a national product award" },
    { id: "5", data: "Wants to settle and have kids at some point" },
    { id: "6", data: "Own a business" },
  ];
  const pains2 = [
    {
      id: "1",
      data: "Finding time to balance career and family is hard",
    },
    { id: "2", data: "Find a meaningful and well paying job" },
    {
      id: "3",
      data: "Difficult navigating through his career ambitions and family obligations",
    },
  ];
  return (
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

      <Persona
        image={faith}
        imageAlt="Faith Persona"
        name="Faith"
        role="Country Manager"
        age="39"
        location="Kenya, Nairobi"
        education="MBA"
        descriptionData="Faith is a transformation and influential leader and professional in Fintech in the region with over 10 years of experience. She is the go-to- leader and subject-matter-expert for positive transformation of businesses and the people with digital revolution at the core of it.
 Faith currently works for one of the leading Fintech and payments companies in Africa; Cellulant, as the Country Manager."
        behavior={behavior}
        pains={pains}
        goals={goals}
        bgColor="bg-personaFaith"
        textColor="text-bannerText"
      />
            <Persona
        image={kamau}
        imageAlt="Kamau Persona"
        name="Kamau"
        role="Associate Product Strategist"
        age="26"
        location="Kenya, Nairobi"
        education="Bachelor's Degree"
        descriptionData="Experienced Business Development Leader with expertise in Strategy, 
        Innovation & Operations across multiple sectors. Develop customer experience platforms, that use cloud computing to enable customers to give real-time structured feedback to businesses and organisations. "
        behavior={behavior2}
        pains={pains2}
        goals={goals2}
        bgColor="bg-personaKamau"
        textColor="text-personaFaith"
      />
      <ResearchFindings/>
      <Process/>
    </>
  );
};
export default ProsperCase;
