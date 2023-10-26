"use client";
import { useUserNextAuth } from "@/Context/useNextAuthContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import Typewriter from "typewriter-effect";

const LandingPage = () => {
  const router = useRouter();
  const { isLogin } = useUserNextAuth();
  // CSSPAttern2
  const scrollToContact = () => {
    const element = document.getElementById("ContactUs");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <section
        className={`text-gray-100  md:h-[70vh] h-[85vh] bg-blue-700  -mx-5  pt-32   body-font `}
      >
        <div className="flex  absolute flex-col  h-[60vh]  left-5 md:left-10  justify-center items-center gap-5">
          <button>
            <i className="uil uil-instagram" />
          </button>
          <button>
            <i className="uil uil-github" />
          </button>
          <button>
            <i className="uil uil-twitter  " />
          </button>{" "}
          <button>
            <i className="uil uil-linkedin" />
          </button>
        </div>

        <div className=" mx-auto gap-5 justify-center md:justify-between container  md:flex-row-reverse  flex-col flex  h-full items-center">
          {/* <div className=" flex items-center relative md:w-[400px] md:h-[400px]   w-60 h-60    justify-center backdrop-blur-sm">
            <div className="      grid place-items-center p-10      border-white">
              <Image
                width={200}
                height={200}
                alt="Gaurav Narnaware"
                src="/gaurav.svg"
                priority={1}
                className="  float  rounded-full   w-full h-full "
              />
            </div>
             <div className="absolute left-[70%] w-fit top-0   p-2 float    font-semibold   backdrop-blur-lg z-40 bg-white/25   rounded-sm ">
              Web&nbsp;Developer
            </div>

            <div className="absolute right-[80%] w-fit top-[45%]  p-2 float    font-semibold   backdrop-blur-lg z-40 bg-white/25   rounded-sm ">
              App&nbsp;Developer
            </div>
            <div className="absolute left-[70%] w-fit bottom-0 p-2 float    font-semibold   backdrop-blur-lg z-40 bg-white/25   rounded-sm ">
              Software&nbsp;Developer
            </div> 
          </div> */}
          <div className=" w-full justify-center md:justify-start mt-10  md:items-start  items-center gap-5 md:gap-10   flex-col flex font-bold">
            {/* <h1 className=" md:text-4xl sm:text-3xl text-xl  flex justify-center items-center">
              <span className="mr-3"> I am </span>
              <Typewriter
                options={{
                  strings: ["Web Developer", "Software Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1> */}
            <h1 className="  text-xl md:text-6xl text-center">
              Simplify Your Digital Journey
            </h1>
            <div className="flex flex-col justify-center md:items-start items-center gap-1">
              <h5 className="font-light  text-sm md:text-3xl  ">
                Download Digital Product at Lowest Cost.
              </h5>
            </div>
            <div className="text-xl w-full  items-center md:justify-start justify-center  md:flex-row flex-col flex gap-5">
              <button
                onClick={() => {
                  router.push("/Products");
                }}
                className="shadow-md pBtn px-10 w-fit     py-2 rounded-sm"
              >
                View Product
              </button>
              {!isLogin && (
                <button
                  onClick={() => {
                    router.push("Auth/SignIn");
                  }}
                  className="shadow-md  w-fit    px-10 py-2 rounded-sm"
                >
                  Sign In
                </button>
              )}
            </div>
            <div className="relative font-bold float flex gap-5 justify-center items-center py-5 rounded-full">
              <div className=" w-10 rounded-full h-20 grid place-items-center border-2">
                <div className="w-1 bg-gray-300 h-10" />
              </div>
              <div>Swipe Up</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
