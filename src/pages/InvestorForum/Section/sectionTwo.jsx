import React from "react";
import Text from "../../../components/Text";
import POSTER from "../../../assets/investor-forum/poster.jpg";
import DOKUM1 from "../../../assets/investor-forum/dokum1.jpg";
import DOKUM2 from "../../../assets/investor-forum/dokum2.jpg";
import { AnimateSubDiv } from "../../../components/CustomDiv";

const SectionTwo = () => {
  return (
    <div className="mt-10" name="bravoDocumentation">
      <AnimateSubDiv className="bg-gold w-full px-5 py-3 mx-auto mt-32 -bottom-12 relative z-10 text-center shadow-lg shadow-black">
        <Text variant="h2" weight="extrabold" color="navy">
          DOKUMENTASI
        </Text>
      </AnimateSubDiv>
      <AnimateSubDiv className="bg-navy grid grid-cols-1 md:grid-cols-2 gap-4 w-11/12 mx-auto p-8 md:p-24">
        <img src={POSTER} alt="Poster" className="mx-auto" />
        <div className="grid grid-cols-1 gap-4">
          <img src={DOKUM1} alt="Dokumentasi 1" />
          <img src={DOKUM2} alt="Dokumentasi 2" />
        </div>
      </AnimateSubDiv>
    </div>
  );
};

export default SectionTwo;
