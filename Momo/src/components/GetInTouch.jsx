import React from "react";
import { FaClock, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";

const GetInTouch = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-14 px-39 py-16">
      <div className="flex flex-col justify-center items-center gap-2">
        <p className="font-bold text-[39px]">
          Get <span className="text-[#D95103]">In Touch</span>
        </p>
        <p className="font-bold text-[25px] text-[#0C6967]">
          Our Friendly team would love to hear from you
        </p>
      </div>

      <div className="flex justify-center items-stretch gap-10 rounded-2xl p-5 h-fit shadow-[0_0_10px_rgba(0,0,0,0.2)]">
        <div className="flex flex-col items-start bg-[#0C6967] text-white text-[20px] p-8 gap-10 rounded-xl w-116">
          <div className="flex flex-col gap-6">
            <p className="flex justify-items-start items-center gap-2 text-[20px] font-semibold">
              <FaLocationDot size={24} /> Our Address
            </p>
            <p className="italic">New Baneshwor, Kathmandu, Bagmati, Nepal</p>
          </div>
          <div className="flex flex-col gap-6">
            <p className="flex justify-items-start items-center gap-2 font-semibold">
              <IoIosCall size={24} /> Our Contacts
            </p>
            <div className="flex justify-center gap-14">
              <div>
                <p className="font-semibold">Mobile</p>
                <p className="italic">980 5689789</p>
                <p className="italic">9841 275897</p>
              </div>
              <div>
                <p className="font-semibold">Landline</p>
                <p className="italic">01-4783972</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 mb-22">
            <p className="flex justify-items-start items-center gap-2 text-[20px] font-semibold">
              <FaClock size={24} />
              Our Service Time
            </p>
            <div className="flex gap-14">
              <div>
                <p className="font-semibold">MON - FRI</p>
                <p className="italic">10 am - 8 pm</p>
              </div>
              <div>
                <p className="font-semibold">SAT - SUN</p>
                <p className="italic">Closed</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <p className="italic">Get in touch in social networks</p>
            <div className="flex gap-4">
              <a>
                <FaFacebook size={32} />
              </a>
              <a>
                <FaInstagram size={32} />
              </a>
              <a>
                <FaTiktok size={32} />
              </a>
            </div>
          </div>
        </div>

        <form className="flex flex-col justify-center items-start gap-12 px-6 py-10 w-146.75">
          <div className="flex gap-2 w-full">
            <div className="flex flex-col grow gap-2">
              <label htmlFor="">First Name</label>
              <input
                type="text"
                name="fname"
                id="fname"
                className="h-14 border border-[#DFE2E6] rounded-md"
              />
            </div>
            <div className="flex flex-col grow gap-2">
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                name="lname"
                id="lname"
                className="h-14 border border-[#DFE2E6] rounded-md"
              />
            </div>
          </div>
          <div className="flex gap-2 w-full">
            <div className="flex flex-col grow gap-2">
              <label htmlFor="">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="h-14 border border-[#DFE2E6] rounded-md"
              />
            </div>
          </div>
          <div className="flex gap-2 w-full">
            <div className="flex flex-col grow gap-2">
              <label htmlFor="">What can we do for you</label>
              <select
                name="none"
                id="none"
                className="h-14 border border-[#DFE2E6] rounded-md px-4 text-[#98A1B0]"
              >
                <option value="choose" selected>
                  Choose
                </option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="">Message</label>
            <div className="flex">
              <div className="flex justify-center items-center h-14 border border-[#DFE2E6] p-4 rounded-l-md">
                <img src="/images/npflag.png" alt="" />

                <select
                  name="none"
                  id="none"
                  className="text-[#101828] border-none outline-none"
                >
                  <option value="np" selected>
                    +977
                  </option>
                  <option value="afg">+93</option>
                  <option value="ch">+86</option>
                  <option value="fji">+679</option>
                  <option value="kir">+868</option>
                </select>
              </div>
              <input
                type="text"
                name=""
                id=""
                className="h-14 border border-[#DFE2E6] rounded-r-md grow"
              />
            </div>
          </div>

          <div className="w-full">
            <div className="flex flex-col grow gap-2">
              <label htmlFor="">Message</label>
              <input
                type="text"
                name="msg"
                id="msg"
                className="h-41.25 border border-[#DFE2E6] rounded-md w-full"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-[#D95103] py-5 px-18 text-white font-[14px] rounded-[100px] flex items-center"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
