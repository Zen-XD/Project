import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 px-40 py-14 leading-1.2 border-t border-t-[#C2C7D0]">
      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-3 w-98 items-start">
          <div className="flex gap-3 justify-center items-center ">
            <img src="/images/logo.png" alt="logo" className="w-10 h-10" />
            <h5 className="text-[#0C6967] font-bold text-[31px] pb-2">momos</h5>
          </div>
          <p className="text-[#6B788E] leading-1.8">
            Lorem ipsum dolor sit amet consectetur. Elit sem tempor egestas
            molestie. Volutpat quis egestas porttitor turpis sit in. Lorem nunc
            nullam morbi urna amet suspendisse nullam ac vivamus.
          </p>
        </div>

        <div className="flex gap-12">
          <div className="flex flex-col gap-4 w-42">
            <h5 className="text-[#0C6967] font-bold text-[25px]">momos</h5>
            <div>
              <p className="text-[#252D43] hover:text-[#D95103] hover:underline">
                About Us
              </p>
              <p className="text-[#252D43] hover:text-[#D95103] hover:underline">
                Our Menu
              </p>
              <p className="text-[#252D43] hover:text-[#D95103] hover:underline">
                Our Services
              </p>
              <p className="text-[#252D43] hover:text-[#D95103] hover:underline">
                Contact Us
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-42">
            <h5 className="text-[#0C6967] font-bold text-[25px]">Legals</h5>
            <div>
              <p className="text-[#252D43] hover:text-[#D95103] hover:underline">
                Terms & Conditions
              </p>
              <p className="text-[#252D43] hover:text-[#D95103] hover:underline">
                Privacy Policy
              </p>
              <p className="text-[#252D43] hover:text-[#D95103] hover:underline">
                Support
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-42">
            <h5 className="text-[#0C6967] font-bold text-[25px]">Follow Us</h5>
            <div className="flex gap-4">
              <a className="flex justify-center items-center bg-[#A6AEBB] text-white h-10 w-10 rounded-full">
                <FaFacebookF size={20} />
              </a>
              <a className="flex justify-center items-center bg-[#A6AEBB] text-white h-10 w-10 rounded-full">
                <FaLinkedinIn size={20} />
              </a>
              <a className="flex justify-center items-center bg-[#A6AEBB] text-white h-10 w-10 rounded-full">
                <FaXTwitter size={20} />
              </a>
            </div>
            <div className="flex gap-4">
              <a className="flex justify-center items-center bg-[#A6AEBB] text-white h-10 w-10 rounded-full">
                <FaYoutube size={20} />
              </a>
              <a className="flex justify-center items-center bg-[#A6AEBB] text-white h-10 w-10 rounded-full">
                <FaInstagram size={20} />
              </a>
              <a className="flex justify-center items-center bg-[#A6AEBB] text-white h-10 w-10 rounded-full">
                <FaTiktok size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr className="w-full border-t border-[#DFE2E6]" />

      <p className="text-[#6B788E]">
        Copyright ©️2026 Everest Momo Pvt Ltd. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
