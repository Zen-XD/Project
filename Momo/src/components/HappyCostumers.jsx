import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const HappyCostumers = () => {
  return (
    <div className="flex justify-center items-center gap-24 py-20 px-40 bg-[#FAFBFB]">
      <div className="flex flex-col gap-14 w-xl">
        <div className="flex flex-col gap-2">
          <p className="text-[40px] font-bold">
            200+ <span className="text-[#D95103]">Happy Customers</span>
          </p>
          <p className="text-[25px] text-[#0C6967] font-bold">
            What our customers say about us
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-[#252D43] text-[24px] italic leading-1.4 ">
            “Only the best momo you can find in the market. Different Varieties
            of momo to choose from. Will be visiting again soon”
          </p>
          <p className="text-[#252D43] text-[31px] font-bold leading-1.4">
            Reason Gurung
          </p>
        </div>
        <div className="flex gap-4">
          <button className="flex justify-center items-center border rounded-full opacity-20 h-12 w-12">
            <FaArrowLeft />
          </button>
          <button className="flex justify-center items-center border rounded-full opacity-20 h-12 w-12">
            <FaArrowRight className="opacity" />
          </button>
        </div>
      </div>

      <div>
        <img src="/images/cust.png" alt="" className="w-114 h-144" />
      </div>
    </div>
  );
};

export default HappyCostumers;
