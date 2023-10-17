import React from "react";
import {
  keynoteSpeech,
  seminarDay1,
  seminarDay2Session1,
  seminarDay2Session2,
} from "../data";
import { Card, MultiCard } from "../../../components/Card";
import Text from "../../../components/Text";
import { motion } from "framer-motion";

const SectionTwo = () => {
  return (
    <div className="pt-24">
            <div className="bg-gold w-full px-5 py-3 mx-auto mt-32 -bottom-12 relative z-10 text-center shadow-lg shadow-black">
        <Text variant="h2" weight="extrabold" color="navy">
          KEYNOTE SPEECH
        </Text>
      </div>
      <div className="bg-purple flex flex-col w-11/12 md:w-7/12 lg:w-5/12 p-12 pt-20 items-center justify-center mx-auto">
        <img src={keynoteSpeech.image} alt="Sandiaga Uno" className="max-w-min w-11/12 sm:w-7/12 mb-4 md:mb-8" />
        <Text variant="h3" color="white" weight="bold" shadow="text">
          {keynoteSpeech.name}
        </Text>
        <Text color="white" weight="base">{keynoteSpeech.position}</Text>
      </div>
      <div className="bg-gold w-full px-5 py-3 mx-auto mt-32 -bottom-14 relative z-10 text-center shadow-lg shadow-black">
        <Text variant="h2" weight="extrabold" color="navy">
          HARI PERTAMA
        </Text>
      </div>
      {seminarDay1.map((data, key) => {
        return (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              type: "spring",
              bounce: 0.4,
              duration: 0.8,
            }}
          >
            <Card
              image={data.image}
              name={data.name}
              position={data.position}
              title={data.title}
              description={data.description}
              flip={key % 2 === 1 ? "flip" : "none"}
            />
          </motion.div>
        );
      })}
      <div className="bg-gold w-full px-5 py-3 mx-auto -bottom-14 relative z-10 text-center shadow-lg shadow-black">
        <Text variant="h2" weight="extrabold" color="navy">
          HARI KEDUA
        </Text>
      </div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          type: "spring",
          bounce: 0.4,
          duration: 0.8,
        }}
      >
        <MultiCard
          data={seminarDay2Session1.speakers}
          title={seminarDay2Session1.title}
          description={seminarDay2Session1.description}
        />
      </motion.div>
      <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              type: "spring",
              bounce: 0.4,
              duration: 0.8,
            }}
          >
      <Card
        image={seminarDay2Session2.image}
        name={seminarDay2Session2.name}
        position={seminarDay2Session2.position}
        title={seminarDay2Session2.title}
        description={seminarDay2Session2.description}
        flip="none"
      />
      </motion.div>
    </div>
  );
};

export default SectionTwo;
