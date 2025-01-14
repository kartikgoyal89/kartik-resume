import React from "react";
import SectionTitle from "../../components/SectionTitle";
import Developer from "../../assets/dev.gif";
import "./about.css";

const About = () => {
  const skills = [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Javascript",
    "MySQL",
    "Redux",
    "HTML",
    "CSS",
    "Bootsrap",
    "Python",
    "Figma",
    "Tailwind CSS",
    "C++",
    "C",
    "Github",
    "Next.js",
    "Java",
  ];
  return (
    <div>
      <SectionTitle title="About" className="mb-0" />
      <div className="about-container gap-[10px] flex w-full items-center sm:flex-col">
        <div className="flex items-center justify-between w-11/12 about-container ">
          <img
            src={Developer}
            alt="developer.gif"
            width="450px"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-5 w-full ml-10 lg:ml-0">
          <p className="text-xl text-white about-p mb-5  md:text-sm text-justify sm:w-full">
            Hello! My name is{" "}
            <span className="text-secondary font-semibold">Kartik Goyal</span>{" "}
            -&nbsp;I am a MERN Stack Developer and Web Designer. I love crafting
            applications that thrive on the Internet. My passion for Web
            Development ignited back in 2021 when I embarked on creating basic
            responsive website clones. Through this journey, I delved deep into
            HTML and CSS, laying a strong foundation for my skills.
          </p>
          <p className="text-xl text-white about-p mb-20 md:text-sm text-justify sm:w-full">
            Fast-forward to today, I am adept at developing fully-functional and
            visually appealing websites. My current focus is on building
            accessible, inclusive products and enriching digital experiences.
            Recently, I have been involved in developing some dynamic full-stack
            applications. Here are a few technologies I've been working with
            recently:
          </p>
        </div>
      </div>

      <div className="py-5">
        <h1 className="text-tertiary text-3xl font-semibold">
          Here are a few technologies I've been working with recently:
        </h1>
        <div className="skills flex flex-wrap gap-5 mt-10">
          {skills.map((skill, idx) => (
            <div key={idx} className="border border-tertiary px-5 py-2">
              <h1 className="text-white mb-0 font-semibold">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
