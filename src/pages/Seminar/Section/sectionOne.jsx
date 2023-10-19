import React from "react";
import Text from "../../../components/Text";
import HEADER from "../../../assets/seminar/header.webp";
import Countdown from "react-countdown";
import { HrefButton } from "../../../components/Button";

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  const data = [
    { type: days, title: "Hari" },
    { type: hours, title: "Jam" },
    { type: minutes, title: "Menit" },
    { type: seconds, title: "Detik" },
  ];
  if (completed) {
  }
  return (
    <div className="sm:my-7">
      <div className="grid grid-cols-4 gap-4 md:gap-11 mx-auto w-fit">
        {data.map((data, key) => {
          return (
            <div
              className="bg-navy/80 w-16 h-28 sm:w-24 sm:h-28 rounded-2xl flex flex-col justify-center items-center"
              key={key}
            >
              <Text variant="h2" color="white" className="text-white">
                {data.type}
              </Text>
              <Text variant="p1" color="white" className="text-white">
                {data.title}
              </Text>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const SectionOne = () => {
  return (
    <>
      <div className="bg-bef-backdrop-blue bg-no-repeat bg-cover h-screen flex flex-col overflow-hidden items-center justify-center gap-8 sm:gap-4 lg:gap-0">
        <img
          src={HEADER}
          alt="Seminar and Talkshow"
          className="relative scale-125 md:scale-100 lg:scale-90 w-1/2 max-w-max"
        />
        <Text
          variant="h3"
          color="white"
          weight="bold"
          shadow="text"
          className="text-center w-2/3 font-sans"
        >
          30-31 October at Samantha Krida Universitas Brawijaya
        </Text>
        <Countdown
          date={Date.parse("Oct 30, 2023 00:00:00")}
          renderer={renderer}
          smooth="true"
        />
        <HrefButton href="https://linktr.ee/seminardantalkshowbef">
          Daftar Sekarang (Slot Terbatas)
        </HrefButton>
      </div>
      <div className="bg-orange flex flex-col items-center justify-center text-center gap-12 py-20">
        <Text
          variant="h2"
          color="white"
          shadow="text"
          weight="extrabold"
          className="w-5/6"
        >
          Creative Entrepreneurship in the Digital Era : A Path to Sustainable
          Development
        </Text>
        <Text color="white" shadow="text" className="w-2/3">
          Seminar dan Talkshow Brawijaya Entrepreneur Festival (BEF) "Creative
          Entrepreneurship in the Digital Era : A Path to Sustainable
          Development" ini membahas tentang kewirausahaan kreatif di era digital
          sebagai salah satu jalan menuju pembangunan berkelanjutan. Seminar ini
          bersifat nasional dan terbuka untuk umum, dilaksanakan secara hybrid,
          dan akan dimeriahkan oleh pemateri bertaraf nasional yang akan
          berfokus pada kewirausahaan kreatif dan pembangunan berkelanjutan.
        </Text>
      </div>
    </>
  );
};

export default SectionOne;
