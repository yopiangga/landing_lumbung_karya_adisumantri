import { TitleComp } from "./TitleComp";
import Slider from "react-slick";

export function NewsSection() {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 3,
  };
  const items = [
    {
      title: "SELECTED PRODUCTS",
      desc: "Products are made from high-quality coconut ingredients that have also been hand-picked.",
    },
    {
      title: "SELECTED PRODUCTS",
      desc: "Products are made from high-quality coconut ingredients that have also been hand-picked.",
    },
    {
      title: "SELECTED PRODUCTS",
      desc: "Products are made from high-quality coconut ingredients that have also been hand-picked.",
    },
    {
      title: "SELECTED PRODUCTS",
      desc: "Products are made from high-quality coconut ingredients that have also been hand-picked.",
    },
  ];
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-7xl w-full flex flex-col items-center text-center py-20">
        <TitleComp title="NEWS" desc="Lorem Ipsum Dollor sit ammet" />
        <div className="mt-16 h-full w-full ">
          <Slider {...settings}>
            {items.map((el, idx) => {
              return (
                <div className=" p-4" key={idx}>
                  <div className="bg-white rounded-lg">
                    <img
                      className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6"
                      src="https://kuyou.id/content/images/ctc_2020021605150668915.jpg"
                      alt="Image Size 720x400"
                    />
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                      SUBTITLE
                    </h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                      Chichen Itza
                    </h2>
                    <p className="leading-relaxed text-base">
                      Fingerstache flexitarian street art 8-bit waistcoat.
                      Distillery hexagon disrupt edison bulbche.
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}
