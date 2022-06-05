import Slider from "react-slick";
import Image from "next/image";
import jenisKelapa from "public/images/background/jenis-kelapa.jpg";
import cadangan from "public/images/background/cadangan.jpg";
import pohonKelapa from "public/images/background/pohon-kelapa.jpg";
import { BrowserView, MobileView } from "react-device-detect";

export function HomeSection() {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
  };

  const bgList = [
    {
      id: 1,
      image: jenisKelapa,
      text: "YOU'VE COME TO THE RIGHT PLACE IF YOU'RE LOOKING FOR THE BEST COCONUT SOURCE.",
    },
    {
      id: 2,
      image: pohonKelapa,
      text: "Your best opportunity is right in front of you",
    },
    { id: 3, image: cadangan, text: "Trust us for your needs" },
  ];

  return (
    <>
      <BrowserView>
        <div className="w-full h-screen relative overflow-hidden">
          <Slider {...settings}>
            {bgList.map((el, idx) => {
              return (
                <div key={idx} className="w-full h-screen relative">
                  <div className="w-full h-full absolute">
                    <Image
                      src={el.image}
                      layout="responsive"
                      objectFit="contain"
                    />
                  </div>
                  <div className="w-full h-full absolute bg-black bg-opacity-60"></div>
                  <div className="absolute w-full h-full flex flex-col justify-center px-20 text-white text-center">
                    <h1 className="text-4xl" data-aos="fade-up">
                      {el.text}
                    </h1>
                    <h3 className="text-xl mt-4" data-aos="fade-right">
                      Welcome to Our Company!
                    </h3>
                    <h2 className="mt-4 text-2xl" data-aos="fade-left">
                      -- PT. Lumbung Karya Adisumantri -- <br /> Jendral Coco
                    </h2>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </BrowserView>
      <MobileView>
        <div className="w-full h-screen relative overflow-hidden">
          <Slider {...settings}>
            {bgList.map((el, idx) => {
              return (
                <div key={idx} className="w-full h-screen relative">
                  <div className="w-full h-full absolute">
                    <Image src={el.image} layout="fill" objectFit="cover" />
                  </div>
                  <div className="w-full h-full absolute bg-black bg-opacity-60"></div>
                  <div className="absolute w-full h-full flex flex-col justify-center px-8 text-white text-center">
                    <h1 className="text-4xl">{el.text}</h1>
                    <h3 className="text-xl mt-4">Welcome to Our Company!</h3>
                    <h2 className="mt-4 text-2xl">
                      -- PT. Lumbung Karya Adisumantri -- <br /> Jendral Coco
                    </h2>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </MobileView>
    </>
  );
}
