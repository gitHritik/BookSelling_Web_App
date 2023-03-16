import React, { useState } from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { RiWechatLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";

const GetButton = () => {
  const [click, setClick] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setClick(!click);
  };
  return (
    <div
      className="bottom-[14px] left-[16px] opacity-[1] transition-op
     duration-[0.5s] ease box-border text-left fixed z-[160000160]"
    >
      <div
        className={`h-[576px] inline-flex translate-y-[0px] duration-[0.2s] flex-col-reverse mr-auto justify-start items-center ${
          click ? "visible" : "invisible"
        } animate-fade  `}
      >
        <div className="flex m-[7px] relative justify-start max-h-[50px] ">
          <BsWhatsapp className="flex-shrink-0 w-[50px] h-[50px] order-[1] p-[10px] box-border cursor-pointer rounded-[50%]  overflow-hidden shadow-sm transition-all duration-[0.5s] ease relative z-[200]  border-[0px] bg-[#4DC247] border-[rgb(77, 194, 71)] text-white" />
        </div>
        <div className="flex m-[7px] relative justify-start max-h-[50px]">
          <FaInstagramSquare className="flex-shrink-0 w-[50px] h-[50px] order-[1]  p-[10px] box-border cursor-pointer overflow-hidden shadow-sm transition-all duration-[0.5s] ease relative z-[200]  border-[0px] rounded-[50%]  bg-[#FF318E] text-white" />
        </div>
      </div>
      <div
        className="flex m-[7px] relative justify-start max-h-[50px] animate-[wiggle_0.4s_ease-in-out_1] hover:shadow-black group"
        onClick={handleClick}
      >
        {click ? (
          <RxCross1 className="flex-shrink-0 w-[50px] h-[50px] order-1 relative  p-[15px] box-border rounded-[50%] cursor-pointer  overflow-hidden group-hover:animate-[wiggle_0.4s_ease-in-out_1] transition-all z-[200]  group-hover:z-[400] block border-0 bg-[#FF6550] text-white  " />
        ) : (
          <RiWechatLine className="flex-shrink-0 w-[50px] h-[50px] order-1  p-[10px] box-border rounded-[50%] cursor-pointer overflow-hidden transition-all group-hover:animate-[wiggle_0.4s_ease-in-out_1] relative z-[300] block border-0 bg-[#FF6550] text-white   " />
        )}
      </div>
      <div></div>
    </div>
  );
};

export default GetButton;
