import React from "react";

const SectionTwo = () => {
  return (
    <div className="pt-[100px] flex flex-col justify-center items-center gap-8">
      <div>
        <h1 className="text-navy text-4xl font-bold text-center">Throwback</h1>
      </div>
      <div className="bg-navy w-10/12 rounded-2xl h-[579px] flex justify-center items-center">
        <iframe
          width="100%"
          height="91%"
          src="https://www.youtube.com/watch?v=8qbxwucjSdI"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    </div>
  );
};

export default SectionTwo;
