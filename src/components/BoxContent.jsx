import classNames from "classnames";
import React from "react";
import Text from "./Text";
import LOGO from "../assets/logo/logo-bef.svg";
import { AnimateSubDiv } from "./CustomDiv";

const BoxContent = ({ data = [], title = "your title", logo, className }) => {
  return (
    <>
      <AnimateSubDiv
        className={classNames(
          "bg-gold w-full px-5 py-3 mx-auto mt-32 -bottom-12 relative z-10 text-center shadow-lg shadow-black",
          className
        )}
      >
        <Text variant="h2" weight="extrabold" color="navy" shadow="text">
          {title}
        </Text>
      </AnimateSubDiv>
      <AnimateSubDiv className="bg-purple mx-auto w-11/12 sm:w-10/12 md:w-8/12 px-5 md:px-10 lg:px-24 py-10">
        {logo ? (
          <img src={LOGO} alt="logo" className="mx-auto scale-110 my-10" />
        ) : (
          ""
        )}
        {data.map((data, key) => {
          return (
            <div
              className={classNames(
                "px-10 py-5 w-full my-9",
                data.background ? `${data.background}` : "bg-[#393481]"
              )}
              key={key}
            >
              <Text
                color={`${data.text ? "navy" : "white"}`}
                shadow="text"
                variant="p2"
                className={classNames(
                  "text-center md:text-justify",
                  `${data.text ? "" : "text-white "}`
                )}
              >
                {data.content}
              </Text>
            </div>
          );
        })}
      </AnimateSubDiv>
    </>
  );
};

export default BoxContent;
