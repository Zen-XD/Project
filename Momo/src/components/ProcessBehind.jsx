import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";

const ProcessBehind = () => {
  return (
    <div>
      <div className="flex justify-center items-center py-20 px-39 bg-[#F7F9FC]">
        <p className="font-bold text-[39px]">
          <span className="text-[#D95103]">We Offer People</span> The Service
          They Want
        </p>
      </div>

      <div className="flex justify-center items-center py-54 w-full h-auto bg-[url(/images/chef.png)] bg-cover bg-center bg-black/50 bg-blend-darken">
        <div className="flex flex-col justify-center items-center gap-12">
          <div className="flex flex-col justify-center gap-2 items-center">
            <p className="text-[49px] text-white font-bold leading-1.2 w-full">
              Process behind the making
            </p>
            <p className="text-[25px] text-white leading-1.2">
              See how only chefs cooks only the best momos
            </p>
          </div>

          <button className="bg-[#0C6967] flex gap-4 justify-center items-center rounded-full text-white py-4 px-8 ">
            <FaCirclePlay size={32} /> Watch The Video
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-10 py-16 px-40">
        <div className="flex justify-center items-center gap-2">
          <div className="flex flex-col justify-center items-center gap-6 p-10 text-center">
            <img src="/images/qfood.png" alt="" className="w-18 h-18" />
            <p className="text-[#101828] font-bold text-[31px]">Quality Food</p>
            <p>Only the best food with top quality products and ingredients</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-6 p-10 text-center">
            <img src="/images/party.png" alt="" className="w-18 h-18" />
            <p className="text-[#101828] font-bold text-[31px]">
              Private Party
            </p>
            <p>Get the best food for all your private parties and gatherings</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-6 p-10 text-center">
            <img src="/images/catering.png" alt="" className="w-18 h-18" />
            <p className="text-[#101828] font-bold text-[31px]">Categring</p>
            <p>Get the best food for any occasions and gatherings</p>
          </div>
        </div>
        <button className="bg-[#0C6967] flex gap-4 justify-center items-center rounded-full text-white py-5 px-10 ">
          Explore Our Services <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ProcessBehind;
