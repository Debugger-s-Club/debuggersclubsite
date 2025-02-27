import React from "react";
import "./Card.css"; // assuming your CSS file is named Card.css
import instagrmimg from "../assets/instagram.png";
import gmailimg from "../assets/gmail.png";
import linkedinimg from "../assets/linkedin.png";

const Card = ({ name, img, info, insta, mail }) => {
  return (
    <div className="card w-11/12 h-11/12 md:w-full  ">
      <div className="image">
        <img
          src={img}
          className="w-24 h-24 rounded-full object-cover ml-1"
          alt={name}
        />
      </div>
      <div className="card-info md:mb-5">
        <span className="pb-2 ">{name}</span>
        <p>{info}</p>
      </div>
      <div className="relative justify-center w-60 h-40  lg:w-full lg:h-full flex gap-5 sm:gap-7 md:gap-10 flex-row ">
        <section className="flex flex-row justify-center items-center">
          <a
            href={insta}
            target="_self"
            className="group flex justify-center text-white font-semibold hover:-translate-y-3  transition-all  d1ration-500">
            <img
              src={instagrmimg}
              alt="insta"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              className="w-4 h-4 md:w-7 md:h-7"
            />
          </a>
        </section>

        <section className="flex flex-row justify-center items-center">
          <a
            href={`mailto:${mail}`}
            target="_self"
            className="group flex justify-center text-white font-semibold hover:-translate-y-3  transition-all d1ration-500">
            <img
              src={gmailimg}
              alt="insta"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              className="w-4 h-4 md:w-7 md:h-7"
            />
          </a>
        </section>

        {/* <section className="flex flex-row justify-center items-center">
          <a
            href={linkedin}            target="_self"
            className="group flex justify-center text-white font-semibold hover:-translate-y-3  transition-all d1ration-500"
          >
            <img src={linkedinimg} alt='insta' 
              viewBox="0 0 24 24"
              
              fill="currentColor"
              stroke="currentColor"
              className="w-4 h-4 md:w-7 md:h-7" />
          
          </a>
        </section> */}
      </div>
    </div>
  );
};

export default Card;
