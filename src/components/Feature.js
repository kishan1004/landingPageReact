import React from "react";
import Features1 from "../images/feature.jpeg";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const ScrollSection = () => {
  const textAnimation = useAnimation();
  const blackTextAnimation = useAnimation();
  const imageAnimation = useAnimation();

  const [pointerPosition, setPointerPosition] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const handlePointerMove = (e) => {
    const section = document.getElementById("scrollSection");
    const rect = section.getBoundingClientRect();
    const relativeY = e.clientY - rect.top;

    setPointerPosition(relativeY); // Track pointer Y relative to the section
    setSectionHeight(rect.height); // Set the section height
  };

  useEffect(() => {
    if (isHovering) {
      const scrollPercentage = pointerPosition / sectionHeight;

      // Scroll white section text upwards
      textAnimation.start({
        y: `${(1 - scrollPercentage) * 100}%`, // Text moves upwards
        transition: { ease: "linear" },
      });

      // Scroll black section text from bottom upwards into view
      blackTextAnimation.start({
        y: `${(2 - scrollPercentage) * 100}%`, // Black text scrolls up
        transition: { ease: "linear" },
      });

      // Scroll images downwards
      imageAnimation.start({
        y: `${scrollPercentage * 100}%`, // Image moves downward
        transition: { ease: "linear" },
      });
    }
  }, [pointerPosition, sectionHeight, isHovering]);

  return (
    <div
      id="scrollSection"
      className="grid grid-cols-10 h-[590px] overflow-hidden"
      onMouseMove={handlePointerMove} // Track pointer movement
      onMouseEnter={() => setIsHovering(true)} // Enable scrolling on hover
      onMouseLeave={() => setIsHovering(false)} // Disable scrolling when not hovering
    >
      {/* Text Section */}
      <div className="col-span-6 relative">
        {/* White background section (starts visible) */}
        <motion.div
          className="bg-white text-black h-[590px] p-5 md:p-[50px] flex flex-col justify-between absolute inset-0"
          initial={{ y: "0%" }} // Start in view
          animate={textAnimation}
        >
          <p className="font-medium md:text-4xl text-2xl pb-14 text-center md:text-start">
            Lorem ipsum dolor sit amet consectetur adipi cbdbvj elit.
          </p>
          <p className="font-medium md:text-lg text-sm text-center md:text-start">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic,
            quasi! Commodi expedita et ab aperiam. Lorem ipsum dolor, sit amet.
          </p>
        </motion.div>

        {/* Black background section (starts out of view, scrolls up) */}
        <motion.div
          className="bg-black text-white h-[590px] p-5 md:p-[50px] flex flex-col justify-between absolute inset-0"
          initial={{ y: "100%" }} // Start below the white section (out of view)
          animate={blackTextAnimation}
        >
          <p className="font-medium md:text-4xl text-2xl pb-14 text-center md:text-start">
            Lorem ipsum dolor sit amet consectetur adipi cbdbvj elit.
          </p>
          <p className="font-medium md:text-lg text-sm text-center md:text-start">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic,
            quasi! Commodi expedita et ab aperiam. Lorem ipsum dolor, sit amet.
          </p>
        </motion.div>
      </div>

      {/* Image Section */}
      <div className="col-span-4">
        {/* First image */}
        <motion.img
          src={Features1}
          alt="clothes"
          className="h-[590px] w-full object-cover"
          initial={{ y: "0%" }} // Starts at the top
          animate={imageAnimation}
        />
        {/* Second image */}
        <motion.img
          src={Features1}
          alt="clothes"
          className="h-[590px] w-full object-cover"
          initial={{ y: "0%" }} // Starts at the top
          animate={imageAnimation}
        />
      </div>
    </div>
  );
};

const Feature = () => {
  return (
    <section className="  w-full my-20">
      <div className="xl:max-w-[1350px] 2xl:max-w-[2000px] mx-auto xl:px-24 2xl:px-16 lg:px-16 px-8">
        <h1 className="md:text-6xl text-4xl font-normal text-center md:text-start mb-6">
          Features of our products
        </h1>
        <div className="grid grid-cols-10 ">
          <div className="bg-white text-black  p-10 flex flex-col justify-between col-span-10 md:col-span-6">
            <p className="font-medium md:text-4xl text-2xl pb-14 text-center md:text-start">
              Lorem ipsum dolor sit amet consectetur adipi cbdbvj elit.
            </p>

            <p className="font-medium md:text-lg text-sm text-center md:text-start">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic,
              quasi! Commodi expedita et ab aperiam. Lorem ipsum dolor, sit amet
            </p>

            {/* <div className="bg-black text-white p-5 h-[590px]  md:p-[50px] flex flex-col justify-between">
              <p className="font-medium md:text-4xl text-2xl pb-14 text-center md:text-start">
                Lorem ipsum dolor sit amet consectetur adipi cbdbvj elit.
              </p>

              <p className="font-medium md:text-lg text-sm text-center md:text-start">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic,
                quasi! Commodi expedita et ab aperiam. Lorem ipsum dolor, sit
                amet
              </p>
            </div> */}
          </div>

          <div className="col-span-4 hidden md:block">
            <img src={Features1} alt="clothes" className="" />
            {/* <img src={Features1} alt="clothes" /> */}
          </div>
        </div>
        {/* <ScrollSection /> */}
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
