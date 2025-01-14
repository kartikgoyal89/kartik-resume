import React from "react";
import "./components.css";

const SectionTitle = ({ title }) => {
  return (
    <div className="flex gap-5 items-center pt-10 pb-6 w-full">
      <div className="title text-white font-semibold">{title}</div>
      <div className="w-96 h-[3px] bg-tertiary opacity-55"></div>
    </div>
  );
};

export default SectionTitle;
