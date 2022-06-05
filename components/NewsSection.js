import { TitleComp } from "./TitleComp";
import Slider from "react-slick";
import Image from "next/image";
import news1 from "public/images/news/news-1.png";
import news2 from "public/images/news/news-2.png";
import Link from "next/link";
import { BrowserView, MobileView } from "react-device-detect";

export function NewsSection() {
  const settingsMobile = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
  };
  const settingsDesktop = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 2,
  };
  const items = [
    {
      title: "MSSRF project to enhance coconut farmers’ income in Kuttanad",
      desc: "The M.S. Swaminathan Research Foundation (MSSRF) has joined hands with the SAARC Development Fund (SDF)",
      image: news1,
    },
    {
      title: "Coconut husk charcoal maker strikes big deal",
      desc: "A Local producer of charcoal briskets from coconut husks has received the greenlight to export part of its produce ",
      image: news2,
    },
  ];
  return (
    <div id="news" className="w-full flex justify-center">
      <div className="max-w-7xl w-full flex flex-col items-center text-center py-20">
        <TitleComp title="NEWS" desc="Latest story from our company" />
        <div className="mt-16 h-full w-full ">
          <BrowserView>
            <Slider {...settingsDesktop}>
              {items.map((el, idx) => {
                return (
                  <Link href={`/news/${idx + 1}`} key={idx}>
                    <div className=" p-4 hover:cursor-pointer">
                      <div className="bg-white rounded-lg">
                        <div className="w-full h-56 rounded-lg overflow-hidden mx-auto">
                          <Image
                            src={el.image}
                            layout="responsive"
                            objectFit="contain"
                          />
                        </div>

                        <h2 className="text-lg text-gray-900 font-medium title-font my-4">
                          {el.title}
                        </h2>
                        <p className="leading-relaxed text-base">{el.desc}</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </Slider>
          </BrowserView>
          <MobileView>
            <Slider {...settingsMobile}>
              {items.map((el, idx) => {
                return (
                  <Link href={`/news/${idx + 1}`} key={idx}>
                    <div className=" p-4 hover:cursor-pointer">
                      <div className="bg-white rounded-lg">
                        <div className="w-full h-56 rounded-lg overflow-hidden mx-auto">
                          <Image
                            src={el.image}
                            layout="responsive"
                            objectFit="contain"
                          />
                        </div>

                        <h2 className="text-lg text-gray-900 font-medium title-font my-4">
                          {el.title}
                        </h2>
                        <p className="leading-relaxed text-base">{el.desc}</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </Slider>
          </MobileView>
        </div>
      </div>
    </div>
  );
}
