import React from "react";
import Text from "../../../components/Text";
import { AnimateSubDiv } from "../../../components/CustomDiv";

const SectionTwo = () => {
  return (
    <div className="h-screen pt-24 pb-16 flex flex-col justify-center items-center gap-8">
      <AnimateSubDiv>
        <Text
          color="navy"
          variant="h2"
          weight="extrabold"
          className="text-center"
        >
          Throwback
        </Text>
      </AnimateSubDiv>
      <AnimateSubDiv className="bg-navy w-10/12 md:w-8/12 lg:w-5/12 h-56 md:h-96 flex justify-center items-center shadow-md shadow-black">
        <iframe
          width="100%"
          height="100%%"
          src="https://www.youtube.com/embed/8qbxwucjSdI"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </AnimateSubDiv>
    </div>
  );
};

export default SectionTwo;
