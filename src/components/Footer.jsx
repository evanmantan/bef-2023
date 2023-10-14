import React from "react";
import INSTAGRAM from "../assets/sosmed/instagram.svg";
import TIKTOK from "../assets/sosmed/tiktok.svg";
import Text from "./Text";
// import FACEBOOK from '../assets/sosmed/facebook.svg'
// import TWITTER from '../assets/sosmed/twitter.svg'

const Footer = () => {
  const data = [
    {
      image: INSTAGRAM,
      link: "https://www.instagram.com/bef2023_/",
    },
    {
      image: TIKTOK,
      link: "https://www.tiktok.com/@bef.2023",
    },
  ];
  return (
    <div
      className="bg-orange text-center py-12 px-5 z-10 relative"
      name="contact"
    >
      <Text variant="h2" color="white" weight="extrabold" className="mb-10">
        Let's Stay Connected With Us
      </Text>
      <div className="grid grid-cols-2 gap-x-16 mx-auto w-fit scale-75">
        {data.map((e, key) => {
          return (
            <a href={e.link} target="_blank" rel="noreferrer" key={key}>
              <img src={e.image} alt="icon" />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
