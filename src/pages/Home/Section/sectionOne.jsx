import React from "react";
import Mascot from "../../../assets/mascot.png";
import { ButtonScroll } from "../../../components/Button";
import Text from "../../../components/Text";

const SectionOne = () => {
  return (
    <div className="bg-bef-backdrop-blue bg-no-repeat bg-cover h-[699px] sm:h-screen flex flex-col-reverse md:flex-row overflow-hidden">
      <div className="z-10 h-full w-full flex flex-col justify-center items-center md:items-start px-4 md:pl-10 lg:pl-[120px] gap-4 basis-4/5 md:basis-3/5">
        <Text variant="h1" color="white" weight="extrabold" shadow="text" className="text-center md:text-left">
          Brawijaya Entrepreneur Festival 2023
        </Text>
        <Text variant="p1" color="white" weight="semibold" shadow="text" className="mx-12 md:mx-0 text-justify">
          Brawijaya Entrepreneur Festival is an annual entrepreneurship event
          held by Mahasiswa Wirausaha Brawijaya University. This event aims to
          provide knowledge and experience in cultivating an entrepreneurial
          spirit, raise the spirit of the younger generation in doing business,
          and actualize the slogan of Brawijaya University, namely World Class
          Entrepreneurial University.
        </Text>
        <ButtonScroll linkTo="whatsOn"/>
      </div>
      <div className="relative flex justify-center mx-auto w-1/3 md:w-full basis-1/5 md:basis-2/5">
        <img
          src={Mascot}
          alt="Maskot BEF"
          className="object-contain translate-y-12 sm:translate-y-16 md:translate-y-0 scale-125"
        />
      </div>
    </div>
  );
};

export default SectionOne;
