import React from "react";
import PersonaData from "../../atoms/PersonaData";
import PersonaBanner from "../../atoms/Persona";

const Persona = ({
  image,
  imageAlt,
  name,
  role,
  age,
  location,
  education,
  descriptionData,
  behavior,
  pains,
  goals,
  bgColor,
  textColor
}) => {
  return (
    <div className="flex px-20 py-10 sm:flex-col xsm:flex-col">
      <PersonaBanner
        image={image}
        imageAlt={imageAlt}
        name={name}
        role={role}
        age={age}
        location={location}
        education={education}
        bgColor={bgColor}
        textColor={textColor}
      />
      <PersonaData
        descriptionData={descriptionData}
        behavior={behavior}
        pains={pains}
        goals={goals}
      />
    </div>
  );
};
export default Persona;
