import React from "react";
import Slide1 from "../images/slide1.jpeg";
import Slide2 from "../images/slide2.jpeg";
import Slide3 from "../images/slide3.jpeg";
import Slide4 from "../images/slide4.jpeg";
import Slide5 from "../images/slide5.jpeg";

const Slide = () => {
  return (
    <section className="bg-[#E1DEDB] w-full">
      <div className="2xl:px-10 place-items-center px-5 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-4 grid-cols-1 pt-5 gap-5">
        <div class="relative cursor-pointer">
          <img
            src={Slide1}
            alt="image"
            className="w-[368px] 2xl:w-[450px] 2xl:h-[820px] xl:h-[600px] lg:h-[550px] md:h-[450px] rounded grayscale hover:grayscale-0 brightness-50 hover:brightness-100"
          />
          <div className="absolute bottom-40 2xl:bottom-64 2xl:right-8 right-4 transform -rotate-90 origin-bottom-right text-white text-4xl 2xl:text-6xl">
            Hoodies
          </div>
        </div>

        <div class="relative lg:pt-[40px] cursor-pointer">
          <img
            src={Slide2}
            alt="image"
            className="w-[368px] 2xl:w-[450px] 2xl:h-[820px] xl:h-[600px] lg:h-[550px] md:h-[450px] rounded grayscale hover:grayscale-0 brightness-50 hover:brightness-100"
          />
          <div className="absolute md:bottom-52 bottom-56 2xl:bottom-[340px] 2xl:right-8 right-4 transform -rotate-90 origin-bottom-right text-white text-4xl 2xl:text-6xl">
            Sweatshirts
          </div>
        </div>

        <div class="relative cursor-pointer">
          <img
            src={Slide3}
            alt="image"
            className="w-[368px] 2xl:w-[450px] 2xl:h-[820px] xl:h-[600px] lg:h-[550px] md:h-[450px] rounded grayscale hover:grayscale-0 brightness-50 hover:brightness-100"
          />
          <div className="absolute bottom-32 2xl:bottom-48 2xl:right-8 right-4 transform -rotate-90 origin-bottom-right text-white text-4xl 2xl:text-6xl">
            Shirts
          </div>
        </div>

        <div class="relative lg:pt-[40px] cursor-pointer">
          <img
            src={Slide4}
            alt="image"
            className="w-[368px] 2xl:w-[450px] 2xl:h-[820px] xl:h-[600px] lg:h-[550px] md:h-[450px] rounded grayscale hover:grayscale-0 brightness-50 hover:brightness-100"
          />
          <div className="absolute md:bottom-36 2xl:bottom-56 bottom-44 2xl:right-8 right-4 transform -rotate-90 origin-bottom-right text-white text-4xl 2xl:text-6xl">
            T-Shirts
          </div>
        </div>
        <div class="relative cursor-pointer">
          <img
            src={Slide5}
            alt="image"
            className="2xl:w-[450px] w-[368px] 2xl:h-[820px] xl:h-[600px] lg:h-[550px] md:h-[450px] rounded grayscale hover:grayscale-0 brightness-50 hover:brightness-100"
          />
          <div className="absolute bottom-40 2xl:bottom-64 2xl:right-8 right-4 transform -rotate-90 origin-bottom-right text-white text-4xl 2xl:text-6xl">
            Jackets
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slide;
