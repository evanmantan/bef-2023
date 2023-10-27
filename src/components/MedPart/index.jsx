import React from "react";
import OBJECT1 from "../../assets/medPart/object1.png";
import Text from "../Text";
import Footer from "../Footer";
import { AnimateSubDiv } from "../CustomDiv";
import {
  mediaPartner,
  sponsorLarge,
  sponsorMedium,
  sponsorSmall,
} from "./data";
import classNames from "classnames";
import SMARTFREN from "../../assets/medPart/xxl-smartfren.png";

const MedPart = ({ content }) => {
  return (
    <div className="text-center bg-gradient-to-b from-transparent to-[#faf2d6]">
      <AnimateSubDiv className="mb-16">{content}</AnimateSubDiv>
      <img
        src={OBJECT1}
        alt="backdrop"
        className="absolute w-screen -z-50 right-0 left-0 -translate-y-1/4"
      />
      <AnimateSubDiv className="flex flex-col mt-[12rem] bg-purple px-2 sm:px-8 py-8 sm:py-12 w-11/12 md:w-10/12 lg:w-8/12 mx-auto">
        <Text variant="h2" color="white" weight="bold">
          Powered By
        </Text>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <img src={SMARTFREN} alt="Smartfren Indonesia" />
        </div>
      </AnimateSubDiv>
      <AnimateSubDiv className="flex flex-col gap-8 mt-20 bg-purple px-8 py-8 sm:py-12 w-11/12 md:w-10/12 lg:w-8/12 mx-auto">
        <Text variant="h2" color="white" weight="bold">
          Sponsored By
        </Text>
        <div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {sponsorLarge.map((data, key) => {
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
          <div className="flex flex-wrap items-center justify-center gap-4 my-12">
            {sponsorMedium.map((data, key) => {
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
          <div className="flex flex-wrap items-center justify-center gap-4">
            {sponsorSmall.map((data, key) => {
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
      </AnimateSubDiv>
      <AnimateSubDiv className="mt-20 mb-[18rem] bg-purple p-8 sm:py-12 w-11/12 md:w-10/12 lg:w-8/12 mx-auto">
        <Text variant="h2" color="white" weight="bold">
          Media Partners
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
      </AnimateSubDiv>
      <Footer />
    </div>
  );
};

export default MedPart;
