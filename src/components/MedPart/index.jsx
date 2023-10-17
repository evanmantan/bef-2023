import React from "react";
import OBJECT1 from "../../assets/medPart/object1.png";
import Text from "../Text";
import Footer from "../Footer";
import { AnimateSubDiv } from "../CustomDiv";
import { mediaPartner, sponsor } from "./data";
import classNames from "classnames";

const MedPart = ({ content }) => {
  return (
    <div className="text-center bg-gradient-to-b from-transparent to-[#faf2d6]">
      <div className="mb-16">{content}</div>
      <img
        src={OBJECT1}
        alt="backdrop"
        className="absolute w-screen -z-50 right-0 left-0 -translate-y-1/4"
      />
      <div className="flex flex-col gap-8 mt-[12rem] bg-purple px-8 py-12 sm:py-24 w-11/12 md:w-10/12 lg:w-8/12 mx-auto">
        <Text variant="h2" color="white" weight="bold">
          Sponsor
        </Text>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {sponsor.map((data, key) => {
            return (
              <img
                src={data.image}
                alt={data.alt}
                className={classNames("m-auto", data.className)}
                key={key}
              />
            );
          })}
        </div>
      </div>
      <div className="mt-20 mb-[18rem] bg-purple p-8 w-11/12 md:w-10/12 lg:w-8/12 mx-auto">
        <Text variant="h2" color="white" weight="bold">
          Media Partner
        </Text>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-8 gap-2 py-12">
          {mediaPartner.map((data, key) => {
            return (
              <img
                src={data.image}
                alt={data.alt}
                className={classNames("mx-auto", data.className)}
                key={key}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MedPart;
