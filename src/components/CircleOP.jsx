import React from "react";
import { AiOutlineAndroid } from "react-icons/ai";
import { TbBooks } from "react-icons/tb";
import { RiWechatLine } from "react-icons/ri";

const CircleOP = () => {
  return (
    <div className="py-[100px] px-0 w-[1170px] flex flex-col justify-center items-center ">
      <h1 className="w-full text-center mb-3 text-[#222] text-[28px] font-sans font-[500] ml-[198px] pb-[20px] relative capitalize">
        How To <span className="text-[#e74c3c] ">Sell Used Books</span> On
        BookFlow?
      </h1>
      <hr />
      <hr />
      <div className="w-full relative min-h-[1px] px-[15px] flex justify-center ml-52 items-center">
        {/* {copy} */}
        <div className="w-[33.33333333%]">
          <div>
            <div className="h-[140px] w-full bg-center bg-scroll bg-no-repeat">
              <img className="absolute ml-[125px]" src="images/r1.png" alt="" />
              <div className=" z-20 absolute mt-[41px] ml-[159px]">
                <AiOutlineAndroid className="text-[63px] text-center text-[#fff] leading-[137px] before:content-[\f100] mb-[22px]" />
              </div>
            </div>
            <div className="mt-[35px] text-center">
              <h2
                className="text-[#232323] font-sans font-[600] text-[18px] capi
               mb-[15px]"
              >
                Simply Register
              </h2>

              <p className="mb-[10px] leading-[1.6em] text-[16px] font-sans text-[#6f6f6f]">
                Register via BookFlow app or web. You can create account
                socially also
              </p>
            </div>

            <div className="absolute top-[65px] right-[675px]">
              <img
                className="block max-w-[100%] h-auto"
                src="images/r1_1.png"
                alt=""
              />
            </div>
            <div className="absolute top-[115px] left-[224px] text-white font-[600]">
              01
            </div>
          </div>
        </div>
        {/* {new One} */}
        <div className="w-[33.33333333%]">
          <div>
            <div className="h-[140px] w-full bg-center bg-scroll bg-no-repeat">
              <img className="absolute ml-[125px]" src="images/r2.png" alt="" />
              <div className=" z-20 absolute mt-[41px] ml-[159px]">
                <TbBooks className="text-[63px] text-center text-[#fff] leading-[137px] before:content-[\f100] mb-[22px]" />
              </div>
            </div>
            <div className="mt-[35px] text-center">
              <h2
                className="text-[#232323] font-sans font-[600] text-[18px] capi
               mb-[15px]"
              >
                Post Ad
              </h2>

              <p className="mb-[10px] leading-[1.6em] text-[16px] font-sans text-[#6f6f6f]">
                Fill required details and submit book ad you want to sell.
              </p>
            </div>

            <div className="absolute top-[34px] right-[297px]">
              <img
                className="block max-w-[100%] h-auto"
                src="images/r2_2.png"
                alt=""
              />
            </div>
            <div className="absolute top-[115px] left-[604px] text-white font-[600]">
              02
            </div>
          </div>
        </div>

        {/* {new one} */}
        <div className="w-[33.33333333%]">
          <div>
            <div className="h-[140px] w-full bg-center bg-scroll bg-no-repeat">
              <img className="absolute ml-[125px]" src="images/r3.png" alt="" />
              <div className=" z-20 absolute mt-[41px]  ml-[159px]">
                <RiWechatLine className="text-[63px] text-center text-[#fff] leading-[137px] before:content-[\f100] mb-[22px]" />
              </div>
            </div>
            <div className="mt-[35px] text-center">
              <h2
                className="text-[#232323] font-sans font-[600] text-[18px] capi
               mb-[15px]"
              >
                Need Help?
              </h2>

              <p className="mb-[10px] leading-[1.6em] text-[16px] font-sans text-[#6f6f6f]">
                Wherever you stuck in process, just tap on floating chat icon on
                bottom left.
              </p>
            </div>

            <div className="absolute top-[115px] left-[984px] text-white font-[600]">
              03
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircleOP;
