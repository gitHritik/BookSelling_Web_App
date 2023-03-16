import React from "react";
import { RiHandHeartLine } from "react-icons/ri";
import { AiOutlineDoubleRight } from "react-icons/ai";

const SmallBanner = () => {
  return (
    <div className="w-full h-[30vh] mt-[130px] mb-[122px]">
      <div className="">
        <img
          className="w-full h-[48vh] bg-no-repeat bg-center absolute brightness-[.2] "
          src="images/bg2.jpg"
          alt=""
        />
      </div>
      {/* {left} */}
      <div className="relative text-[white] flex justify-start items-center pt-[138px] font-sans w-full">
        <div className="w-[66.66%] ml-32">
          <RiHandHeartLine className="float-left text-[70px] h-[70px] mr-[20px] mb-2 w-[70px] bg-transparent" />
          <h4 className="text-[30px] capitalize">
            Where To Sell Used Second Hand Books?
          </h4>

          <p className="text-[16px] leading-[1.6em]">
            Post an Ad now and one of you will be lucky to have your ad
            featured. Featured Ad gets more buyer interaction.
          </p>
        </div>
        {/* {right} */}
        <div className="w-[33.33333333%] ml-8">
          <button className="flex items-center px-[35px] py-[15px] text-[#fff] bg-[#cf4436] border-[#e95d4f] font-sans hover:bg-[#e74c3c] ">
            Post Free AD
            <AiOutlineDoubleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SmallBanner;
