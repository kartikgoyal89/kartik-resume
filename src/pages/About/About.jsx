import React from "react";
import SectionTitle from "../../components/SectionTitle";
import Developer from "../../assets/dev.gif";

const About = () => {
  const skills = [
    "Javascript",
    "ReactJS",
    "NodeJs",
    "ExpressJs",
    "MongoDB",
    "MySQL",
    "Python",
    "Redux",
    "HTML",
    "CSS",
    "Bootsrap",
    "Figma",
    "Tailwind CSS",
  ];
  return (
    <div>
      <SectionTitle title="About" className="mb-0" />
      <div className="flex  w-full items-center sm:flex-col">
        <div className="h-[90vh] w-11/12 about-container md:h-[7vh] lg:h[50vh] sm:h[30vh]">
          <img
            src={Developer}
            alt="developer.gif"
            width="450px"
            className="object-contain"
          />
        </div>
        <div className="flex flex-col gap-5 w-full ml-10 lg:ml-0">
          <p className="text-white about-p mb-5 mt-8 md:text-sm text-justify sm:w-full">
            Hello! My name is{" "}
            <span className="text-secondary font-semibold">Kartik Goyal</span> -
            I am a MERN Stack Developer and Designer.I enjoy creating things
            that live on Internet.My Interest in Web Development started back in
            2021 when I decided to make some basic responsive website clones
            where I got to learn a lot about HTML & CSS!
          </p>
          <p className="text-white about-p mb-20 md:text-sm text-justify sm:w-full">
            Fast-forward to today, and I've am capable of making a
            fully-functional and attractive websites.My main focus these days is
            building accessible, inclusive products and digital experiences. I
            recently developed some full-stack applications. Here are a few
            technologies I've been working with recently.
          </p>
        </div>
      </div>

      <div className="py-5">
        <h1 className="text-tertiary text-2xl font-semibold">
          Here are a few technologies I've been working with recently:
        </h1>
        <div className="flex flex-wrap gap-5 mt-10">
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
