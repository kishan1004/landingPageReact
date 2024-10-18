import React from "react";
import Features1 from "../images/feature.jpeg";

const Feature = () => {
  return (
    <section className="bg-[#E1DEDB] w-full">
      <div className="xl:w-[1350px] 2xl:w-[2000px] mx-auto xl:px-24 2xl:px-16 lg:px-16 px-8">
        <h1 className="md:text-6xl text-4xl font-normal text-center md:text-start">
          Features of our products
        </h1>

        <div className="flex py-[50px]">
          <div className="bg-white p-5 md:p-[50px] flex flex-col justify-between">
            <p className="font-medium md:text-4xl text-2xl pb-14 text-center md:text-start">
              Lorem ipsum dolor sit amet consectetur adipi cbdbvj elit.
            </p>

            <p className="font-medium md:text-lg text-sm text-center md:text-start">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic,
              quasi! Commodi expedita et ab aperiam. Lorem ipsum dolor, sit amet
            </p>
          </div>

          {/* <div
            className="bg-white p-5 md:p-[50px] flex flex-col justify-between transition-colors duration-5000 ease-in-out z-50"
            id="header"
          >
            <p className="font-medium md:text-4xl text-2xl pb-14 text-center md:text-start">
              Lorem ipsum dolor sit amet consectetur adipi cbdbvj elit.
            </p>

            <p className="font-medium md:text-lg text-sm text-center md:text-start">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic,
              quasi! Commodi expedita et ab aperiam. Lorem ipsum dolor, sit amet
            </p>
          </div> */}

          <img src={Features1} alt="clothes" className="w-1/2 hidden md:flex" />
        </div>
      </div>
    </section>
  );
};

// window.addEventListener("scroll", function () {
//   const header = document.getElementById("header");
//   const scrollY = window.scrollY;

//   if (scrollY > 100) {
//     header.classList.remove("bg-white", "text-black");
//     header.classList.add("bg-black", "text-white");
//   } else {
//     header.classList.remove("bg-black", "text-white");
//     header.classList.add("bg-white", "text-black");
//   }
// });

export default Feature;
