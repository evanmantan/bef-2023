import React from "react";
import SectionOne from "./Section/sectionOne";
import SectionTwo from "./Section/sectionTwo";
import SectionThree from "./Section/sectionThree";
import SectionFour from "./Section/sectionFour";
import SectionFive from "./Section/sectionFive";
import MedPart from "../../components/MedPart";
import { AnimateDiv } from "../../components/CustomDiv";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <AnimateDiv>
      <Helmet>
        <title>BEF | Homepage</title>
      </Helmet>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <MedPart content={<SectionFive />} />
    </AnimateDiv>
  );
};

export default Home;
