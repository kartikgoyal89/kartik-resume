import React from "react";
import KartikResume from "../../resources/kartik_resume.pdf";
import "./home.css";

function Intro() {
  return (
    <div className="intro-container intro-div bg-primary flex flex-col items-start justify-center gap-6 py-10">
      <h1 className="pt-5 hello text-white text-3xl font-medium intro-hi">
        Hello World, I am
      </h1>
      <h1 className="name text-8xl  text-secondary intro-name font-semibold">
        Kartik Goyal
      </h1>
      <h1 className="service text-white intro-text text-7xl font-semibold">
        I build things for the web.
      </h1>
      <p className="text-white intro-p text-xl desc">
        I am MERN Stack Developer & Web Designer. I make attractive and unique
        websites and currently seeking internship opportunites to showcase my
        skills and explore new technologies.
      </p>
      <a href={KartikResume} target="_blank">
        <button className="flex items-center gap-[0px] border-2 intro-btn border-secondary  font-semibold outline-none px-10 py-3 rounded mt-2 text-xl mb-0 intro-btn hover:bg-secondary text-white transition ease-in-out duration-200">
          Download CV
        </button>
      </a>
    </div>
  );
}

export default Intro;
