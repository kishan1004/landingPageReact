import React from "react";
import Slide1 from "../images/slide1.jpeg";
import Slide2 from "../images/slide2.jpeg";
import Slide3 from "../images/slide3.jpeg";
import Slide4 from "../images/slide4.jpeg";
import Slide5 from "../images/slide5.jpeg";

const Card = (props) => {
  return (
    <div class="relative cursor-pointer h-[300px] xl:h-[350px]  2xl:h-[700px] max-w-full bg-blue-400 rounded-md">
      <img
        src={props.image}
        alt="clothes"
        className="rounded-md w-full h-full brightness-50 hover:brightness-100 object-fill"
      />
      <div
        className={`w-[200px]  absolute right-[15%] bottom-[65%] xl:bottom-[60%] 2xl:bottom-[40%] z-20  -rotate-90 origin-right  text-white text-4xl 2xl:text-6xl`}
      >
        {props.text}
      </div>
    </div>
  );
};

const Slide = () => {
  return (
    <section className=" w-full my-20">
      <div className="place-items-center px-4 grid lg:grid-cols-5 md:grid-cols-3  grid-cols-1 pt-5 gap-3">
        <div>
          <Card image={Slide1} text="Hoodies" />
        </div>
        <div className="lg:mt-[60px]">
          <Card image={Slide2} text="Sweatshirts" />
        </div>
        <div>
          <Card image={Slide3} text="Shirts" />
        </div>
        <div className="lg:mt-[60px]">
          <Card image={Slide4} text="TShirts" />
        </div>
        <div>
          <Card image={Slide5} text="Jackets" />
        </div>
      </div>
    </section>
  );
};

export default Slide;
