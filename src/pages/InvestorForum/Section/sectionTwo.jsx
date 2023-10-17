import React from "react";
import Text from "../../../components/Text";
import POSTER from "../../../assets/investor-forum/poster.webp";
import DOKUM1 from "../../../assets/investor-forum/dokum1.webp";
import DOKUM2 from "../../../assets/investor-forum/dokum2.webp";
import { AnimateSubDiv } from "../../../components/CustomDiv";

const SectionTwo = () => {
  return (
    <div className="mt-10" name="bravoDocumentation">
      <AnimateSubDiv className="bg-gold w-full px-5 py-3 mx-auto mt-32 -bottom-12 relative z-10 text-center shadow-lg shadow-black">
        <Text variant="h2" weight="extrabold" color="navy">
          POSTER
        </Text>
      </AnimateSubDiv>
      <AnimateSubDiv className="bg-navy gap-4 w-11/12 lg:w-7/12 md:w-9/12 mx-auto px-8 py-16 md:p-24">
        <img src={POSTER} alt="Poster" className="mx-auto" />
      </AnimateSubDiv>
      <AnimateSubDiv className="bg-gold w-full px-5 py-3 mx-auto mt-32 -bottom-12 relative z-10 text-center shadow-lg shadow-black">
        <Text variant="h2" weight="extrabold" color="navy">
          DOKUMENTASI
        </Text>
      </AnimateSubDiv>
      <AnimateSubDiv className="bg-navy grid grid-cols-1 gap-4 w-11/12 lg:w-7/12 md:w-9/12 mx-auto px-8 py-16 md:p-24">
          <img src={DOKUM1} alt="Dokumentasi 1" />
          <img src={DOKUM2} alt="Dokumentasi 2" />
      </AnimateSubDiv>
    </div>
  );
};

export default SectionTwo;
