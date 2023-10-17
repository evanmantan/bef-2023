import React from "react";
import Text from "../../../components/Text";
import Slider from "react-slick";
import PEOPLE1 from "../../../assets/homepage/people1.png";
import PEOPLE2 from "../../../assets/homepage/people2.png";
import PEOPLE3 from "../../../assets/homepage/people3.png";
import ArrowRight from "../../../assets/homepage/arrow_right.svg";
import ArrowLeft from "../../../assets/homepage/arrow_left.svg";
import { AnimateSubDiv } from "../../../components/CustomDiv";

function SlickArrowRight({ currentSlide, slideCount, style, ...props }) {
  return (
    <img
      src={ArrowRight}
      alt="nextArrow"
      style={{
        ...style,
        transform: "scale(1.5)",
        zIndex: "1",
      }}
      {...props}
    />
  );
}

function SlickArrowLeft({ currentSlide, slideCount, style, ...props }) {
  return (
    <img
      src={ArrowLeft}
      alt="prevArrow"
      style={{
        ...style,
        transform: "scale(1.5)",
        zIndex: "1",
      }}
      {...props}
    />
  );
}

const SectionFive = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const items = [
    {
      image: PEOPLE1,
      name: "Raisa Rahma Tsurayya",
      winner: "First Winner BEF 2021 Titrasi Group from ITB",
      content:
        "Acara BEF terlebih dibagian lomba menurutku merupakan acara yang sangat terstruktur dan bermanfaat banget. Alurnya sangat jelas, case yang diberikan juga oke banget! Selain itu, peserta lombanya dikasih LO yang sangat caring jadi gak akan dilepas. Mentoring yang diberikan juga berbobot, nambah ilmu banyak dari lomba ini.",
    },
    {
      image: PEOPLE2,
      name: "Layin Qorin Anisyah",
      winner: "Juara 3 Lomba Bravo BEF 2022",
      content:
        "Menurutku, BEF tahun lalu banyak belajar dari mentoringnya. BEF juga ada pameran bisnis yang membuat awareness peserta meningkat. Saya juga senang karena bisa menjadi pemenang dari lomba BEF 2022, terutama pelajaran bisnis secara langsung.",
    },
    {
      image: PEOPLE3,
      name: "M. Reyhan Ramadhan",
      winner: "Third Winner BEF 2021 Nakama Group from UB",
      content:
        "Menurut kami acara BEF ini seru banget. Sebagai peserta, kami merasa event BEF ini dapat mewadahi ide-ide kreatif dari peserta untuk dikembangkan, terlebih lagi dengan banyaknya peserta yang mengikuti event ini dari berbagai universitas ternama di Indonesia membuat event ini lebih kompetitif. Selain itu, kami juga dapat banyak insight dari komentar dewan juri yang sangat membangun dan berguna bagi para peserta kedepannya.",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center py-16 gap-12 text-center mx-auto overflow-hidden">
      <AnimateSubDiv className="flex flex-col justify-center items-center gap-4">
        <Text color="navy" variant="h2" weight="extrabold">
          Insight
        </Text>
        <Text>What they say about us?</Text>
      </AnimateSubDiv>
      <AnimateSubDiv className="relative w-10/12 mt-4">
        <Slider {...settings}>
          {items.map((data, i) => {
            return (
              <div
                className="p-5 bg-orange min-h-[54rem] max-h-fit shadow-md shadow-light-gray my-2"
                key={i}
              >
                <img
                  src={data.image}
                  alt="people"
                  className="mx-auto mb-3 scale-100"
                />
                <Text variant="h3" weight="extrabold" color="white">
                  {data.name}
                </Text>
                <Text color="white">{data.winner}</Text>
                <hr className="border-red border-2 my-3 bg-red" />
                <Text color="white" className="text-justify">
                  {data.content}
                </Text>
              </div>
            );
          })}
        </Slider>
      </AnimateSubDiv>
    </div>
  );
};

export default SectionFive;
