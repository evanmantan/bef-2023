import React from "react";
import Logo from "../assets/logo/logo-bef.svg";

const Navbar = () => {
  return (
    <div className="fixed w-full h-[97px] flex justify-between items-center bg-orange px-[7.5rem] text-light-gray">
      <div>
        <img src={Logo} alt="Logo BEF" />
      </div>
      <div>
        <ul className="flex gap-8">
          <li>Home</li>
          <li>Tentang</li>
          <li>MW INFO</li>
          <li>Data Pengurus dan Alumni</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
