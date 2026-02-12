import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center py-4 px-39 justify-between shadow-2xl">
      <div className="flex items-center gap-16">
        <div className="flex items-center gap-2 py-4">
          <img src="/images/logo.png" alt="logo" className="w-8 h-8" />
          <h2 className="text-[#0C6967] font-bold text-[25px]">momos</h2>
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

      <div className="flex items-center gap-2">
        <div className="flex gap-4">
          <FaFacebook size={32} className="text-[#A6AEBB]" />
          <FaTiktok size={32} />
          <FaInstagram size={32} />
        </div>
        <NavLink
          to="./contact"
          className="bg-[#D95103] py-3 px-5.5 text-white rounded-[100px]"
        >
          Contact Us
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
