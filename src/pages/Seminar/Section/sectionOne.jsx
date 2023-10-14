import React from "react";
import Text from "../../../components/Text";

const SectionOne = () => {
  return (
    <>
      <div className="bg-bef-backdrop-blue bg-no-repeat bg-cover h-[699px] sm:h-screen flex flex-col overflow-hidden items-center justify-center gap-8">
        <Text
          variant="h1"
          color="white"
          weight="bold"
          shadow="text"
          className="text-center w-2/3"
        >
          Creative Entrepreneurship in the Digital Era : A Path to Sustainable
          Development
        </Text>
        <hr className="w-2/5 border-2" />
        <Text
          variant="p2"
          color="white"
          weight="bold"
          shadow="text"
          className="text-center w-2/3 font-sans"
        >
          30-31 October at Samantha Krida Universitas Brawijaya
        </Text>
      </div>
      <div className="bg-orange flex flex-col items-center justify-center text-center gap-12 py-20">
        <Text variant="h2" color="white" shadow="text" weight="extrabold">
            Tentang Seminar BEF 2023
        </Text>
        <Text color="white" shadow="text" className="w-2/3">
          Seminar dan Talkshow Brawijaya Entrepreneur Festival (BEF) "Creative
          Entrepreneurship in the Digital Era : A Path to Sustainable
          Development Seminar" ini membahas tentang kewirausahaan kreatif di era
          digital sebagai salah satu jalan menuju pembangunan berkelanjutan.
          Seminar ini bersifat nasional dan terbuka untuk umum, dilaksanakan
          secara hybrid, dan akan dimeriahkan oleh pemateri bertaraf nasional
          yang akan berfokus pada kewirausahaan kreatif dan pembangunan
          berkelanjutan.
        </Text>
      </div>
    </>
  );
};

export default SectionOne;
