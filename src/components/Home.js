import React from "react";
import HomeImg from "../images/home.jpeg";

const Home = () => {
  return (
    <section className="w-full mb-40 mt-[100px] md:mt-[50px]">
      <div className="md:grid w-screen md:grid-cols-7">
        <div className="mx-auto place-content-end  col-span-4 mb-10 lg:mb-0 pt-10 pr-10 md:px-10 px-4 ">
          <h1 className=" text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-[#1A1A1A] ">
            GET <br />
            YOURSELF
          </h1>
          <h1 className="mb-10 mt-4 text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-[#FFFFFF]  md:text-start">
            INTO THE <br /> RIGHT GEAR
          </h1>
          <a
            className="cursor-pointer"
            href="https://earnest-marshmallow-59a2b8.netlify.app/"
          >
            <span className="mr-4">VIEW SUMMER COLLECTION</span>
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block"
            >
              <g clip-path="url(#clip0_1002_1676)">
                <path
                  d="M0.553147 10.9882C0.162623 11.3787 0.162623 12.0119 0.553147 12.4024C0.943671 12.7929 1.57683 12.7929 1.96736 12.4024L0.553147 10.9882ZM11.2603 1.69531H12.2603C12.2603 1.14303 11.8126 0.695312 11.2603 0.695312V1.69531ZM1.26025 0.695312H0.260254V2.69531H1.26025V0.695312ZM10.2603 11.6953V12.6953H12.2603V11.6953H10.2603ZM1.96736 12.4024L11.9674 2.40242L10.5532 0.988205L0.553147 10.9882L1.96736 12.4024ZM1.26025 2.69531H11.2603V0.695312H1.26025V2.69531ZM10.2603 1.69531V11.6953H12.2603V1.69531H10.2603Z"
                  fill="#BF8C4E"
                />
              </g>
              <defs>
                <clipPath id="clip0_1002_1676">
                  <rect
                    width="12"
                    height="12"
                    fill="white"
                    transform="translate(0.260254 0.695312)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>

        <div className="relative  bg-[#c4c3c1] col-span-3">
          <div className="hidden md:flex bg-[#bf8c4e] blur-[0.2] opacity-45  w-[100px] h-[100px] -bottom-[8%] -left-[8%]  absolute"></div>
          <img
            alt="clothes"
            src={HomeImg}
            className="w-full md:mt-[40%] lg:mt-[0]"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
