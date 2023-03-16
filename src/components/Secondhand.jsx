import React from "react";
import { ReactDOM } from "react-dom/client";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

let books = [
  {
    price: "1000",
    img: "/images/b1.jpg",
    title: "The Winner Stands Alone",
  },
  {
    price: "100",
    img: "/images/b2.jpeg",
    title: "Paulo Coelho Confession",
  },
  {
    price: "500",
    img: "/images/b3.jpg",
    title: "The Fifth Mountain",
  },
  {
    price: "100",
    img: "/images/b2.jpeg",
    title: "Paulo Coelho Confession",
  },
  {
    price: "100",
    img: "/images/b2.jpeg",
    title: "Paulo Coelho Confession",
  },
  {
    price: "100",
    img: "/images/b2.jpeg",
    title: "Paulo Coelho Confession",
  },
  {
    price: "100",
    img: "/images/b2.jpeg",
    title: "Paulo Coelho Confession",
  },
  {
    price: "100",
    img: "/images/b2.jpeg",
    title: "Paulo Coelho Confession",
  },
];

const Secondhand = () => {
  return (
    <div className="px-[15px] mx-auto w-[1170px] h-[full]">
      <div className="border-b-[2px] border-b-solid text-black text-[24px] font-[600] leading-[60px] m-0 font-sans capitalize border-b-[#e74c3c] text-left w-[300px] mb-3">
        <h1>Buy Second Hand Books</h1>
      </div>
      <div className="grid grid-flow-col gap-5 w-[full] mb-[12px] rounded-[10px] overflow-x-scroll scrollbar-hide scroll-smooth ">
        {books.map((item, key) => (
          <div
            key={item.img}
            className="w-[280px] h-[full] box-content rounded-[10px] relative animate-[marquee_8s_linear_infinite]    shadow-xl border-solid border-[1px]  border-[#cecaca] group"
          >
            <div className="relative overflow-hidden group rounded-[10px]">
              <img
                className=" h-[35vh] w-[100%] group group-hover:brightness-50 transition ease-in-out delay-150 origin-center  group-hover:translate-y-1 group-hover:scale-110 duration-300"
                src={item.img}
                alt="book"
              />
              <div className="bg-white h-[11vh] z-0  w-[100.1%] skew-y-[10deg] absolute mt-[-36px] transition ease-in-out delay-150 origin-center group-hover:translate-y-5 group-hover:scale-110  duration-300"></div>
            </div>

            <div className="bg-white z-10 relative px-[10px] rounded-[10px]  py-0">
              <div className=" ">
                <p className="text-[18px] font-[500] text-[#232323] font-sans">
                  {item.title}
                </p>
              </div>
              <div className="space-x-2  my-[2px]">
                <span className="text-[12px] text-[#a0a0a0] ">Stories</span>
                <span className="text-[12px] text-[#a0a0a0]">Non-Fiction</span>
              </div>
              <div className="relative flex pb-[12px] w-full justify-start items-center bottom-[1px] my-[1px]  text-[#e74c3c] font-[600] text-[16px] z-20">
                <span>{item.price}₹</span>
                <span className="text-[#777] ml-[4px] text-[13px] font-[600]">
                  (Fixed)
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Secondhand;
