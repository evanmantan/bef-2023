import classNames from "classnames";
import React from "react";
import Text from "./Text";

const FLIP = {
  none: "lg:flex-row",
  flip: "lg:flex-row-reverse",
};

export const Card = ({
  image,
  name,
  position,
  title,
  description,
  flip = "none",
  className,
}) => {
  return (
    <div
      className={classNames(
        "bg-purple w-11/12 flex flex-col lg:flex-row mx-auto items-center justify-center p-8 my-12 gap-4",
        FLIP[flip],
        className
      )}
    >
      <div className="flex flex-col mx-auto">
        <img
          src={image}
          alt="Foto Pemateri"
          className="w-32 lg:w-36 h-32 lg:h-36 rounded-full object-cover mb-4 mx-auto"
        />
        <Text color="white" shadow="text" className="text-center">
          {name}
        </Text>
        <Text color="white" weight="base" className="text-center">
          {position}
        </Text>
      </div>
      <div className="flex flex-col h-full justify-start gap-4 basis-4/5">
        <Text
          variant="h3"
          weight="extrabold"
          color="gold"
          shadow="text"
          className="bg-magenta p-4 shadow-sm shadow-black"
        >
          {title}
        </Text>
        <Text color="white" shadow="text">
          {description}
        </Text>
      </div>
    </div>
  );
};

export const MultiCard = ({ data, title, description }) => {
  return (
    <div
      className={classNames(
        "bg-purple w-11/12 flex flex-col mx-auto items-center justify-center p-8 my-12 gap-4 text-center",
        classNames
      )}
    >
      <Text
        variant="h3"
        weight="extrabold"
        color="gold"
        shadow="text"
        className="w-full bg-magenta p-4 shadow-sm shadow-black"
      >
        {title}
      </Text>
      <Text color="white" shadow="text">
        {description}
      </Text>
      <div className="w-5/6 flex flex-wrap lg:flex-nowrap justify-center">
        {data.map((data, key) => {
          return (
            <div className="mx-5 mt-10 sm:w-2/6" key={key}>
              <img
                src={data.image}
                alt="Foto Pemateri"
                className="w-32 lg:w-36 h-32 lg:h-36 rounded-full object-cover mb-4 mx-auto"
              />
              <Text color="white" shadow="text">
                {data.name}
              </Text>
              <Text color="white" weight="base">
                {data.position}
              </Text>
            </div>
          );
        })}
      </div>
    </div>
  );
};
