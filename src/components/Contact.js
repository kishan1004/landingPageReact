import React from "react";
import Contact1 from "../images/contact1.jpeg";
import Contact2 from "../images/contact2.jpeg";
import Contact3 from "../images/contact3.jpeg";
import Contact4 from "../images/contact4.jpeg";
import Contact5 from "../images/contact5.jpeg";
import Contact6 from "../images/contact6.jpeg";

const Contact = () => {
  return (
    <section className="bg-[#1A1A1A] w-full">
      {/* <div className="absolute">
        <img
          src={Contact1}
          className="brightness-50 max-h-[285px] max-w-[190px] ml-[200px] mt-[200px]"
        />

        <img src={Contact2} />
      </div> */}

      <div className="flex flex-col justify-center items-center 2xl:h-[1539px] h-[800px]">
        <div>
          <h1 className="text-[#FFFFFF] text-3xl md:text-4xl font-light text-center px-3 2xl:pb-48 xl:pb-40 md:pb-36 pb-20">
            Put your hands first at our <br />
            premium and limited products
          </h1>
        </div>

        <p className="text-[#FFFFFF] text-lg font-light p-5">
          Subscribe to our newsletter.
        </p>

        <button className="bg-[#262524] text-[#FFFFFF] text-lg font-normal 2xl:px-[400px] md:px-[200px] lg:py-[18px] py-2 px-20  mb-5 rounded">
          E-mail
        </button>

        <button className="bg-[#FFFFFF] flex items-center space-x-5 text-sm font-semibold 2xl:px-[360px] md:px-[160px] lg:py-[18px] py-2 px-10 rounded hover:brightness-75">
          <svg
            width="26"
            height="25"
            viewBox="0 0 26 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.2002 4.71484H21.2001C22.3001 4.71484 23.2001 5.61484 23.2001 6.71484V18.7148C23.2001 19.8148 22.3001 20.7148 21.2001 20.7148H5.2002C4.1002 20.7148 3.2002 19.8148 3.2002 18.7148V6.71484C3.2002 5.61484 4.1002 4.71484 5.2002 4.71484Z"
              stroke="#1A1A1A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M23.2001 6.71484L13.2001 13.7148L3.2002 6.71484"
              stroke="#1A1A1A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span>SUBSCRIBE</span>
        </button>
      </div>
    </section>
  );
};

export default Contact;
