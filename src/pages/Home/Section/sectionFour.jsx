import React from "react";
import DOT from "../../../assets/homepage/dot.png";
import { timeline } from "../data";
import { Chrono } from "react-chrono";
import Text from "../../../components/Text";
import { AnimateSubDiv } from "../../../components/CustomDiv";
import { Button } from "../../../components/Button";

const SectionFour = () => {
  return (
    <div className="pt-12 pb-24 flex flex-col justify-center items-center gap-8">
      <AnimateSubDiv>
        <Text
          color="navy"
          variant="h2"
          weight="extrabold"
          className={"text-center"}
        >
          Our Timeline
        </Text>
        <Text className="my-2 w-2/3 text-center mx-auto">
          BEF consists of three series of events, including Grand Seminar &
          Talkshow, BRAVO Competition, and Offline Expo.
        </Text>
      </AnimateSubDiv>
      <AnimateSubDiv className="mx-auto lg:w-7/12 mt-6">
        <Chrono
          items={timeline}
          mode="VERTICAL"
          theme={{
            primary: "black",
            secondary: "none",
            cardBgColor: "none",
            titleColor: "black",
            titleColorActive: "black",
            cardTitleColor: "black",
            iconBackgroundColor: "none",
          }}
          fontSizes={{
            cardSubtitle: "0.85rem",
            cardText: "1rem",
            cardTitle: "1.25rem",
            title: "1.25rem",
          }}
          hideControls
          borderLessCards
          disableClickOnCircle
        >
          <div className="chrono-icons">
            <img src={DOT} alt="Dot" />
            <img src={DOT} alt="Dot" />
            <img src={DOT} alt="Dot" />
          </div>
          <Button isLink="/seminar" />
          <Button isLink="/expo" />
          <Button isLink="/investor-forum"/>
        </Chrono>
      </AnimateSubDiv>
    </div>
  );
};

export default SectionFour;
