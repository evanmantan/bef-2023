import React from "react";
import { AnimateDiv } from "../../components/CustomDiv";
import { Helmet } from "react-helmet-async";
import SectionOne from "./Section/sectionOne";
import SectionTwo from "./Section/sectionTwo";
import MedPart from "../../components/MedPart"

const Seminar = () => {
  return (
    <AnimateDiv>
      <Helmet>
        <title>BEF | Seminar</title>
      </Helmet>
      <SectionOne />
      <MedPart content={<SectionTwo/>}/>
    </AnimateDiv>
  );
};

export default Seminar;
