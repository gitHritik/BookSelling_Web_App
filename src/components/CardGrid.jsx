import React, { useRef } from "react";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

const cardItems = [
  {
    name: "Stories",
    ads: "2 Ads",
    desc: "Comics, Fiction, Non-Fiction, Others",
    background: "bg-[#3498db]",
  },
  {
    name: "Competitive Exam",
    ads: "2020 Ads",
    desc: "CAT GATE GRE, Engineering Exams,1BPS PO, Management",
    background: "bg-[#9B59B6]",
  },
  {
    name: "Engineering Exams",
    ads: "722 Ads",
    background: "bg-[#2ecc71]",
  },
  {
    name: "Medical",
    ads: "371 Ads",
    desc: "Homeopathy, MBBS, Medicine, Nursing",
    background: "bg-[#34495e]",
  },
  {
    name: "Magazines",
    ads: "36 Ads",
    desc: "Automobile, Bollywood/Hollywood, Business & Law, Education",
    background: "bg-[#53b9c5]",
  },
  {
    name: "School Books",
    ads: " 1391 Ads",
    desc: "Arts, Commerce, Others, Science",
    background: "bg-[#f05458]",
  },
];

const CardGrid = () => {
  const sideScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
    }, speed);
  };
  const contentWrapper = useRef(null);

  return (
    <div
      ref={contentWrapper}
      className="grid grid-flow-col overflow-x-clip scrollbar-hide scroll-smooth w-full"
    >
      {cardItems.map((item) => (
        <div
          key={item.name}
          className={`${item.background} text-white animate-[marquee_8s_linear_infinite] animationPlayState-[paused] py-[70px] px-[40px] text-center relative min-h-[377px] w-[380px] `}
        >
          <BsFillJournalBookmarkFill className="h-11 w-11 m-auto text-center" />
          <p className="text-xl mt-3">{item.name}</p>
          <p className="font-bold">{item.ads}</p>

          <p className="text-white capitalize py-[5px] space-x-4 px-[0px] font-semibold mt-2">
            {item.desc}
          </p>
          <div className="w-[111px] m-auto mt-5 text-white border-[1px] border-solid border-white uppercase hover:bg-white hover:text-black transition transform duration-150 ease-in-out">
            <button className="py-[12px] px-[22px] space-x-1 text-[14px] ">
              View All
            </button>
          </div>
        </div>
      ))}
      <div className="absolute flex w-full">
        <button
          className=" mt-52 ml-[1px] right-0 cursor-pointer scroll-smooth text-white px-2 py-4 bg-[#cf4436]"
          onClick={() => {
            sideScroll(contentWrapper.current, 0.2, 10, -100);
          }}
        >
          <AiOutlineLeft />
        </button>
        <button
          className="mt-52 absolute mr-[1px] cursor-pointer right-0 text-white px-2 py-4 scroll-smooth bg-[#cf4436] "
          onClick={() => {
            sideScroll(contentWrapper.current, 0.2, 10, 100);
          }}
        >
          <AiOutlineRight />
        </button>
      </div>
    </div>
  );
};

export default CardGrid;
