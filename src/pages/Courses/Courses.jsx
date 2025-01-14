import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { certificates } from "../../resources/Certificates";
import { Link } from "react-router-dom";
import { RiLinksLine } from "react-icons/ri";

const Courses = () => {
  const [selectItem, setSelectedItem] = useState(0);

  return (
    <div>
      <SectionTitle title="Courses & Certifications" />
      <div className="flex py-10 h-full gap-10 sm:flex-col">
        {/* certificates PERIOD */}
        <div className="flex flex-col gap-5 border-l-2 border-[#135e4c82] w-fit sm:flex-row sm:overflow-x-scroll sm:w-full">
          {certificates.map((certificates, idx) => (
            <div key={idx} onClick={() => setSelectedItem(idx)}>
              <h1
                className={`pointer text-2xl cursor-pointer py-2 px-5  ${
                  selectItem === idx
                    ? "font-bold text-tertiary border-tertiary rounded border-l-4 -ml-1 bg-[#135e4d42] py-3"
                    : "font-normal text-white"
                }`}
              >
                {certificates.period}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex flex-col mt-3 gap-3 ml-5">
          <Link
            to={certificates[selectItem].link}
            target="_blank"
            className="cursor-pointer"
          >
            <h1 className="link flex items-center text-2xl font-bold text-secondary underline">
              {certificates[selectItem].certificate}
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Courses;
