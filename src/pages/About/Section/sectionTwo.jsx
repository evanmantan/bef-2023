import React from "react";
import { visi, misi, filosofi } from "../data";
import BoxContent from "../../../components/BoxContent";

const SectionTwo = () => {
  return (
    <div className="mt-10">
      <BoxContent
        data={filosofi}
        title="FILOSOFI LOGO"
        className="px-16 md:px-32 mt-32"
        logo
      />
      <BoxContent data={visi} title="VISI BEF" className="px-16 md:px-32" />
      <BoxContent data={misi} title="MISI BEF" className="px-16 md:px-32 mt-32" />
    </div>
  );
};

export default SectionTwo;