import React from "react";
import { MdReportProblem, MdGavel } from "react-icons/md";
import {
  AiOutlineBars,
  AiOutlineStar,
  AiOutlineShareAlt,
  AiFillStar,
} from "react-icons/ai";
import SimpleImageSlider from "react-simple-image-slider";
import { AiOutlinePlusSquare, AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { SlEnvolopeLetter } from "react-icons/sl";
import CardGrid from "./CardGrid";

const Share = [
  { url: "images/d1.jpg" },
  { url: "images/d2.jpg" },
  { url: "images/d3.jpg" },
];

const Description = () => {
  return (
    <section className="bg-[#f9f9f9]">
      <div className="w-[1170px] ">
        <div className="mx-[-15px] flex">
          <div className="w-[1556px] h-[1175px]">
            <div className="w-[103%] flex justify-center items-center">
              <div className="bg-[#fff] overflow-hidden pr-[208px] py-[13px] w-[752px]">
                <ul className="flex justify-center items-center">
                  <li className="flex justify-center items-center left mr-[35px] text-[14px] text-[#999] font-[500]">
                    <span className="mr-[3px]">
                      <AiFillStar />
                    </span>
                    Description
                  </li>
                  <li className="flex ustify-center items-center  left mr-[35px] text-[14px]  text-[#999] font-[500]">
                    <span className="mr-[3px]">
                      <MdGavel />
                    </span>
                    Rating
                  </li>
                  <li className="flex justify-center items-center  left mr-[35px] text-[14px]  text-[#999] font-[500]">
                    <span className="mr-[3px]">
                      <AiOutlineShareAlt />
                    </span>
                    Share
                  </li>
                  <li className="flex  justify-center items-center left mr-[35px] text-[14px]  text-[#999] font-[500]">
                    <span className="mr-[3px]">
                      <AiOutlineBars />
                    </span>
                    Favourite
                  </li>
                  <li className="flex  justify-center items-center left mr-[35px] text-[14px]  text-[#999] font-[500]">
                    <span className="mr-[3px]">
                      <MdReportProblem />
                    </span>
                    Report
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-[30px] w-[79.666667%] flex flex-col justify-center items-center ml-[112px]">
              <div className=" relative overflow-hidden bg-[#fff] py-[25px] px-[10px] flex justify-center items-center">
                <div className=" w-[66.66666667%] ">
                  <div className="mr-[22px]">
                    <div>
                      <div className="max-[100%]">
                        <div className="project__images">
                          <SimpleImageSlider
                            width={465}
                            height={260}
                            images={Share}
                            showBullets={true}
                            showNavs={true}
                          />
                        </div>
                      </div>
                      <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="w-[33.33333333%]">
                  <div>
                    <ul className="p-0 m-0 list-none">
                      <li className="border-b-[1px] border-solid border-[#f5f5f5] py-[7px] text-[#777] text-[14px] font-[500]">
                        Price :
                        <span className="text-inherit font-[500] text-[14px] text-[#242424] ">
                          500₹
                          <span>(Negotiable)</span>
                        </span>
                      </li>
                      <li className="border-b-[1px] border-solid border-[#f5f5f5] py-[7px] text-[#777] text-[14px] font-[500]">
                        Type :
                        <span className="text-inherit font-[500] text-[14px] text-[#242424] ">
                          Sell
                        </span>
                      </li>
                      <li
                        className="border-b-[1px] border-solid border-[#f5f5f5] py-[7px] text-[#777] text-[14px] font-[500]"
                        ss
                      >
                        Condition :
                        <span className="text-inherit font-[500] text-[14px] text-[#242424] ">
                          New
                        </span>
                      </li>
                      <li className="border-b-[1px] border-solid border-[#f5f5f5] py-[7px] text-[#777] text-[14px] font-[500]">
                        Publication/Author :
                        <span className="text-inherit font-[500] text-[14px] text-[#242424] ">
                          Pearson OXFORD TRINITY
                        </span>
                      </li>
                      <li className="border-b-[1px] border-solid border-[#f5f5f5] py-[7px] text-[#777] text-[14px] font-[500]">
                        MRP(₹) :
                        <span className="text-inherit font-[500] text-[14px] text-[#242424] ">
                          500
                        </span>
                      </li>
                      <li className="border-b-[1px] border-solid border-[#f5f5f5] py-[7px] text-[#777] text-[14px] font-[500]">
                        Edition(Year) :
                        <span className="text-inherit font-[500] text-[14px] text-[#242424] ">
                          2022
                        </span>
                      </li>
                      <li className="border-b-[1px] border-solid border-[#f5f5f5] py-[7px] text-[#777] text-[14px] font-[500]">
                        No. of pages :
                        <span className="text-inherit font-[500] text-[14px] text-[#242424] ">
                          500
                        </span>
                      </li>
                      <li className="border-b-[1px] border-solid border-[#f5f5f5] py-[7px] text-[#777] text-[14px] font-[500]">
                        Type Of Book :{" "}
                        <span className="text-inherit font-[500] text-[14px] text-[#242424] ">
                          Textbook{" "}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="mt-[30px]"></div>
                </div>
              </div>
              {/* {new} */}
              <div>
                <div>
                  <div className="mt-[20px] p-[25px] bg-[#fff] mb-[30px] pb-0">
                    <span className="text-[20px] text-[#242424] font-[500] font-sans">
                      Description
                    </span>

                    <p className="text-[15px] mb-[30px] leading-[24px] text-[#777]">
                      This Set contains all the Major Subjects of Marrow Edition
                      6: Surgery Vol.1 and 2, Medicine Vol: 1, 2 and 3,{" "}
                    </p>
                    <p className="text-[15px] mb-[30px] leading-[24px] text-[#777]">
                      & Pediatrics, Obstetrics and Gynecology. The set is New
                      (unBoxed!!) and books are fine.{" "}
                    </p>
                    <p className="text-[15px] mb-[30px] leading-[24px] text-[#777]">
                      Note: the buyer has to pay for the half delivery expanses,
                      rest will be free.{" "}
                    </p>
                    <p className="text-[15px] mb-[30px] leading-[24px] text-[#777]">
                      Don’t worry this is not fake or scam. You can try me as
                      I’m also a medico. The price is Negotiable. Please feel
                      free to contact on 9499554910.
                    </p>
                    <div className="clear-both my-[16px] mx-auto space-x-2">
                      <div className="leading-[32px] flex space-x-1">
                        <BsWhatsapp className="text-[32px] cursor-pointer text-[#4DC247]" />
                        <BsFacebook className="text-[32px] cursor-pointer text-blue-500" />
                        <AiFillTwitterCircle className="text-[35px] cursor-pointer text-sky-600 " />
                        <AiOutlinePlusSquare className="text-[35px] cursor-pointer text-sky-600 " />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-center text-[20px] text-[#777]">
                        Mention
                        <span className="text-[#e74c3c] mx-[5px]">
                          BookFlow
                        </span>
                        when contacting seller to get a good deal.
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* {new} */}
          <div className="w-[33.33333333%]">
            <div>
              <div className="mt-[-120px] shadow-sm z-50 absolute">
                <div className="py-[25px] w-[358px] px-[20px] border-b-[1px] border-solid border-[#f5f5f5] bg-[#f5f5f5]">
                  <img
                    src="icon.jpg"
                    alt=""
                    className="rounded-[50px] float-left mr-[10px] w-[70px] h-[70px]"
                  />
                  <div className="relative overflow-hidden">
                    <div className="flex  items-center">
                      <AiOutlineStar className="text-[12px] text-[#f58936]" />
                      <AiOutlineStar className="text-[12px] text-[#f58936]" />
                      <AiOutlineStar className="text-[12px] text-[#f58936]" />
                      <AiOutlineStar className="text-[12px] text-[#f58936]" />
                      <AiOutlineStar className="text-[12px] text-[#f58936]" />
                      <span className="text-[14px] text-[#f58936] ml-1">0</span>
                    </div>

                    <span className="text-[#242424] font-sans text-[20px] font-[600] leading-[22px] mb-[2px] block">
                      Swayam{" "}
                    </span>
                    <span className="text-[14px] text-[#e74c3c]">
                      View Detail
                    </span>
                  </div>
                </div>
                <div className="bg-[#fff] p-[25px]">
                  <form action="">
                    <span className="text-[18px] text-[#242424] font-[500] mb-[45px] font-sans block relative ">
                      Send Message
                      <div className="border-b-[1px] h-[2px] mt-[4px] w-[103px] bg-[#cf4436]"></div>
                    </span>
                    <div className="mb-[15px]">
                      <textarea
                        className="w-[308px] bg-[#fff] bg-none border-[1px] border-solid border-[#e1e1e1] rounded-none shadow-none text-[14px] h-[122px] py-[15px] px-[12px] transition-all duration-[0.2s] "
                        name="name"
                        id="name"
                        cols="30"
                        rows="10"
                      ></textarea>
                    </div>
                    <div className="text-[#fff] bg-[#e74c3c] text-[14px] leading-[1px] py-[14px] justify-center items-center px-[15px] border-0 border-[#e95d4f] w-full mt-[15px] capitalize flex font-[600] ">
                      <span className="mr-[4px] ">
                        <SlEnvolopeLetter className="font-[600] text-white" />
                      </span>
                      Send Message
                    </div>
                  </form>
                  <div className="text-[#fff] bg-[#25d366] text-[14px] leading-[1px] py-[14px] justify-center items-center px-[15px] border-0 border-[#25d366] w-full mt-[15px] capitalize flex font-[600]">
                    <span className="mr-[4px] ">
                      <BsWhatsapp className="font-[600] text-white" />
                    </span>
                    whatsapp
                  </div>
                </div>
              </div>
              <div className="absolute mt-[390px]">
                <div className="bg-[#e74c3c] py-[12px] px-[20px] mt-[30px] relative flex items-center justify-start">
                  <span className="text-[#fff] text-[26px] mr-[12px] align-middle rotate-[-30deg]">
                    <HiOutlineSpeakerphone />
                  </span>

                  <span className="text-[#fff] text-[20px] font-[600]">
                    Sell
                  </span>
                  <img
                    className="absolute right-0 opacity-[0.3] w-[15%]"
                    src="images/m.png"
                    alt=""
                  />
                </div>

                <div className="relative overflow-hidden mt-[30px] bg-[#fff]">
                  <ul>
                    <li className="py-[13px] px-[22px] relative bg-[#f5f5f5]">
                      <div>All Categories</div>
                    </li>

                    <li className="border-l-[3px] py-[13px] px-[22px] realtive border-solid border-l-blue-800 border-b-[1px] border-b-[#eee] flex justify-between items-center">
                      <p className="font-[500] text-[#242424] text-[15px] font-sans">
                        Competitive Exam
                      </p>
                      <span className=" text-[15px] text-[#a1a1a1]">1895</span>
                    </li>
                    <li className="border-l-[3px] py-[13px] px-[22px] realtive border-solid border-l-green-800 border-b-[1px] border-b-[#eee] flex justify-between items-center">
                      <p className="font-[500] text-[#242424] text-[15px] font-sans">
                        Engineering
                      </p>

                      <span className=" text-[15px] text-[#a1a1a1]">647</span>
                    </li>
                    <li className="border-l-[3px] py-[13px] px-[22px] realtive border-solid border-l-[#000] border-b-[1px] border-b-[#eee] flex justify-between items-center">
                      {" "}
                      <p className="font-[500] text-[#242424] text-[15px] font-sans">
                        Magazines
                      </p>
                      <span className=" text-[15px] text-[#a1a1a1]">36</span>
                    </li>
                    <li className="border-l-[3px] py-[13px] px-[22px] realtive border-solid border-l-orange-400 border-b-[1px] border-b-[#eee] flex justify-between items-center">
                      <p className="font-[500] text-[#242424] text-[15px] font-sans">
                        Management Books
                      </p>
                      <span className=" text-[15px] text-[#a1a1a1]">356</span>
                    </li>
                    <li className="border-l-[3px] py-[13px] px-[22px] realtive border-solid border-l-pink-500 border-b-[1px] border-b-[#eee] flex justify-between items-center">
                      {" "}
                      <p className="font-[500] text-[#242424] text-[15px] font-sans">
                        Medical
                      </p>
                      <span className=" text-[15px] text-[#a1a1a1]">369</span>
                    </li>
                    <li className="border-l-[3px] py-[13px] px-[22px] realtive border-solid border-l-purple-800 border-b-[1px] border-b-[#eee] flex justify-between items-center">
                      <p className="font-[500] text-[#242424] text-[15px] font-sans">
                        School Books
                      </p>
                      <span className=" text-[15px] text-[#a1a1a1]">1290</span>
                    </li>
                    <li className="border-l-[3px] py-[13px] px-[22px] realtive border-solid border-l-amber-800 border-b-[1px] border-b-[#eee] flex justify-between items-center">
                      {" "}
                      <p className="font-[500] text-[#242424] text-[15px] font-sans">
                        Stories
                      </p>
                      <span className=" text-[15px] text-[#a1a1a1]">1191</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-[30px] overflow-hidden relative  rounded-none shadow-none mb-0 bg-[#fff] border-[1px] border-solid border-[#eee] ">
                  <div className="bg-[#fff] border-b-[1px] border-b-solid border-b-[#eee] border-[#eee] text-[#232323] p-0">
                    <div className="text-[16px] font-[550] bg-[#f5f5f5] border-[#ddd] capitalize">
                      <span className="block p-[15px] ">
                        Read Before You Deal
                      </span>
                    </div>
                  </div>

                  <div className="border-t-[#eee] bg-[#fff] py-[20px] px-[25px]">
                    <ol className="pl-[15px] list-decimal">
                      <li className="mb-0 relative pl-[2px] text-[14px] text-[#828485]">
                        {" "}
                        Please follow Government guidelines for
                        <p className="text-[#e74c3c]">COVID19</p>
                      </li>
                      <li className="mb-0 relative pl-[2px] text-[14px] text-[#828485]">
                        Use a safe location to meet seller
                      </li>
                      <li className="mb-0 relative pl-[2px] text-[14px] text-[#828485]">
                        Never provide your personal or banking information
                      </li>
                      <li className="mb-0 relative pl-[2px] text-[14px] text-[#828485]">
                        Beware of unrealistic offers
                      </li>
                      <li className="mb-0 relative pl-[2px] text-[14px] text-[#828485]">
                        <span className="text-[#e74c3c] underline">
                          {" "}
                          More Tips
                        </span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
