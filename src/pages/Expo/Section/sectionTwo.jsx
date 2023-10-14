import React from "react";
import BoxContent from "../../../components/BoxContent";
import { manfaat } from "../data";

const SectionTwo = () => {
  return (
    <div className="mt-10">
      <BoxContent data={manfaat} title="MANFAAT KEGIATAN" />
    </div>
  );
};

export default SectionTwo;
