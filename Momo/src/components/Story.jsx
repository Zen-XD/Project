import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Story = () => {
  return (
    <div className="flex justify-center items-center gap-45 py-16 px-39">
      <div className="flex justify-center items-end">
        <div className="bg-[#0C6967] absolute h-126.25 w-113 rounded-t-full z-0"></div>
        <img src="/images/tup.png" alt="" className="w-100 z-10" />
      </div>

      <div className="flex flex-col justify-center items-start gap-10 w-138">
        <p className="font-bold text-[39px]">
          Why Customers <span className="text-[#D95103]">Love Us</span>
        </p>
        <p className="text-[#6B788E] text-[20px] leading-1.4 text-justify">
          Lorem ipsum dolor sit amet consectetur. Sed diam dolor vivamus nibh
          fermentum vulputate tortor. Egestas facilisi luctus turpis arcu
          dignissim. Amet neque enim etiam purus id. Tortor sit orci blandit
          cursus turpis.
        </p>
        <button className="bg-[#0C6967] flex gap-2 justify-center items-center rounded-full text-white py-5 px-10 ">
          Explore Our Story <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Story;
