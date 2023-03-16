import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between relative">
      {/* left */}
      <Link to="/">
        <div className="px-5 py-5 cursor-pointer">
          <img
            src="/images/logo.png"
            alt="Hii"
            className="m-0 p-0 max-h-full"
          />
        </div>
      </Link>

      {/* middle */}
      <div className="flex mr-36 justify-center items-center ">
        <ul className="flex">
          <li className="  px-5 py-2">
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">
              <div className="w-[181px] h-10 relative">
                <div className="peer px-5 py-2">Used Book On Sale</div>
                <div
                  className="hidden peer-hover:flex hover:flex
                                   flex-col bg-white z-10 absolute"
                >
                  <a
                    href="/"
                    className="px-5 py-3 hover:bg-[#e74c3c] hover:text-[#fff]"
                  >
                    Engeenerring Books
                  </a>
                  <a
                    className="px-5 py-3 hover:bg-[#e74c3c] hover:text-[#fff]"
                    href="/"
                  >
                    School Books
                  </a>
                  <a
                    className="px-5 py-3 hover:bg-[#e74c3c] hover:text-[#fff]"
                    href="/"
                  >
                    Magzines
                  </a>
                  <a
                    className="px-5 py-3 hover:bg-[#e74c3c] hover:text-[#fff]"
                    href="/"
                  >
                    Medical
                  </a>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="/">
              <div className="w-[222px] h-10 relative">
                <div className="peer px-5 py-2 ">Competitive Exam Book</div>
                <div
                  className="hidden peer-hover:flex hover:flex
                                   flex-col bg-white drop-shadow-lg z-10 absolute"
                >
                  <a
                    href="/"
                    className="px-5 py-3 hover:bg-[#e74c3c] hover:text-[#fff]"
                  >
                    Gate Books
                  </a>
                  <a
                    href="/"
                    className="px-5 py-3 hover:bg-[#e74c3c] hover:text-[#fff]"
                  >
                    Engeenerring Exam Books
                  </a>
                  <a
                    href="/"
                    className="px-5 py-3 hover:bg-[#e74c3c] hover:text-[#fff]"
                  >
                    AIIMS books
                  </a>
                  <a
                    href="/"
                    className="px-5 py-3  hover:bg-[#e74c3c] hover:text-[#fff]"
                  >
                    UPSC books
                  </a>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="/">
              <div className="w-[80px] h-10 relative">
                <div className="peer py-2">Novels</div>
                <div
                  className="hidden peer-hover:flex hover:flex
                                   flex-col bg-white drop-shadow-lg w-[123px] z-10 absolute"
                >
                  <a
                    href="/"
                    className="text-sm px-5 py-3 hover:bg-[#e74c3c] hover:text-[#fff]"
                  >
                    Fiction Books
                  </a>
                  <a
                    href="/"
                    className="text-sm px-5 py-3 hover:bg-[#e74c3c] hover:text-[#fff]"
                  >
                    Non- Fiction Books
                  </a>
                </div>
              </div>
            </a>
          </li>
          <li className=" py-2">
            <a href="/">Book Reviews</a>
          </li>
        </ul>
      </div>

      {/* right */}
      <div className=" flex justify-center items-center">
        <button className="px-5 py-2">Login</button>
        <button className="px-5 py-2">Register</button>
        <button className="px-4 py-7 font-semibold text-white border-[#e95d4f] bg-[#e74c3c]">
          +Sell Books
        </button>
      </div>
    </div>
  );
};

export default Navbar;
