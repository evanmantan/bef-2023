import React from "react";
import { AnimateDiv } from "../../components/CustomDiv";
import { Helmet } from "react-helmet-async";
import MedPart from "../../components/MedPart";
import SectionTwo from "./Section/sectionTwo";
import Text from "../../components/Text";

const Expo = () => {
  return (
    <AnimateDiv>
      <Helmet>
        <title>BEF | Expo</title>
      </Helmet>
      <div className="bg-bef-backdrop-blue bg-no-repeat bg-cover h-[699px] sm:h-screen flex flex-col overflow-hidden items-center justify-center gap-8">
        <Text
          variant="h1"
          color="white"
          weight="bold"
          shadow="text"
          className="text-center w-2/3"
        >
          COMING SOON : EXPO BEF 2023
        </Text>
        <hr className="w-2/5 border-2" />
        <Text
          variant="p2"
          color="white"
          weight="bold"
          shadow="text"
          className="text-center w-2/3 font-sans"
        >
          30-31 October at Universitas Brawijaya
        </Text>
      </div>
      <div className="bg-orange flex flex-col items-center justify-center text-center gap-12 py-20">
        <Text variant="h2" color="white" shadow="text" weight="extrabold">
          Tentang Expo BEF 2023
        </Text>
        <Text color="white" shadow="text" className="w-2/3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores esse
          rerum asperiores consequuntur eius veritatis qui impedit magnam
          necessitatibus, quaerat inventore ad sit explicabo debitis recusandae
          doloremque, deserunt quas perspiciatis.
        </Text>
      </div>
      <MedPart content={<SectionTwo />} />
    </AnimateDiv>
  );
};

export default Expo;
