import React from "react";
import { Tilt } from "react-tilt";
import Text from "./Text";
import { Link } from "react-router-dom";

const MenuWidget = ({ to = "/coming-soon", image, text, alt, useTag }) => {
  if (!useTag) {
    return (
      <Tilt
        options={{ max: 30, scale: 1 }}
        className="bg-navy rounded-3xl text-center pb-4 shadow-md shadow-light-gray basis-4/5 lg:basis-1/3"
      >
        <Link to={to}>
          {/* <Text variant="h3" weight="bold" color="white" className="mb-2">
            {text}
          </Text> */}
          <img src={image} alt={alt} className="mx-auto w-fit" />
        </Link>
      </Tilt>
    );
  } else {
    return (
      <Tilt
        options={{ max: 30, scale: 1 }}
        className="bg-navy rounded-3xl text-center p-7"
      >
        <a href={useTag}>
          <Text variant="h3" weight="bold" color="white" className="mb-2">
            {text}
          </Text>
          <img src={image} alt={alt} className="mx-auto w-2/3 m:w-fit" />
        </a>
      </Tilt>
    );
  }
};

export default MenuWidget;
