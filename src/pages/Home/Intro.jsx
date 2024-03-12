import React from "react";
import KartikResume from "../../resources/resume_kartik.pdf";

function Intro() {
  return (
    <div className="h-[80vh] w-[60vw] intro-div bg-primary flex flex-col items-start justify-center gap-6 py-10">
      <h1 className="text-white text-2xl font-medium intro-hi">Hi, I am</h1>
      <h1 className="text-7xl  text-secondary intro-name font-semibold">
        Kartik Goyal
      </h1>
      <h1 className="text-white intro-text text-6xl font-semibold">
        I build things for the web.
      </h1>
      <p className="text-white intro-p">
        I am Fullstack Developer & UI Designer. I make attractive and unique
        websites and currently seeking internship opportunites to showcase my
        skills.
      </p>
      <button className="border-2 intro-btn border-tertiary  font-semibold outline-none px-10 py-3 rounded mt-2 text-xl mb-0 intro-btn hover:bg-tertiary text-white transition ease-in-out duration-200">
        <a href={KartikResume} download="kartik_goyal.pdf">
          Download CV
        </a>
      </button>
    </div>
  );
}

export default Intro;
