import React from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import { FaCirclePlay, FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";

const Hero = () => {
  return (
    <div className="leading-1.2">
      <div className="flex gap-10 items-center h-screen justify-end relative">
        <div>
          <h3 className="text-[#6B788E] font-light">RESTAURANT</h3>
          <h1 className="text-[61px] font-bold">
            The{" "}
            <span className="bg-[url(/images/one-bg.png)] bg-contain bg-no-repeat bg-center text-white">
              #One
            </span>
            <br />
            Momo <span className="text-[#D95103]">Resturant</span>
          </h1>
          <p className="text-[#252D43] font-semibold text-xl align-middle mb-10">
            More than{" "}
            <span className="text-[#D95103] font-bold text-[25px]">
              20+ Varieties
            </span>{" "}
            of momo available for you
          </p>
          <button className="bg-[#0C6967] flex gap-2 justify-center items-center rounded-full text-white py-5 px-10 ">
            Explore Food Menu <FaArrowRight />
          </button>
        </div>

        <div>
          <img
            src="/images/momos.png"
            alt=""
            className="w-200 relative z-2 pr-10"
          />
          <img
            src="/images/orange-circle.png"
            alt=""
            className="w-110 absolute top-0 right-0"
          />
        </div>
      </div>



      

      
    </div>
  );
};

export default Hero;
