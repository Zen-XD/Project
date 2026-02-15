import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";

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

      <div>
        <div className="flex justify-center items-center py-20 px-39">
          <p className="font-bold text-[39px]">
            <span className="text-[#D95103]">We Offer People</span> The Service
            They Want
          </p>
        </div>

        <div className="flex justify-center items-center py-54 px-104.75 w-full h-auto bg-[url(/images/chef.png)] bg-cover">
          <div className="flex flex-col justify-center items-center gap-12">
            <div className="flex flex-col justify-center gap-2 items-center">
              <p className="text-[49px] text-white font-bold leading-1.2">
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
              <p className="text-[#101828] font-bold text-[31px]">
                Quality Food
              </p>
              <p>
                Only the best food with top quality products and ingredients
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-6 p-10 text-center">
              <img src="/images/party.png" alt="" className="w-18 h-18" />
              <p className="text-[#101828] font-bold text-[31px]">
                Private Party
              </p>
              <p>
                Get the best food for all your private parties and gatherings
              </p>
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

      <div className="flex justify-center items-center gap-24 py-20 px-40">
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
              “Only the best momo you can find in the market. Different
              Varieties of momo to choose from. Will be visiting again soon”
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
    </div>
  );
};

export default Hero;
