import React from "react";
import { CiMobile1, CiLocationArrow1 } from "react-icons/ci";

const Books = () => {
  return (
    <section className="relative">
      <div className="w-[full] text-[#fff] ">
        <img
          src="images/books.png"
          className=" h-[367px] w-full bg-center brightness-[.3] "
          alt=""
        />
        <div className="mx-[98px]">
          <div className="w-[77.66666667%] absolute z-5 bottom-[-4px] flex flex-col justify-center items-start">
            <div>
              <div className="text-[#fff] font-[500] leading-[12px] py-[15px] inline-block ">
                <ul className="flex text-[15px] font-sans">
                  <li>
                    Engeenering{" "}
                    <span className="ml-[12px]  border-r-[2px] border-solid border-[#f5f5f5]"></span>
                  </li>
                  <li className="ml-[15px]">Others</li>
                </ul>
              </div>

              <div className="overflow-hidden relative ">
                <ul className="flex justify-center items-center">
                  <li>
                    <h3 className="text-[#fff] font-[300] text-[30px]  ">
                      Total English class 10 icse
                    </h3>{" "}
                  </li>
                  <li className="mt-[2px]">
                    <span className="bg-[#e22c28] rounded-[4px] px-[8px] py-[5px] text-[12px] ml-[14px] mt-[12x] font-serif font-[500]">
                      Featured
                    </span>
                  </li>
                </ul>
              </div>
              <div className="flex text-[15px] text-[#fff] justify-between items-center mt-[8px] w-[154%]">
                <p className="flex justify-center items-center">
                  <span>
                    <CiLocationArrow1 className="text-[#e74c3c] text-[13px] mr-[10px]" />
                  </span>
                  Amravati, Maharashtra
                </p>

                <button className="flex justify-center items-center ml-[19px] px-[15px] py-[10px] text-[14px] space-x-1 transition-all ease-in-out duration-[0.25s] font-[600] font-sans uppercase text-[#fff] bg-[#e74c3c] border-[#e95d4f] hover:bg-[#d13e2e]">
                  <span>
                    <CiMobile1 className="mr-[9px]" />
                  </span>
                  Click to View
                </button>
              </div>
            </div>
            <div className="flex justify-between border-[rgba(255,255,255,.2)] border-solid border-t-[1px] w-[63%] mt-[20px] py-[15px] overflow-hidden">
              <ul className="flex justify-between">
                <li className="text-[13px] font-[600] text-[#fff]">
                  March 1, 2023
                </li>
                <li className="text-[13px] font-[600] ml-[23px]">
                  <span className="text-[#e74c3c]">Views</span>
                  <span>
                    <b className="ml-[2px]">8</b>
                  </span>
                </li>
              </ul>
              <div>
                <ul>
                  <li className="text-[20px] font-[600] text-[#e74c3c] space-x-2">
                    <span>
                      700₹
                      <span className="ml-[4px]">(Negotiable)</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Books;
