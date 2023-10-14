import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import Text from "./Text";

const VARIANT = {
  primary: "bg-orange hover:bg-gold hover:scale-110",
  secondary: "bg-navy hover:bg-blue-400 hover:scale-110",
};

const STYLE =
  "w-fit px-10 py-3 text-center border-4 border-gold font-medium mx-2 my-3 transition";

export const Button = ({
  isLink,
  onClick,
  type,
  className,
  disabled,
  variant = "primary",
  children = "See More",
}) => {
  if (isLink) {
    return (
      <Link to={isLink}>
        <button
          className={classNames(STYLE, VARIANT[variant], className)}
          onClick={onClick}
          type={type}
        >
          <Text weight="extrabold" color="white">
            {children}
          </Text>
        </button>
      </Link>
    );

    if (disabled) {
      return (
        <button
          className={classNames(STYLE, "bg-navy/70", className)}
          onClick={onClick}
          type={type}
          disabled
        >
          <Text weight="extrabold" color="white">
            {children}
          </Text>
        </button>
      );
    }

    return (
      <button
        className={classNames(STYLE, VARIANT[variant], className)}
        onClick={onClick}
        type={type}
      >
        <Text weight="extrabold" color="white">
          {children}
        </Text>
      </button>
    );
  }
};

export const ButtonScroll = ({
  onClick,
  linkTo = "",
  type,
  className,
  variant = "primary",
  children = "See More",
}) => {
  return (
    <LinkScroll to={linkTo} smooth={true} duration={600}>
      <button
        className={classNames(STYLE, VARIANT[variant], className)}
        onClick={onClick}
        type={type}
      >
        <Text weight="extrabold" color="white">
          {children}
        </Text>
      </button>
    </LinkScroll>
  );
};

export const HrefButton = ({
  href,
  onClick,
  type,
  className,
  variant = "primary",
  children = "See More",
}) => {
  return (
    <a href={href}>
      <button
        className={classNames(STYLE, VARIANT[variant], className)}
        onClick={onClick}
        type={type}
      >
        <Text weight="extrabold" color="white">
          {children}
        </Text>
      </button>
    </a>
  );
};
