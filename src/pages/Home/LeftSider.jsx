import React from "react";
import { Link } from "react-router-dom";

const LeftSider = () => {
  return (
    <div className="fixed left-0 bottom-0 px-10 lg:px-4 sm:static pb-5">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to="mailto:kartikgoyal794@gmail.com" target="_blank">
            <i className="ri-mail-line text-gray-500 cursor-pointer hover:text-white text-xl"></i>
          </Link>
          <Link
            to="https://www.linkedin.com/in/kartik-goyal-994651227"
            target="_blank"
          >
            <i className="ri-linkedin-box-line text-gray-500 cursor-pointer hover:text-white text-xl"></i>
          </Link>
          <Link to="https://github.com/kartikgoyal89" target="_blank">
            <i className="ri-github-line text-gray-500 cursor-pointer hover:text-white text-xl"></i>
          </Link>
          <Link to="https://www.instagram.com/kartik_goyal23" target="_blank">
            <i className="ri-instagram-line text-gray-500 cursor-pointer hover:text-white text-xl"></i>
          </Link>
        </div>
        <div className="w-[1.2px] h-32 bg-[#1d866ecb] sm:hidden"></div>
      </div>
    </div>
  );
};

export default LeftSider;
