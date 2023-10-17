import React from "react";
import MenuWidget from "../../../components/MenuWidget";
import ABOUT from "../../../assets/homepage/about-us.webp";
import SEMINAR from "../../../assets/homepage/seminar.webp";
import EXPO from "../../../assets/homepage/expo.webp";
import FORUM from "../../../assets/homepage/investor-forum.webp";
import LIVESTREAM from "../../../assets/homepage/live-streaming.webp";
import Text from "../../../components/Text";
import { AnimateSubDiv } from "../../../components/CustomDiv";

const SectionThree = () => {
  return (
    <div
      className="py-32 my-16 flex flex-col justify-center items-center gap-8 mx-auto h-screen bg-no-repeat bg-cover"
      name="whatsOn"
    >
      <AnimateSubDiv>
        <Text
          color="navy"
          variant="h2"
          weight="extrabold"
          className="text-center"
        >
          What's On BEF 2023
        </Text>
      </AnimateSubDiv>
      <AnimateSubDiv className="flex flex-auto flex-wrap gap-5 w-11/12 mx-auto mt-7 justify-center">
        <MenuWidget
          to="/seminar"
          image={SEMINAR}
          text="Seminar"
          alt="Seminar"
        />
        <MenuWidget
          to="/investor-forum"
          image={FORUM}
          text="Investor Forum"
          alt="Investor Forum"
        />
        <MenuWidget to="/expo" image={EXPO} text="Expo" alt="Expo" />
        <MenuWidget
          image={LIVESTREAM}
          text="Live Streaming"
          alt="Live Streaming"
        />
        <MenuWidget to="/about" image={ABOUT} text="About Us" alt="About" />
      </AnimateSubDiv>
    </div>
  );
};

export default SectionThree;
