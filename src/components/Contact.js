import React from "react";
// import Contact1 from "../images/contact1.jpeg";
// import Contact2 from "../images/contact2.jpeg";
// import Contact3 from "../images/contact3.jpeg";
// import Contact4 from "../images/contact4.jpeg";
// import Contact5 from "../images/contact5.jpeg";
// import Contact6 from "../images/contact6.jpeg";
import ContactBg from "../images/contact-us.svg";

const Contact = () => {
  // const [bgPosition, setBgPosition] = useState(60); // Start position at 60%

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (bgPosition) {
  //       console.log("");
  //     }
  //     const scrollTop = window.scrollY;
  //     const docHeight =
  //       document.documentElement.scrollHeight - window.innerHeight;
  //     const scrollPercent = (scrollTop / docHeight) * 100;

  //     // Only update the background position from 60% to 100%
  //     const newPosition = Math.min(100, Math.max(60, scrollPercent + 60));
  //     setBgPosition(newPosition);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <section
      className="bg-[#1A1A1A] bg-no-repeat w-full mt-20 relative py-96 bg-cover"
      style={{
        backgroundImage: `url(${ContactBg})`,
        backgroundPosition: `50%`, // Dynamic background position
      }}
    >
      <div className=" w-full text-center px-4">
        <div>
          <h1 className="text-[#FFFFFF] text-3xl md:text-4xl font-light">
            Put your hands first at our <br />
            premium and limited products
          </h1>
        </div>

        <p className="text-[#FFFFFF] text-lg font-light p-5">
          Subscribe to our newsletter.
        </p>

        <input
          className="bg-[#262524] text-[#FFFFFF] text-lg font-normal placeholder:text-center my-5 rounded p-4 max-w-[500px] w-full"
          placeholder="Email"
        />

        <button className="bg-[#FFFFFF] max-w-[500px] flex justify-center items-center my-5 mx-auto w-full space-x-4 text-sm font-semibold py-2 px-10 rounded hover:brightness-75">
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
