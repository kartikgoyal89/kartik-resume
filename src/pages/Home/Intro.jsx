import React from "react";
import Kartik_Resume from "../../resources/Kartik_Goyal_Resume.pdf";
import "./home.css";

function Intro() {
  return (
    <div className="intro-container intro-div bg-primary flex flex-col items-start justify-center gap-6 py-10">
      <h1 className="pt-5 hello text-white text-3xl font-medium intro-hi">
        Hello World, I am
      </h1>
      <h1
        className="name text-8xl  text-secondary intro-name font-semibold"
        style={{ textShadow: "0px 3px 5px rgba(0,0,0,9)" }}
      >
        Kartik Goyal
      </h1>
      <h1 className="service text-white intro-text text-7xl mb-3 font-semibold">
        I build things for the web.
      </h1>
      <p className="text-white intro-p text-lg desc text-justify">
        I am a MERN Stack Developer and Web Designer with a passion for building
        attractive, high-performing websites. Along with full-stack development,
        I specialize in integrating AI technologies with MERN applications to
        create smarter, more dynamic user experiences. I am currently seeking
        internship opportunities to apply my skills and grow with emerging
        technologies.
      </p>
      <a href={Kartik_Resume} target="_blank">
        <button className="flex items-center gap-[0px] border-2 intro-btn border-secondary  font-semibold outline-none px-10 py-3 rounded mt-2 text-xl mb-0 intro-btn hover:bg-secondary text-white transition ease-in-out duration-200">
          Download CV
        </button>
      </a>
    </div>
  );
}

export default Intro;
