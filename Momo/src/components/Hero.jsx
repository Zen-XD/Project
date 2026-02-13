import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="flex gap-10 items-center h-screen justify-end relative">
      <div >
        <h3 className="text-[#6B788E] font-light">RESTAURANT</h3>
        <h1 className="text-[61px] font-bold">
          The <span className="bg-[url(/images/one-bg.png)] bg-contain bg-no-repeat bg-center text-white" >#One</span>
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
          Explore food menu <FaArrowRight />
        </button>
      </div>

      <div>
        <img src="/images/momos.png" alt="" className="w-180 relative z-2 pr-10"/>
        <img src="/images/orange-circle.png" alt="" className="w-100 absolute top-0 right-0"/>
      </div>
    </div>
  );
};

export default Hero;
