import React from "react";
import Mascot from "../../../assets/mascot.png";
import Button from "../../../components/Button";

const SectionOne = () => {
  return (
    <div className="bg-bef-home bg-no-repeat bg-cover h-[699px] flex ">
      <div className="h-full w-full flex flex-col justify-center pl-[120px] gap-4 basis-3/5">
        <h1 className="text-white text-6xl font-bold">
          Brawijaya Entrepreneur Festival 2023
        </h1>
        <p className="text-white font-semibold">
          Brawijaya Entrepreneur Festival is an annual entrepreneurship event
          held by Mahasiswa Wirausaha Brawijaya University. This event aims to
          provide knowledge and experience in cultivating an entrepreneurial
          spirit, raise the spirit of the younger generation in doing business,
          and actualize the slogan of Brawijaya University, namely World Class
          Entrepreneurial University.
        </p>
        <Button />
      </div>
      <div className="flex justify-center w-full basis-2/5">
        <img src={Mascot} alt="Maskot BEF" className="object-contain" />
      </div>
    </div>
  );
};

export default SectionOne;
