import React from "react";
import { motion } from "framer-motion";
import MASCOT from "../../assets/mascot1.svg";
import MASCOT2 from "../../assets/mascot2.svg";
import { Helmet } from "react-helmet-async";
import { AnimateDiv } from "../../components/CustomDiv";
import Text from "../../components/Text";
import { ButtonScroll, HrefButton } from "../../components/Button";
import MedPart from "../../components/MedPart";
import SectionTwo from "./section/sectionTwo";

const About = () => {
  return (
    <AnimateDiv className="overflow-hidden">
      <Helmet>
        <title>BEF | About Us</title>
      </Helmet>
      <div className="relative bg-bef-backdrop-blue h-screen bg-no-repeat bg-cover bg-center text-center flex flex-col items-center justify-center px-8">
        <Text
          variant="h1"
          weight="extrabold"
          color="white"
          shadow="text"
          className="relative z-10"
        >
          Let's meet Bero, the mascot of BEF!
        </Text>
        <hr className="relative z-10 w-7/12 mx-auto h-0.5 bg-white my-5" />
        <div className="relative z-10 flex flex-col sm:flex-row sm:gap-8 w-full items-center justify-center">
          <ButtonScroll linkTo="bero">Tentang Bero</ButtonScroll>
          <HrefButton href="https://mw.ub.ac.id/">Tentang MW</HrefButton>
        </div>
        <motion.img
          whileHover={{ scale: 1.2, translateY: -150 }}
          src={MASCOT}
          alt="mascot"
          className="absolute scale-75 md:scale-100 -left-24 md:-left-0 top-[30rem]"
        />
        <motion.img
          whileHover={{ scale: 1.2, translateY: -150 }}
          src={MASCOT2}
          alt="mascot"
          className="absolute scale-75 md:scale-100 -right-24 md:-right-0 top-[30rem]"
        />
      </div>

      <div
        className="relative bg-orange flex flex-col items-center justify-center text-center gap-12 py-20"
        name="bero"
      >
        <Text variant="h2" weight="extrabold" color="white" shadow="text">
          Tentang Bero
        </Text>
        <Text color="white" className="w-2/3" shadow="text">
          The name Bero refers to "Bro" which means Bero can be a close friends
          to all BEFties. Bero is a polar bear. Why bear? because in Bahasa
          Indonesia, bear means "Beruang". If it's read with different
          intonations "Beruang" has another meanings, which is "ber-uang" or
          having money, which is one of the goals in entrepreneurship. The polar
          bear itself describes the cold weather of Malang city.
        </Text>
      </div>
      <MedPart content={<SectionTwo />} />
    </AnimateDiv>
  );
};

export default About;
