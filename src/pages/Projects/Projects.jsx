import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { project } from "../../resources/project";
import { Link } from "react-router-dom";

const Projects = () => {
  const [selectItem, setSelectedItem] = useState(0);

  return (
    <div>
      <SectionTitle title="Projects" />
      <div className="flex py-10 gap-10 sm:flex-col">
        {/* project PERIOD */}
        <div className="flex flex-col gap-5 border-l-2 border-[#135e4c82] w-1/2 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {project.map((project, idx) => (
            <div key={idx} onClick={() => setSelectedItem(idx)}>
              <h1
                className={`text-xl cursor-pointer py-2 px-5  ${
                  selectItem === idx
                    ? "font-bold text-tertiary border-tertiary rounded border-l-4 -ml-1 bg-[#135e4d42] py-3"
                    : "font-normal text-white"
                }`}
              >
                {project.period}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3 ml-5">
          <Link
            to={project[selectItem].link}
            className="cursor-pointer"
            target="_blank"
          >
            <h1 className="text-xl font-bold text-secondary underline">
              {project[selectItem].title}
            </h1>
          </Link>
          <h1 className="text-xl text-tertiary font-semibold">
            {project[selectItem].tech}
          </h1>
          <p className="text-white text-justify">
            {project[selectItem].description}
          </p>
        </div>
      </div>
      {/* project DATA */}
    </div>
  );
};

export default Projects;
