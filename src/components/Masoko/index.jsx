import React from "react";
import Layout from "../Layout";
import Banner from "../../atoms/Banner";
import masoko from "../../images/work-images/masoko.svg";
import team from "../../images/case-studies/masoko-case.svg";
import challenge from "../../images/work-images/masoko-challenge.svg";
import listing from "../../images/work-images/masoko-product-listing.svg"
import journey from "../../images/work-images/masoko-vendor-journey.svg";
import signIn from "../../images/work-images/masoko-sign-in.svg";
import singleProduct from "../../images/work-images/masoko-single-product.svg";
import productDetails from "../../images/work-images/product-masoko-details.svg";

const Masoko = () => {
  return (
    <Layout>
      <Banner
        heading="Masoko Vendor Platform"
        content="Masoko is an e commerce platform that its focus is mainly to serve customers over Safaricom (largest telecommunication company in Kenya) expansive reach, The Platform primary goal was and remains to serve local customers and by extension,
            Africa with a model that does not replicate its
            rivals' trade in other continents."
        link="Masoko platform"
        linkText="Masoko Platform"
        image={masoko}
        imageAlt="Masoko Case"
        bgColor="bg-cardPink"
      />
      <div className="grid grid-cols-2 gap-4 px-8 py-10 sm:grid-cols-1 xsm:grid-cols-1">
        <div>
          <h1 className="text-orange font-bold text-2xl">The Research</h1>
          <ul className="text-text  py-10 ml-5 w-5/6 leading-loose list-disc md:w-full sm:w-full xsm:w-full">
            <li>
              Two UX researchers together with a representative from the Masoko
              vendor platform interviewed 12 participants over 3 days
            </li>
            <li>
              The vendors interviewed sell products from 3 main categories, i.e
              Electronics, Phones & Accessories and Home Appliances
            </li>
            <li>
              The main research methods used were one-on-one interviews using an
              interview script, conversation starters around e-commerce and
              observation to identify body language and other adaptations
              venders use to sell their products
            </li>
          </ul>
        </div>
        <img
          src={team}
          alt="Masoko Case"
          className="w-3/6  ml-20 sm:w-10/12 sm:ml-0 md:w-10/12 xsm:ml-0"
        />
      </div>
      <div className="grid grid-cols-2 gap-4 px-8 py-10 sm:grid-cols-1 xsm:grid-cols-1">
        <div>
          <h1 className="text-orange font-bold text-2xl">
            The Design Challenge
          </h1>
          <p className="text-darkBlue py-5">
            How might we design the Masoko Vendor platform to enable merchants
            to sell their products and services with ease?
          </p>
          <h2 className="font-bold text-darkBlue">Research Objective</h2>
          <ul className="text-text  py-2 ml-5 w-5/6 leading-loose list-decimal md:w-full sm:w-full xsm:w-full">
            <li>To understand the user journey of the Masoko vendor</li>
            <li>
              To identify vendor's pain points when it comes to the use of the
              vendor platform
            </li>
            <li>
              To understand the technological capabilities of a small to medium
              sized vendor when it comes to the use of e-commerce platforms
            </li>
          </ul>
        </div>
        <img
          src={challenge}
          alt="Masoko Challenge"
          className="w-9/12  ml-20 sm:w-10/12 sm:ml-0 md:w-10/12 xsm:ml-0"
        />
      </div>
      <br />
      <h1 className="text-orange font-bold text-2xl px-8">Findings</h1>
      <br />
      <div className="grid grid-cols-2 gap-4 px-8 py-10 sm:grid-cols-1 xsm:grid-cols-1">
        <div className="w-11/12">
          <h1 className="text-darkBlue  text-xl">Onboarding</h1>
          <p className="text-text pt-5">
            The onboarding process was the least mentioned problem among the
            vendors interviewed with many saying that they received proper
            support when joining Masoko. However, the following concerns were
            mentioned by some vendors:
          </p>
          <br />

          <ul className="text-text  py-2 ml-5 w-5/6 leading-loose list-decimal md:w-full sm:w-full xsm:w-full">
            <li>
              Onboarding on Masoko took much longer theon on other platforms.
              Vendors mentioned taking ~2 days on a competitor platform as
              opposed to ~2 weeks with Masoko.
            </li>
            <li>
              Vendors felt that they were required to share too many supporting
              documents in order to be onboarded on the Masoko platform, unlike
              with other e-commerce sites
            </li>
            <li>
              Most of the onboarding process required a human touch point with
              the Masoko team, either in person or on phone call
            </li>
          </ul>
        </div>
        <div className="w-11/12">
          <h1 className="text-darkBlue  text-xl ">Inventory Management</h1>
          <p className="text-text pt-5">
            Inventory management in general was a key concern among vendors who
            felt they had limited control of their stock on the platform. Key
            issues mentioned included:
          </p>
          <br />

          <ul className="text-text  py-2 ml-5 w-5/6 leading-loose list-decimal md:w-full sm:w-full xsm:w-full">
            <li>
              Vendors have to add their products on an Excel sheet and send this
              together with the image attachments via email to the content team
              at Masoko, for them to upload, a process that can be tiresome and
              time-consuming.
            </li>
            <li>
              The content uploaded on the vendor platform sometimes contains
              errors and often the images do not align with the associated
              product. To fix this, vendors have to call or email the support
              team to make edits.
            </li>
          </ul>
        </div>
        <div className="w-11/12">
        <h1 className="text-darkBlue  text-xl">Payment Management</h1>
        <p className="text-text pt-5  ">
            Payments settlement was the biggest complaint from all the vendors interviewed
        </p>
        <br/>

          <ul className="text-text  py-2 ml-5 w-5/6 leading-loose list-decimal md:w-full sm:w-full xsm:w-full">
            <li>
             There are delayed payments especially for consignment goods. Some vendors mentioned they have unsettled payments dating back to November 2018
            </li>
            <li>
              Vendors have to contact Masoko support to request for their account statements, a process that can lag and be time consuming
            </li>
            <li>
            Account statements are often unclear and contain errors. One of the statements we viewed was for the month of June but contained 2 records from March
            </li>
          </ul>
        </div>
        <div className="w-11/12">
        <h1 className="text-darkBlue  text-xl">Order Management</h1>
        <p className="text-text pt-5 font-medium ">
            In general, order processing did not appear to be a major stumbling block to the vendors using Masoko. However, the following complaints were raised 
            by the majority of those interviewed:
        </p>
        <br/>

          <ul className="text-text  py-2 ml-5 w-5/6 leading-loose list-decimal md:w-full sm:w-full xsm:w-full">
            <li>
             New order notifications are received on email but become difficult to manage and become difficult to manage and process when they receive multiple orders on the same day.
             This led to some vendors going past the SLA agreement of fulfilling orders within 24 hours.
            </li>
            <li>
              At times, the emails do not contain the packing slip, so vendors have to contact support via email or phone call to request for the slip before shipping.
            </li>
       
          </ul>
        </div>
      </div>
      <br/>
      <img src={listing} alt="Masoko Product Listing" className="px-8 w-full"/>
      <div className="px-8">
      <h1 className="text-orange font-bold text-2xl">
            Recommendation
          </h1>
          <h1 className="text-darkBlue  text-xl">The process</h1>

          <p className="text-taskHeading py-5 w-4/12 ">
           The research team facilitated a one day design workshop after the UX study in order to share lessons learned and agree on the features of the MVP.
          </p>
          <h2 className="text-personaFaith">Vendor journey</h2>
          <img src={journey} alt="Masoko Vendor Journey" className="px-8 w-full"/>
         
          <p className="text-taskHeading py-5 w-4/12 ">
           The workshop participants included various stakeholders from the Masoko vendor management team as well as the design and development team from Masoko
          </p>
      </div>
      <div className="bg-grey px-8">
      <h1 className="text-orange font-bold text-2xl">
            The Outcome
          </h1>
          <p className="text-taskHeading py-5 w-4/12 ">
The idea was to validate as quickly as possible and Articulate the biggest problem with the current platform

          </p>
          <h1 className="text-personaFaith font-bold text-2xl">
            Onboarding Journey 
          </h1>
          <p className="text-darkBlue text-xl py-5">The process</p>
          <p className="w-5/12 pb-5">Most of the onboarding process required a human touch point with the Masoko team, either in person or on phone call: <span className="text-orange">
            We simplified the process by automating all the processes by using Government registration tools for verification</span></p>
            <div className="grid grid-cols-3 gap-2">
              <img src={signIn} alt="Masoko SignIn" className="w-full"/>
              <img src={productDetails} alt="Masoko Product Details" className="w-full"/>
              <img src={singleProduct} alt="Masoko Single Product" className="w-full"/>
            </div>
            <br/>
            <h1 className="text-personaKamau text-2xl">
           Inventory Management 
          </h1>
          <br/>
          <p className="text-darkBlue text-xl py-5">Products Description Error Handling</p>
      </div>

      <div>Hello</div>
    </Layout>
  );
};
export default Masoko;
