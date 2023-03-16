import React, { useState } from "react";
import { AiFillHeart, AiOutlineEye } from "react-icons/ai";
import { HiLocationMarker, HiOutlineClock } from "react-icons/hi";
import { Link } from "react-router-dom";

let books = [
  {
    id: 1,
    price: "1000",
    img: "/images/b1.jpg",
    title: "The Winner Stands Alone",
    color: "#9c9c9c",
  },
  {
    id: 2,
    price: "100",
    img: "/images/b2.jpeg",
    title: "Paulo Coelho Confession",
    color: "#9c9c9c",
  },
  {
    id: 3,
    price: "500",
    img: "/images/b3.jpg",
    title: "The Fifth Mountain",
    color: "#9c9c9c",
  },
  {
    id: 4,
    price: "170",
    img: "/images/b4.jpg",
    title: "The Winner Stands Alone",
    color: "#9c9c9c",
  },
];

const Featured = () => {
  // const [color, setColors] = useState("");
  const [active, setActive] = useState(false);
  const [names, setNames] = useState([]);

  const handleClick = ([id, color]) => {
    setNames([id, color]);

    console.log(names);
  };

  return (
    <div className="px-[15px] mx-auto w-[1170px] pt-[90px] pb-[60px]">
      <div className="border-b-[2px] border-b-solid text-black text-[24px] font-[600] leading-[60px] m-0 font-sans capitalize border-b-[#e74c3c] text-left w-[247px] mb-3">
        <h1>Featured Used Books</h1>
      </div>
      <div className="flex space-x-8 ">
        {books.map((item) => (
          <div
            key={item.id}
            className="w-[25%] h-full box-content shadow-xl cursor-pointer"
          >
            <div className="relative">
              <div className="absolute flex mb-2 w-full justify-between px-4 items-center bottom-[1px]  text-[#e74c3c] font-[600] text-[16px] z-20">
                <span>{item.price} (Fixed)</span>
                <AiFillHeart
                  onClick={() => handleClick([item.id, item.color])}
                  styles={{
                    color: names[0] === item.id ? "#e74c3c" : "#9c9c9c",
                  }}
                  className={`text-[28px] cursor-pointer`}
                />
              </div>

              <div className="h-[80px] absolute right-0 text-right w-[80px] z-[2] overflow-hidden">
                <span className="absolute bg-[#d2281e] shadow-2xl text-[#fff] text-[12px] block font-[600] font-sans right-[-20px] text-center uppercase top-[20px] transform rotate-[45deg] w-[100px]   ">
                  FEATURED
                </span>
              </div>
              <img
                className="h-[35vh] w-[100%] brightness-50 contrast-125"
                src={item.img}
                alt="book"
              />
            </div>
            <Link to="/books">
              <div className="p-[15px] bg-[#f2f1f1]">
                <div className="space-x-2">
                  <span className="text-[12px] text-[#777]">Stories</span>
                  <span className="text-[12px] text-[#777]">Non-Fiction</span>
                </div>

                <div className="mb-[8px]">
                  <p className="text-[18px] font-[500] text-[#020202] font-sans">
                    {item.title}
                  </p>
                </div>
                <div>
                  <span className="space-x-2 flex justify-start items-center text-[12px] text-[#777]">
                    <HiLocationMarker className="w-3 h-3 text-[12px] text-[#777] mr-[3px] mb-[1px]" />
                    Kullu, Himmachal Prades
                  </span>
                </div>
              </div>
            </Link>
            <div className="flex items-center px-[20px] py-[7px] bg-[#f9f9f9] space-x-5">
              <div className="flex items-center text-[12px] text-[#777]">
                <HiOutlineClock />
                <span className="ml-[6px]">February 12,2023</span>
              </div>
              <div className="flex items-center text-[12px] text-[#777]">
                <AiOutlineEye />
                <span className="ml-[3px]">13 Views</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
