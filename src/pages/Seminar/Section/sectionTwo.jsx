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
      <MultiCard
        data={keynoteSpeech.speakers}
        title={keynoteSpeech.title}
        description={keynoteSpeech.description}
      />
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
