import React, { useState } from "react";
import Product1 from "../images/product1.jpeg";
import Product2 from "../images/product2.jpeg";
import Product3 from "../images/product3.jpeg";
import Product4 from "../images/product4.jpeg";
import Product5 from "../images/product5.jpeg";
import Product6 from "../images/product6.jpeg";
import Product7 from "../images/product7.jpeg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { pic1, pic2 } = props;

  const [ishovering, setIsHovering] = useState(false);
  return (
    <Link to="/all-products">
      <div
        className="w-full max-w-[260px]"
        onMouseEnter={() => {
          console.log("MouseEnter");
          setIsHovering(true);
        }}
        onMouseLeave={() => {
          console.log("MouseDown");
          setIsHovering(false);
        }}
      >
        <div className="w-full h-[300px] overflow-hidden rounded-t-lg">
          <img
            src={pic1}
            alt="clothes"
            className={`${
              ishovering ? "block" : "hidden"
            }  object-fill  ease-in duration-500 transition-all`}
          />

          <img
            src={pic2}
            alt="clothes"
            className={`${
              !ishovering ? "block" : "hidden"
            }  hover:opacity-0  object-fill ease-in duration-500 transition-all`}
          />
        </div>
        <div className="flex justify-between p-4 bg-white  w-full rounded-b-lg">
          <div>
            <p className="text-sm">
              <a href="/">Crew Neck Shirt</a>
            </p>
            <p className="text-[#888888] text-base">€29.29</p>
          </div>
          <button>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1002_1693)">
                <g clip-path="url(#clip1_1002_1693)">
                  <path
                    d="M1.85156 5.04021H4.77048L6.72615 15.3662C6.79288 15.7213 6.97565 16.0402 7.24247 16.2672C7.50929 16.4942 7.84315 16.6148 8.18561 16.6078H15.2786C15.6211 16.6148 15.9549 16.4942 16.2218 16.2672C16.4886 16.0402 16.6713 15.7213 16.7381 15.3662L17.9056 8.89607H5.50021M20.825 2.72656V7.3536M23.0139 5.04004H18.6355M8.41913 20.4637C8.41913 20.8896 8.09242 21.2349 7.6894 21.2349C7.28638 21.2349 6.95967 20.8896 6.95967 20.4637C6.95967 20.0378 7.28638 19.6925 7.6894 19.6925C8.09242 19.6925 8.41913 20.0378 8.41913 20.4637ZM16.4462 20.4637C16.4462 20.8896 16.1195 21.2349 15.7164 21.2349C15.3134 21.2349 14.9867 20.8896 14.9867 20.4637C14.9867 20.0378 15.3134 19.6925 15.7164 19.6925C16.1195 19.6925 16.4462 20.0378 16.4462 20.4637Z"
                    stroke="#262524"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_1002_1693">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0.12207 0.226562)"
                  />
                </clipPath>
                <clipPath id="clip1_1002_1693">
                  <rect
                    width="24"
                    height="21"
                    fill="white"
                    transform="translate(0.12207 1.72656)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </Link>
  );
};

const Newproduct = () => {
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 768) {
        AOS.init({
          duration: 1000,
        });
      } else {
        AOS.refreshHard();
        AOS.init({
          disable: true,
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className=" max-w-[1150px] mx-auto my-20 px-4">
      <div>
        <div className="2xl:text-9xl xl:text-8xl text-5xl md:text-6xl font-bold max-w-[80%] mx-auto">
          <h1
            className=" text-[#1A1A1A] text-center md:text-left"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="2000"
          >
            NEWEST
          </h1>
          <h1
            className=" text-[#FFFFFF] text-center md:text-right mt-4"
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="2000"
          >
            PRODUCTS
          </h1>
        </div>

        <div className="lg:flex lg:justify-between mt-8">
          <p className="lg:w-[500px] xl:w-[675px] 2xl:w-[900px] pt-[16px] text-justify text-lg font-normal">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique,
            animi. Cupiditate a aspernatur asperiores repellat sapiente impedit
            assumenda nisi modi sunt numquam quod ullam magnam possimus delectus
            ipsa repudiandae, suscipit officiis dolor? Quae fuga reiciendis ut
            distinctio laboriosam id similique nisi officiis placeat incidunt, a
            adipisci ad ex, laborum facilis?
          </p>

          <div className="flex  max-w-[160px] mx-auto lg:mx-0 mt-10 flex-1 w-full justify-between pr-10">
            <p>
              <a href="https://earnest-marshmallow-59a2b8.netlify.app/">
                VIEW ALL
              </a>
            </p>
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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
          </div>
        </div>
      </div>

      <div className="max-w-[1150px] mx-auto grid lg:grid-cols-4 gap-5 gap-y-10 md:grid-cols-2 my-20 place-items-center">
        <Card pic1={Product1} pic2={Product7} productlink="/" />
        <Card pic1={Product2} pic2={Product6} productlink="/" />
        <Card pic1={Product3} pic2={Product5} productlink="/" />
        <Card pic1={Product4} pic2={Product3} productlink="/" />
        <Card pic1={Product5} pic2={Product1} productlink="/" />
        <Card pic1={Product6} pic2={Product2} productlink="/" />
        <Card pic1={Product7} pic2={Product4} productlink="/" />
      </div>
    </section>
  );
};

export default Newproduct;
