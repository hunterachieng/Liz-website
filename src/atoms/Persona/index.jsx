import React from "react";
import {
  FaBirthdayCake,
  FaMapMarkerAlt,
  FaUserGraduate,
  FaBriefcase,
} from "react-icons/fa";

const PersonaBanner = ({
  image,
  imageAlt,
  name,
  role,
  age,
  location,
  education,
  bgColor,
  textColor
}) => {
  return (
    <div className={`flex flex-col border justify-center w-3/12 ${bgColor} md:w-10/12 sm:w-11/12 xsm:w-11/12`}>
      <img src={image} alt={imageAlt} className="mx-auto mt-10" />
      <div className="mx-auto">
        <h2 className={`font-bold text-2xl ${textColor}`}>{name}</h2>
        <p className="text-white text-lg">{role}</p>
      </div>
      <div className="px-14 pt-4 xsm:px-4">
        <h1 className={`font-bold text-2xl ${textColor}`}>About</h1>
        <div className="text-white">
          <div className="grid grid-cols-2 gap-0 w-full py-2">
            <div className="flex">
              {" "}
              <FaBirthdayCake />
              <p className="pl-2">{age}</p>
            </div>
            <div className="flex ">
              <FaMapMarkerAlt />
              <p className="pl-2">{location}</p>
            </div>
          </div>
          <br/>
          <div className="grid grid-cols-2 gap-0 w-full ">
            <div className="flex ">
              <FaUserGraduate />
              <p className="pl-2">{education}</p>
            </div>
            <div className="flex ">
               
              <FaBriefcase />
              <p className="pl-2">
              {role}
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PersonaBanner;
