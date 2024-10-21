import React from "react";
import "./Features.css";
import Marquee from "react-fast-marquee";
import LogoImg from "../images/Starringwithlogo.jpeg";
import LgoName from "../images/starringlogoblack.PNG";
import LogoIcon from "../images/starringblack.jpeg";

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-[#FFFFFF] w-full">
      <div className="bg-[#E1DEDB] transform rotate-1 w-full">
        <Marquee>
          <div className="flex gap-10 items-center py-5 px-6 h-[70px]">
            <img src={LogoImg} alt="hi" className="h-[40px]" />

            <img src={LgoName} alt="hi" className="w-[250px] pt-2" />
          </div>
          <div className="flex gap-10 items-center py-5 px-6 h-[70px]">
            <img src={LogoImg} alt="hi" className="h-[40px]" />

            <img src={LgoName} alt="hi" className="w-[250px] pt-2" />
          </div>
          <div className="flex gap-10 items-center py-5 px-6 h-[70px]">
            <img src={LogoImg} alt="hi" className="h-[40px]" />

            <img src={LgoName} alt="hi" className="w-[250px] pt-2" />
          </div>
          <div className="flex gap-10 items-center py-5 px-6 h-[70px]">
            <img src={LogoImg} alt="hi" className="h-[40px]" />

            <img src={LgoName} alt="hi" className="w-[250px] pt-2" />
          </div>
        </Marquee>
      </div>

      <div className="grid lg:grid-cols-6 grid-cols-2 gap-10 justify-items-center items-center  pb-32 lg:pb-0 ">
        <div className="FooterPortion1  col-span-2  px-10">
          <div className="py-[100px]">
            <img src={LogoIcon} alt="hi" className="h-[50px]" />
          </div>
          <div className="pb-[41px]">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1002_1979)">
                <g clip-path="url(#clip1_1002_1979)">
                  <path
                    d="M21.1221 10.2461C21.1221 17.2461 12.1221 23.2461 12.1221 23.2461C12.1221 23.2461 3.12207 17.2461 3.12207 10.2461C3.12207 7.85914 4.07028 5.56996 5.75811 3.88213C7.44594 2.1943 9.73512 1.24609 12.1221 1.24609C14.509 1.24609 16.7982 2.1943 18.4861 3.88213C20.1739 5.56996 21.1221 7.85914 21.1221 10.2461Z"
                    stroke="#BF8C4E"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.1221 13.2461C13.779 13.2461 15.1221 11.903 15.1221 10.2461C15.1221 8.58924 13.779 7.24609 12.1221 7.24609C10.4652 7.24609 9.12207 8.58924 9.12207 10.2461C9.12207 11.903 10.4652 13.2461 12.1221 13.2461Z"
                    stroke="#BF8C4E"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_1002_1979">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0.12207 0.246094)"
                  />
                </clipPath>
                <clipPath id="clip1_1002_1979">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0.12207 0.246094)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>

          <p className="text-4xl font-extralight pb-[41px]">
            Find out about the sales at your local shop
          </p>
          <button>
            <svg
              width="142"
              height="38"
              viewBox="0 0 142 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="path-1-inside-1_1002_1986" fill="white">
                <path d="M0.12207 4.80469C0.12207 2.59555 1.91293 0.804688 4.12207 0.804688H137.122C139.331 0.804688 141.122 2.59555 141.122 4.80469V33.8047C141.122 36.0138 139.331 37.8047 137.122 37.8047H4.12207C1.91293 37.8047 0.12207 36.0138 0.12207 33.8047V4.80469Z" />
              </mask>
              <path
                d="M4.12207 2.80469H137.122V-1.19531H4.12207V2.80469ZM139.122 4.80469V33.8047H143.122V4.80469H139.122ZM137.122 35.8047H4.12207V39.8047H137.122V35.8047ZM2.12207 33.8047V4.80469H-1.87793V33.8047H2.12207ZM4.12207 35.8047C3.0175 35.8047 2.12207 34.9093 2.12207 33.8047H-1.87793C-1.87793 37.1184 0.808356 39.8047 4.12207 39.8047V35.8047ZM139.122 33.8047C139.122 34.9093 138.227 35.8047 137.122 35.8047V39.8047C140.436 39.8047 143.122 37.1184 143.122 33.8047H139.122ZM137.122 2.80469C138.227 2.80469 139.122 3.70012 139.122 4.80469H143.122C143.122 1.49098 140.436 -1.19531 137.122 -1.19531V2.80469ZM4.12207 -1.19531C0.808362 -1.19531 -1.87793 1.49098 -1.87793 4.80469H2.12207C2.12207 3.70012 3.0175 2.80469 4.12207 2.80469V-1.19531Z"
                fill="white"
                mask="url(#path-1-inside-1_1002_1986)"
              />
              <path
                d="M35.0941 22.8047V14.5727H40.9741V15.7247H36.4381V18.1607H40.5421V19.3007H36.4381V22.8047H35.0941ZM42.43 22.8047V14.5727H43.774V22.8047H42.43ZM45.723 22.8047V14.5727H47.019L50.775 19.7327C50.823 19.7807 50.875 19.8487 50.931 19.9367C50.995 20.0247 51.055 20.1127 51.111 20.2007C51.167 20.2887 51.207 20.3607 51.231 20.4167H51.291C51.291 20.2967 51.291 20.1807 51.291 20.0687C51.291 19.9567 51.291 19.8447 51.291 19.7327V14.5727H52.587V22.8047H51.339L47.535 17.5847C47.471 17.4887 47.391 17.3687 47.295 17.2247C47.199 17.0727 47.127 16.9567 47.079 16.8767H47.019C47.019 16.9887 47.019 17.1047 47.019 17.2247C47.019 17.3367 47.019 17.4567 47.019 17.5847V22.8047H45.723ZM54.5355 22.8047V14.5727H57.7155C58.5635 14.5727 59.2875 14.7207 59.8875 15.0167C60.4875 15.3047 60.9475 15.7527 61.2675 16.3607C61.5955 16.9607 61.7595 17.7367 61.7595 18.6887C61.7595 19.6327 61.5955 20.4087 61.2675 21.0167C60.9475 21.6247 60.4875 22.0767 59.8875 22.3727C59.2875 22.6607 58.5635 22.8047 57.7155 22.8047H54.5355ZM55.8795 21.6527H57.7035C58.1275 21.6527 58.5035 21.5967 58.8315 21.4847C59.1675 21.3727 59.4475 21.2007 59.6715 20.9687C59.9035 20.7367 60.0755 20.4447 60.1875 20.0927C60.3075 19.7327 60.3675 19.3087 60.3675 18.8207V18.5687C60.3675 18.0727 60.3075 17.6487 60.1875 17.2967C60.0755 16.9367 59.9035 16.6407 59.6715 16.4087C59.4475 16.1767 59.1675 16.0047 58.8315 15.8927C58.5035 15.7807 58.1275 15.7247 57.7035 15.7247H55.8795V21.6527ZM68.8218 22.9487C68.3738 22.9487 67.9418 22.9007 67.5258 22.8047C67.1098 22.7167 66.7418 22.5727 66.4218 22.3727C66.1018 22.1647 65.8498 21.9047 65.6658 21.5927C65.4818 21.2727 65.3898 20.8927 65.3898 20.4527C65.3898 20.4047 65.3898 20.3607 65.3898 20.3207C65.3978 20.2727 65.4018 20.2327 65.4018 20.2007H66.7458C66.7458 20.2247 66.7418 20.2607 66.7338 20.3087C66.7338 20.3567 66.7338 20.3967 66.7338 20.4287C66.7338 20.7247 66.8218 20.9767 66.9978 21.1847C67.1738 21.3927 67.4178 21.5487 67.7298 21.6527C68.0498 21.7567 68.4138 21.8087 68.8218 21.8087C69.0458 21.8087 69.2618 21.7967 69.4698 21.7727C69.6778 21.7407 69.8658 21.6967 70.0338 21.6407C70.2098 21.5767 70.3618 21.5007 70.4898 21.4127C70.6178 21.3167 70.7178 21.2047 70.7898 21.0767C70.8618 20.9487 70.8978 20.8007 70.8978 20.6327C70.8978 20.3767 70.8218 20.1647 70.6698 19.9967C70.5258 19.8287 70.3258 19.6887 70.0698 19.5767C69.8218 19.4647 69.5378 19.3647 69.2178 19.2767C68.9058 19.1887 68.5818 19.1007 68.2458 19.0127C67.9098 18.9247 67.5818 18.8207 67.2618 18.7007C66.9498 18.5807 66.6658 18.4367 66.4098 18.2687C66.1618 18.0927 65.9618 17.8767 65.8098 17.6207C65.6658 17.3567 65.5938 17.0367 65.5938 16.6607C65.5938 16.3007 65.6698 15.9807 65.8218 15.7007C65.9738 15.4207 66.1938 15.1887 66.4818 15.0047C66.7698 14.8127 67.1138 14.6687 67.5138 14.5727C67.9138 14.4767 68.3658 14.4287 68.8698 14.4287C69.3018 14.4287 69.7098 14.4767 70.0938 14.5727C70.4778 14.6607 70.8138 14.8007 71.1018 14.9927C71.3898 15.1847 71.6138 15.4287 71.7738 15.7247C71.9418 16.0207 72.0258 16.3727 72.0258 16.7807V16.9247H70.6938V16.7687C70.6938 16.5127 70.6178 16.2967 70.4658 16.1207C70.3138 15.9447 70.1018 15.8087 69.8298 15.7127C69.5578 15.6167 69.2418 15.5687 68.8818 15.5687C68.4578 15.5687 68.1018 15.6127 67.8138 15.7007C67.5258 15.7807 67.3058 15.8967 67.1538 16.0487C67.0098 16.1927 66.9378 16.3687 66.9378 16.5767C66.9378 16.8087 67.0138 17.0007 67.1658 17.1527C67.3178 17.2967 67.5178 17.4207 67.7658 17.5247C68.0218 17.6287 68.3058 17.7247 68.6178 17.8127C68.9378 17.8927 69.2618 17.9807 69.5898 18.0767C69.9258 18.1647 70.2498 18.2687 70.5618 18.3887C70.8818 18.5087 71.1658 18.6567 71.4138 18.8327C71.6698 19.0087 71.8738 19.2287 72.0258 19.4927C72.1778 19.7487 72.2538 20.0647 72.2538 20.4407C72.2538 21.0327 72.1058 21.5167 71.8098 21.8927C71.5138 22.2607 71.1058 22.5287 70.5858 22.6967C70.0738 22.8647 69.4858 22.9487 68.8218 22.9487ZM73.8128 22.8047V14.5727H75.1568V18.0167H79.3328V14.5727H80.6768V22.8047H79.3328V19.1687H75.1568V22.8047H73.8128ZM86.3573 22.9487C85.5093 22.9487 84.7733 22.7927 84.1493 22.4807C83.5333 22.1687 83.0573 21.6967 82.7213 21.0647C82.3933 20.4327 82.2293 19.6407 82.2293 18.6887C82.2293 17.7287 82.3933 16.9367 82.7213 16.3127C83.0573 15.6807 83.5333 15.2087 84.1493 14.8967C84.7733 14.5847 85.5093 14.4287 86.3573 14.4287C87.2213 14.4287 87.9613 14.5847 88.5773 14.8967C89.1933 15.2087 89.6653 15.6807 89.9933 16.3127C90.3293 16.9367 90.4973 17.7287 90.4973 18.6887C90.4973 19.6407 90.3293 20.4327 89.9933 21.0647C89.6653 21.6967 89.1933 22.1687 88.5773 22.4807C87.9613 22.7927 87.2213 22.9487 86.3573 22.9487ZM86.3573 21.8087C86.7973 21.8087 87.1853 21.7487 87.5213 21.6287C87.8653 21.5087 88.1533 21.3247 88.3853 21.0767C88.6253 20.8287 88.8053 20.5167 88.9253 20.1407C89.0533 19.7647 89.1173 19.3287 89.1173 18.8327V18.5687C89.1173 18.0567 89.0533 17.6127 88.9253 17.2367C88.8053 16.8607 88.6253 16.5487 88.3853 16.3007C88.1533 16.0527 87.8653 15.8687 87.5213 15.7487C87.1853 15.6287 86.7973 15.5687 86.3573 15.5687C85.9253 15.5687 85.5373 15.6287 85.1933 15.7487C84.8573 15.8687 84.5693 16.0527 84.3293 16.3007C84.0973 16.5487 83.9213 16.8607 83.8013 17.2367C83.6813 17.6127 83.6213 18.0567 83.6213 18.5687V18.8327C83.6213 19.3287 83.6813 19.7647 83.8013 20.1407C83.9213 20.5167 84.0973 20.8287 84.3293 21.0767C84.5693 21.3247 84.8573 21.5087 85.1933 21.6287C85.5373 21.7487 85.9253 21.8087 86.3573 21.8087ZM92.0472 22.8047V14.5727H96.1512C96.7352 14.5727 97.2192 14.6807 97.6032 14.8967C97.9872 15.1127 98.2752 15.4127 98.4672 15.7967C98.6672 16.1727 98.7672 16.6207 98.7672 17.1407C98.7672 17.6607 98.6632 18.1207 98.4552 18.5207C98.2472 18.9127 97.9432 19.2167 97.5432 19.4327C97.1512 19.6487 96.6712 19.7567 96.1032 19.7567H93.3912V22.8047H92.0472ZM93.3912 18.6047H96.0432C96.4672 18.6047 96.7992 18.4767 97.0392 18.2207C97.2872 17.9647 97.4112 17.6087 97.4112 17.1527C97.4112 16.8487 97.3592 16.5927 97.2552 16.3847C97.1512 16.1687 96.9992 16.0047 96.7992 15.8927C96.5992 15.7807 96.3472 15.7247 96.0432 15.7247H93.3912V18.6047ZM103.099 22.9487C102.651 22.9487 102.219 22.9007 101.803 22.8047C101.387 22.7167 101.019 22.5727 100.699 22.3727C100.379 22.1647 100.127 21.9047 99.9431 21.5927C99.7591 21.2727 99.6671 20.8927 99.6671 20.4527C99.6671 20.4047 99.6671 20.3607 99.6671 20.3207C99.6751 20.2727 99.6791 20.2327 99.6791 20.2007H101.023C101.023 20.2247 101.019 20.2607 101.011 20.3087C101.011 20.3567 101.011 20.3967 101.011 20.4287C101.011 20.7247 101.099 20.9767 101.275 21.1847C101.451 21.3927 101.695 21.5487 102.007 21.6527C102.327 21.7567 102.691 21.8087 103.099 21.8087C103.323 21.8087 103.539 21.7967 103.747 21.7727C103.955 21.7407 104.143 21.6967 104.311 21.6407C104.487 21.5767 104.639 21.5007 104.767 21.4127C104.895 21.3167 104.995 21.2047 105.067 21.0767C105.139 20.9487 105.175 20.8007 105.175 20.6327C105.175 20.3767 105.099 20.1647 104.947 19.9967C104.803 19.8287 104.603 19.6887 104.347 19.5767C104.099 19.4647 103.815 19.3647 103.495 19.2767C103.183 19.1887 102.859 19.1007 102.523 19.0127C102.187 18.9247 101.859 18.8207 101.539 18.7007C101.227 18.5807 100.943 18.4367 100.687 18.2687C100.439 18.0927 100.239 17.8767 100.087 17.6207C99.9431 17.3567 99.8711 17.0367 99.8711 16.6607C99.8711 16.3007 99.9471 15.9807 100.099 15.7007C100.251 15.4207 100.471 15.1887 100.759 15.0047C101.047 14.8127 101.391 14.6687 101.791 14.5727C102.191 14.4767 102.643 14.4287 103.147 14.4287C103.579 14.4287 103.987 14.4767 104.371 14.5727C104.755 14.6607 105.091 14.8007 105.379 14.9927C105.667 15.1847 105.891 15.4287 106.051 15.7247C106.219 16.0207 106.303 16.3727 106.303 16.7807V16.9247H104.971V16.7687C104.971 16.5127 104.895 16.2967 104.743 16.1207C104.591 15.9447 104.379 15.8087 104.107 15.7127C103.835 15.6167 103.519 15.5687 103.159 15.5687C102.735 15.5687 102.379 15.6127 102.091 15.7007C101.803 15.7807 101.583 15.8967 101.431 16.0487C101.287 16.1927 101.215 16.3687 101.215 16.5767C101.215 16.8087 101.291 17.0007 101.443 17.1527C101.595 17.2967 101.795 17.4207 102.043 17.5247C102.299 17.6287 102.583 17.7247 102.895 17.8127C103.215 17.8927 103.539 17.9807 103.867 18.0767C104.203 18.1647 104.527 18.2687 104.839 18.3887C105.159 18.5087 105.443 18.6567 105.691 18.8327C105.947 19.0087 106.151 19.2287 106.303 19.4927C106.455 19.7487 106.531 20.0647 106.531 20.4407C106.531 21.0327 106.383 21.5167 106.087 21.8927C105.791 22.2607 105.383 22.5287 104.863 22.6967C104.351 22.8647 103.763 22.9487 103.099 22.9487Z"
                fill="white"
              />
            </svg>
          </button>

          <p className="py-[50px] font-light text-lg text-center md:text-start">
            Crafted with ❤️ by Azwedo & Wedoflow
          </p>
        </div>

        <div className="col-span-1 ">
          <h1 className="md:pb-[41px] font-medium text-sm">CATOGORIES</h1>
          <ul className="leading-loose text-base font-thin">
            <li>
              <a
                href="https://www.google.co.in/"
                className="hover:brightness-50"
              >
                Hoodies
              </a>
            </li>
            <li>
              <a
                href="https://www.google.co.in/"
                className="hover:brightness-50"
              >
                Sweatshirts
              </a>
            </li>
            <li>
              <a
                href="https://www.google.co.in/"
                className="hover:brightness-50"
              >
                Shirts
              </a>
            </li>
            <li>
              <a
                href="https://www.google.co.in/"
                className="hover:brightness-50"
              >
                T-shirts
              </a>
            </li>
            <li>
              <a
                href="https://www.google.co.in/"
                className="hover:brightness-50"
              >
                Jackets
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-1 ">
          <h1 className="md:pb-[41px] font-medium text-sm">COMPANY</h1>
          <ul className="leading-loose text-base font-thin">
            <li>
              <a
                href="https://www.google.co.in/"
                className="hover:brightness-50"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="https://www.google.co.in/"
                className="hover:brightness-50"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="https://www.google.co.in/"
                className="hover:brightness-50"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="https://www.google.co.in/"
                className="hover:brightness-50"
              >
                Guarantee
              </a>
            </li>
            <li>
              <a
                href="https://www.google.co.in/"
                className="hover:brightness-50"
              >
                Shipping
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-1 ">
          <h1 className="md:pb-[41px] font-medium text-sm">SUPPORT</h1>
          <ul className="leading-loose text-base font-thin">
            <li>
              <a
                href="https://www.google.co.in/"
                className="hover:brightness-50"
              >
                Style Guide
              </a>
            </li>
            <li>
              <a
                href="https://www.google.co.in/"
                className="hover:brightness-50"
              >
                Licensing
              </a>
            </li>
            <li>
              <a
                href="https://www.google.co.in/"
                className="hover:brightness-50"
              >
                Change Log
              </a>
            </li>
            <li>
              <a
                href="https://www.google.co.in/"
                className="hover:brightness-50"
              >
                Instructions
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-1 ">
          <ul className="flex-col space-y-4">
            <li>
              <a
                href="https://www.google.co.in/"
                className="hover:brightness-50"
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1002_2046)">
                    <g clip-path="url(#clip1_1002_2046)">
                      <path
                        d="M22.2822 12.9841C22.2822 7.43411 17.8072 2.92578 12.2822 2.92578C6.75723 2.92578 2.28223 7.42578 2.28223 12.9841C2.28223 18.0091 5.94056 22.1758 10.7239 22.9258V15.8925H8.18223V12.9841H10.7155V10.7675C10.7155 8.25078 12.2155 6.85078 14.4989 6.85078C15.5905 6.85078 16.7322 7.05078 16.7322 7.05078V9.52578H15.4822C14.2322 9.52578 13.8489 10.3008 13.8489 11.1008V12.9841H16.6155L16.1739 15.9008H13.8405V22.9258C18.6322 22.1758 22.2822 18.0091 22.2822 12.9841Z"
                        fill="#888888"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_1002_2046">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.282227 0.925781)"
                      />
                    </clipPath>
                    <clipPath id="clip1_1002_2046">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.282227 0.925781)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.google.co.in/"
                className="hover:brightness-50"
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1002_2052)">
                    <g clip-path="url(#clip1_1002_2052)">
                      <path
                        d="M22.2822 6.82178C21.535 7.15013 20.7395 7.366 19.9239 7.46178C20.7891 6.94977 21.4316 6.15392 21.7322 5.22178C20.9405 5.68578 20.0655 6.02178 19.1239 6.19778C18.7439 5.79666 18.2806 5.47629 17.7639 5.25722C17.2474 5.03817 16.6887 4.92527 16.1239 4.92578C15.4955 4.93195 14.8769 5.07473 14.3143 5.34339C13.7517 5.61205 13.2599 5.99962 12.8757 6.47696C12.4915 6.95431 12.2251 7.50902 12.0963 8.09943C11.9675 8.68984 11.9798 9.30058 12.1322 9.88578C10.4905 9.79974 8.88684 9.37845 7.42824 8.65004C5.96965 7.92164 4.6897 6.90288 3.6739 5.66178C3.14397 6.55176 2.98094 7.60016 3.21699 8.59992C3.45305 9.59968 4.07103 10.4781 4.9489 11.0618C4.29527 11.0389 3.65735 10.8632 3.09056 10.5498V10.6058C3.09056 12.5578 4.50723 14.1898 6.38223 14.5658C5.77907 14.7245 5.14572 14.7464 4.53223 14.6298C5.05723 16.2378 6.5739 17.4058 8.36556 17.4378C7.52098 18.0956 6.54708 18.5832 5.50192 18.8719C4.45677 19.1605 3.36177 19.2442 2.28223 19.1178C4.1493 20.2999 6.33734 20.9287 8.5739 20.9258C16.1239 20.9258 20.2405 14.7658 20.2405 9.42978V8.90978C21.0405 8.34178 21.7322 7.62978 22.2822 6.82178Z"
                        fill="#888888"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_1002_2052">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.282227 0.925781)"
                      />
                    </clipPath>
                    <clipPath id="clip1_1002_2052">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.282227 0.925781)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.google.co.in/"
                className="hover:brightness-50"
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1002_2057)">
                    <g clip-path="url(#clip1_1002_2057)">
                      <path
                        d="M12.3155 5.93401C12.8072 5.93401 18.5989 5.95046 20.0989 6.34529C20.5247 6.46113 20.9121 6.68554 21.2222 6.99597C21.5323 7.3064 21.7542 7.69192 21.8655 8.1138C22.2822 9.67667 22.2822 12.9258 22.2822 12.9258V12.9587C22.2822 13.3124 22.2572 16.2736 21.8655 17.7296C21.7554 18.153 21.5341 18.5402 21.2239 18.8522C20.9138 19.1641 20.5257 19.3897 20.0989 19.5063C18.6322 19.9011 13.0572 19.9176 12.3489 19.9258H12.2072C11.4989 19.9258 5.9239 19.9011 4.46556 19.5145C4.03775 19.3973 3.64896 19.1704 3.33869 18.8569C3.02841 18.5434 2.80768 18.1545 2.6989 17.7296C2.3489 16.4052 2.29056 13.8635 2.28223 13.1232V12.7119C2.29056 11.9716 2.3489 9.4299 2.6989 8.10557C2.81154 7.68521 3.03399 7.30139 3.34401 6.99249C3.65404 6.68358 4.04077 6.46042 4.46556 6.34529C5.96556 5.94223 11.7572 5.92578 12.2489 5.92578L12.3155 5.93401ZM10.2322 9.96457V15.8706L15.4655 12.9258L10.2322 9.97279V9.96457Z"
                        fill="#888888"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_1002_2057">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.282227 0.925781)"
                      />
                    </clipPath>
                    <clipPath id="clip1_1002_2057">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.282227 0.925781)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.google.co.in/"
                className="hover:brightness-50"
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1002_2062)">
                    <g clip-path="url(#clip1_1002_2062)">
                      <path
                        d="M16.4312 2.9292C17.2116 2.90226 17.9894 3.03462 18.717 3.31821C19.4446 3.6018 20.1067 4.03067 20.6631 4.57865C21.1994 5.13497 21.6187 5.79315 21.8963 6.5143C22.1739 7.23544 22.3041 8.00492 22.2792 8.77724V17.0745C22.2792 18.8072 21.7127 20.2984 20.6298 21.3481C19.4809 22.4087 17.9606 22.9743 16.3979 22.9225H8.16736C6.61769 22.9705 5.11175 22.4047 3.97713 21.3481C3.41469 20.7847 2.97429 20.1116 2.68334 19.3706C2.3924 18.6296 2.25716 17.8367 2.28604 17.0412V8.77724C2.28604 5.26175 4.61858 2.9292 8.13404 2.9292H16.4312ZM16.4728 4.78691H8.16736C6.95944 4.78691 5.91813 5.14513 5.2267 5.82823C4.85724 6.22176 4.57092 6.68574 4.38484 7.19243C4.19877 7.69913 4.11676 8.23814 4.14374 8.77724V17.0412C4.14374 18.2907 4.50195 19.2904 5.2267 20.0235C6.03503 20.7384 7.08926 21.1117 8.16736 21.0648H16.3979C17.476 21.1117 18.5302 20.7384 19.3385 20.0235C19.7266 19.6395 20.0306 19.1792 20.2314 18.6715C20.4322 18.1639 20.5253 17.6201 20.5048 17.0745V8.77724C20.5317 7.70483 20.1438 6.66339 19.4218 5.86988C19.0283 5.50042 18.5644 5.21409 18.0576 5.02801C17.551 4.84194 17.0119 4.75994 16.4728 4.78691ZM12.2826 7.7276C15.1066 7.7276 17.4475 10.0602 17.4475 12.8926C17.4475 14.2623 16.9034 15.5761 15.9348 16.5447C14.9661 17.5133 13.6524 18.0575 12.2826 18.0575C10.9128 18.0575 9.59909 17.5133 8.63049 16.5447C7.66188 15.5761 7.11772 14.2623 7.11772 12.8926C7.11772 11.5228 7.66188 10.209 8.63049 9.24037C9.59909 8.27176 10.9128 7.7276 12.2826 7.7276ZM12.2826 9.57698C11.4068 9.58136 10.5682 9.9312 9.94892 10.5505C9.32964 11.1698 8.9798 12.0084 8.97542 12.8842C8.9798 13.76 9.32964 14.5986 9.94892 15.2179C10.5682 15.8372 11.4068 16.187 12.2826 16.1914C13.1584 16.187 13.997 15.8372 14.6163 15.2179C15.2356 14.5986 15.5854 13.76 15.5898 12.8842C15.5854 12.0084 15.2356 11.1698 14.6163 10.5505C13.997 9.9312 13.1584 9.58136 12.2826 9.57698ZM17.6474 6.43636C17.9568 6.43636 18.2534 6.55924 18.4721 6.77795C18.6908 6.99667 18.8137 7.29332 18.8137 7.60264C18.8137 7.91196 18.6908 8.2086 18.4721 8.42732C18.2534 8.64604 17.9568 8.76891 17.6474 8.76891C17.3381 8.76891 17.0415 8.64604 16.8227 8.42732C16.604 8.2086 16.4812 7.91196 16.4812 7.60264C16.4812 7.29332 16.604 6.99667 16.8227 6.77795C17.0415 6.55924 17.3381 6.43636 17.6474 6.43636Z"
                        fill="#888888"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_1002_2062">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.282227 0.925781)"
                      />
                    </clipPath>
                    <clipPath id="clip1_1002_2062">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.282227 0.925781)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
