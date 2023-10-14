import React from "react";
import { Helmet } from "react-helmet-async";
import MedPart from "../../components/MedPart";
import SectionTwo from "./Section/sectionTwo";
import Text from "../../components/Text";
import { AnimateDiv } from "../../components/CustomDiv";

const InvestorForum = () => {
  return (
    <AnimateDiv>
      <Helmet>
        <title>BEF | Investor Forum</title>
      </Helmet>
      <div className="bg-bef-backdrop-blue bg-no-repeat bg-cover h-[699px] sm:h-screen flex flex-col overflow-hidden items-center justify-center gap-8">
        <Text
          variant="h1"
          color="white"
          weight="bold"
          shadow="text"
          className="text-center w-2/3"
        >
          The Role of Entrepreneur in Achieving SDGs 2030 Through
          Creativepreneurship and Implementation of a Sustainable Economy
        </Text>
        <hr className="w-2/5 border-2" />
        <Text
          variant="p2"
          color="white"
          weight="bold"
          shadow="text"
          className="text-center w-2/3 font-sans"
        >
          31 October at Universitas Brawijaya
        </Text>
      </div>
      <div className="bg-orange flex flex-col items-center justify-center text-center gap-12 py-20">
        <Text variant="h2" color="white" shadow="text" weight="extrabold">
          Tentang Investor Forum BEF 2023
        </Text>
        <Text color="white" shadow="text" className="w-2/3">
          Investor Forum pada Brawijaya Entrepreneur Festival adalah sebuah
          acara yang dirancang untuk mempertemukan investor, pengusaha, dan
          calon-calon wirausahawan yang potensial untuk berinteraksi, berbagi
          ide, serta menjalin kemitraan yang saling menguntungkan. Peserta akan
          memiliki kesempatan langka untuk berinteraksi secara langsung dengan
          berbagai investor dari berbagai bidang seperti teknologi, finansial,
          manufaktur, dan lain-lain. Investor Forum pada Brawijaya Entrepreneur
          Festival akan memberikan waktu untuk sesi diskusi dan sesi tanya
          jawab, di mana para peserta bisa bertanya langsung kepada para
          investor tentang berbagai aspek investasi dan pengembangan bisnis.
          Diskusi ini mencakup topik-topik seperti strategi pendanaan,
          pengelolaan resiko, skalabilitas bisnis, serta tren industri terbaru.
        </Text>
      </div>
      <MedPart content={<SectionTwo />} />
    </AnimateDiv>
  );
};

export default InvestorForum;
