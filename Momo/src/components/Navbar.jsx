import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center py-4 px-39 justify-between shadow-md h-20 fixed w-full z-999 bg-white">
      <div className="flex items-center gap-2">
        <div className="flex justify-items-start items-center gap-2 w-42 py-4 ">
          <NavLink
            to="./"
            className="flex gap-2 justify-center items-center h-8 hover:cursor-pointer"
          >
            <img src="/images/logo.png" alt="logo" className="w-8 h-full" />
            <h5 className="text-[#0C6967] font-bold text-[25px] pb-1">momos</h5>
          </NavLink>
        </div>

        <div className="flex gap-2 text-[#6B788E] font-medium">
          <NavLink className="py-2 px-3" to="./about">
            About Us
          </NavLink>
          <NavLink className="py-2 px-3" to="./menu">
            Our Menu
          </NavLink>
          <NavLink className="py-2 px-3" to="./services">
            Our Services
          </NavLink>
          <NavLink className="py-2 px-3" to="./allergy-advice">
            Allergy Advice
          </NavLink>
        </div>
      </div>

      <div className="flex justify-end items-center gap-8 h-12 w-90">
        <div className="flex gap-4 h-8">
          <FaFacebook size={32} className="text-[#A6AEBB]" />
          <FaTiktok
            size={32}
            className="bg-[#A6AEBB] text-white p-1.5 rounded-full"
          />
          <FaInstagram
            size={32}
            className="bg-[#A6AEBB] text-white p-1.5 rounded-full"
          />
        </div>
        <NavLink
          to="./contact"
          className="bg-[#D95103] py-3 px-5.5 text-white font-[14px] rounded-[100px] h-10.25 flex items-center"
        >
          Contact Us
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
