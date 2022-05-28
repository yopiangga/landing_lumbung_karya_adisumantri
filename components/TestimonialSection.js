import React from "react";
import Slider from "react-slick";
import { TitleComp } from "./TitleComp";
import { FaQuoteLeft } from "react-icons/fa";
import Flag from "react-world-flags";

export function TestimonialSection() {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
  };

  const items = [
    {
      message:
        "They have premium grade coconut charcoal briquette. Maintain open lines of communication with the owner. I will definitely order again.",
      name: "Mohammed Abdad ",
      flag: "qat",
    },
    {
      message:
        "The VCO was of exceptional quality. Their service is excellent.",
      name: "Gregor D. ",
      flag: "fin",
    },
    {
      message: "So satissying",
      name: "Kira Manuela ",
      flag: "ph",
    },
  ];
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-7xl w-full flex flex-col items-center text-center py-20">
        <TitleComp
          title="WHAT PEOPLE SAID"
          desc="Lorem Ipsum Dollor sit ammet"
        />
        <div className="mt-16 h-full w-full ">
          <Slider {...settings}>
            {items.map((el, idx) => {
              return (
                <div
                  key={idx}
                  className="flex flex-col justify-center items-center w-full"
                >
                  <FaQuoteLeft className="text-gray-300 text-4xl mx-auto" />
                  <p className="mt-8 text-lg text-gray-600">{el.message}</p>
                  <h4 className="text-lg text-gray-900 mt-4 font-medium">
                    {el.name}
                  </h4>
                  <Flag code={el.flag} className="w-10 h-10 mt-4 mx-auto" />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}
