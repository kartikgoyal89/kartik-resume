import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div className="flex gap-5 items-center pt-10 pb-6 w-full">
      <div className="text-4xl text-white font-semibold w-fit">{title}</div>
      <div className="w-96 h-[2px] bg-tertiary opacity-55"></div>
    </div>
  );
};

export default SectionTitle;
