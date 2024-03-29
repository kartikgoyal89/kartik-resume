import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { experience } from "../../resources/Experience";

const Experience = () => {
  const [selectItem, setSelectedItem] = useState(0);
  return (
    <div>
      <SectionTitle title="Experience" />

      <div className="flex py-10 gap-10 md:flex-col">
        {/* EXPERIENCE PERIOD */}
        <div className="flex flex-col gap-5 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {experience.map((experience, idx) => (
            <div key={idx} onClick={() => setSelectedItem(idx)}>
              <h1
                className={`text-xl cursor-pointer py-2 px-5  ${
                  selectItem === idx
                    ? "font-bold text-tertiary border-tertiary rounded border-l-4 -ml-1 bg-[#135e4d42] py-3"
                    : "font-normal text-white"
                }`}
              >
                {experience.period}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-xl font-bold text-secondary">
            {experience[selectItem].title}
          </h1>
          <h1 className="text-xl text-tertiary">
            {experience[selectItem].company}
          </h1>
          <p className="text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus maiores animi harum veniam. Officia impedit odio saepe
            aliquam illum iusto.
          </p>
        </div>
      </div>
      {/* EXPERIENCE DATA */}
    </div>
  );
};

export default Experience;
