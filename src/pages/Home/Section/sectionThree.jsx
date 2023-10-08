import React from "react";
import MenuWidget from "../../../components/MenuWidget";

const SectionThree = () => {
  return (
    <div className="min-h-[700px] flex flex-col justify-center items-center gap-8">
      <h1 className="text-navy text-4xl font-bold text-center">
        What's On BEF 2023
      </h1>
      <div>
        <MenuWidget />
      </div>
    </div>
  );
};

export default SectionThree;
