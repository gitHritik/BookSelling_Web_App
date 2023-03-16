import React from "react";

const Banner = () => {
  return (
    <div className="">
      <img className="absolute h-full w-full" src="/images/bg.jpg" alt="" />
      <div className="relative flex justify-center items-center w-[1150px] h-[100vh] px-14 mx-auto ">
        <div className="flex flex-col justify-center items-start w-[58.3%]">
          <h1 className="text-[#191919] font-normal text-[46px] pr-[90px] leading-[60px] capitalize">
            <b>6173</b> Used Books On Sale
          </h1>
          <hr className="w-[75px] h-[4px] bg-black mb-2" />
          <p className="text-[20px] text-black leading-[27px] mb-[10px] ">
            Buy And Sell Used Books In India. Search And Buy Second Hand Books
            Near You. Post Free Ad To Sell Old Books In City. Download the app
            now.
          </p>
          <button className="text-white font-bold text-[14px] space-x-1 font-sans border-[#e95d4f] bg-[#cf4436] hover:bg-[#dc7b30] px-[25px] py-[11px] mt-3">
            Sell used books
          </button>
        </div>
        <div className="flex flex-col justify-center items-start rounded-[15px] w-[41.7%] bg-[#fff] shadow-md mx-auto my-[0px] p-[30px]">
          <div className="mb-[15px] flex flex-col">
            <label className="text-left text-[#232323] font-[600] text-[14px]">
              Title
            </label>
            <input
              className="bg-white border-[1px] border-solid border-[##232323] rounded-[0px] shadow-none text-[#555] text-[14px] h-auto px-[12px] py-[15px] transition-all delay-75 w-[376px] leading-[1.4] outline-[#B3D7F4]"
              type="text"
              placeholder="What are you looking for...."
            />
          </div>
          <div className="mb-[15px] flex flex-col">
            <label className="text-left text-[#232323] font-[600] text-[14px]">
              Category
            </label>
            <select
              placeholder="Select Category"
              className="bg-white border-[1px] border-solid border-[##232323] rounded-[0px] shadow-none text-[#555] text-[14px] h-auto px-[12px] py-[15px] transition-all delay-75 w-[376px] leading-[1.4] outline-[#B3D7F4]"
              id="cars"
            >
              <option value="volvo">Accountancy</option>
              <option value="saab">Art</option>
              <option value="mercedes">Bollywood</option>
              <option value="audi">Business&Law</option>
            </select>
          </div>
          <div className="mb-[15px] flex flex-col">
            <label className="text-left text-[#232323] font-[600] text-[14px]">
              Locations
            </label>
            <input
              type="text"
              placeholder="Locations"
              className="bg-white border-[1px] border-solid border-[##232323] rounded-[0px] shadow-none text-[#555] text-[14px] h-auto px-[12px] py-[15px] transition-all delay-75 w-[376px] leading-[1.4] outline-[#B3D7F4]"
            />
          </div>
          <div className="mt-[27px]">
            <button className="bg-[#e74c3c] border-[#e95d4f] text-[#fff] space-x-1 text-[14px] px-[15px] py-[10px] uppercase font-[600] font-sans  w-[376px]">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
