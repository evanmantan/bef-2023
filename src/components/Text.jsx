import React from "react";
import classNames from "classnames";

const VARIANT = {
  h1: "text-3xl sm:text-4xl md:text-5xl",
  h2: "text-xl sm:text-3xl md:text-4xl",
  h3: "text-base sm:text-xl md:text-2xl",
  p1: "text-sm sm:text-base",
  p2: "text-base sm:text-lg",
};

const SHADOW = {
  none: "drop-shadow-none",
  text: "drop-shadow-text",
};

const WEIGHT = {
  extrabold: "font-extrabold",
  bold: "font-bold",
  semiBold: "font-semibold",
  normal: "font-normal",
  light: "font-light",
};

const COLOR = {
  navy: "text-navy",
  white: "text-white",
  black: "text-black",
  gold: "text-gold",
  purple: "text-purple",
};

const Text = ({
  color = "black",
  variant = "p1",
  weight = "semiBold",
  shadow = "none",
  className,
  children,
}) => {
  return (
    <p
      className={classNames(
        className,
        VARIANT[variant],
        WEIGHT[weight],
        COLOR[color],
        SHADOW[shadow]
      )}
    >
      {children}
    </p>
  );
};

export default Text;
