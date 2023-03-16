import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-[#202020] text-[#fff]">
      <div className=" pt-[70px] pb-[30px] border-t-[1px] border-solid border-[#343434] ">
        <div className="mx-auto px-[16px] flex justify-around items-center w-[1170px]">
          <div className="w-[25%]">
            <img src="images/f1.png" alt="" />
            <p className="mb-[20px] text-[#fff] leading-[1.6em] text-[16px] font-sans pt-[11px]">
              Best Recycle is Book Recycle. Keep Your Books Flowing.
            </p>
          </div>
          <div className="w-[40.66666667%] pl-4">
            <h6 className="text-[#fff] font-[500] text-[18px] block mb-[18px] font-sans">
              Sell Old Books Online
            </h6>
            <p>
              BookFlow is customer to customer platform like Olx for books. Sell
              and buy old books in India at zero commission. Click 'need help'
              for 24x7 customer care on WhatsApp.
            </p>
          </div>
          <div className="w-[16.66666667%] leading-10 ml-[28px]">
            <h6>Follow US</h6>
            <ul className="list-none ">
              <li className="flex items-center ">
                <BsFacebook className="text-blue-500 text-[23px]  mr-[3px]" />
                Facebook
              </li>
              <li className="flex items-center ">
                <FaInstagramSquare className="text-pink-400  text-[23px]  mr-[3px]" />
                Instagram
              </li>
              <li className="flex items-center ">
                <AiFillTwitterCircle className="text-sky-600  text-[23px]  mr-[3px]" />
                Twitter
              </li>
            </ul>
          </div>
          <div className="w-[16.66666667%] font-sans ">
            <h6 className="mb-[18px]">Quick Links</h6>
            <ul className="list-none leading-8">
              <li>About BookFlow</li>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>Safety Policy</li>
              <li>Buy Second Hand Books Online In India</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t-[1px] border-solid text-center border-[#343434] py-[25px] px-[15px] mx-auto w-[1170px]">
        Copyright 2016-23 © <span className="text-[#e74c3c]">BookFlow</span> All
        Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
