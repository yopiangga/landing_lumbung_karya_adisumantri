import Link from "next/link";
import Image from "next/image";
import { BrowserView, MobileView } from "react-device-detect";
import { useEffect, useState } from "react";
import { getProducts } from "services/product_services";

import p11 from "public/images/product/coconut-charcoal-briquette-1.jpg";
import p12 from "public/images/product/coconut-charcoal-briquette-2.jpg";
import p13 from "public/images/product/coconut-charcoal-briquette-3.jpg";

import p21 from "public/images/product/copra-1.jpg";
import p22 from "public/images/product/copra-2.jpg";
import p23 from "public/images/product/copra-3.jpg";

import p31 from "public/images/product/desiccated-coconut-1.jpg";
import p32 from "public/images/product/desiccated-coconut-2.jpg";
import p33 from "public/images/product/desiccated-coconut-3.jpg";

import p41 from "public/images/product/rbd-coconut-oil-1.jpg";
import p42 from "public/images/product/rbd-coconut-oil-2.jpg";
import p43 from "public/images/product/rbd-coconut-oil-3.jpg";

import p51 from "public/images/product/virgin-coconut-oil-1.jpg";
import p52 from "public/images/product/virgin-coconut-oil-2.jpg";
import p53 from "public/images/product/virgin-coconut-oil-3.jpg";

import { TitleComp } from "./TitleComp";
import Slider from "react-slick";

const items2 = [
  {
    title: "Coconut Charcoal Briquette",
    image: p11,
  },
  {
    title: "Coconut Charcoal Briquette",
    image: p12,
  },
  {
    title: "Coconut Charcoal Briquette",
    image: p13,
  },
  {
    title: "Copra",
    image: p21,
  },
  {
    title: "Copra",
    image: p22,
  },
  {
    title: "Copra",
    image: p23,
  },
  {
    title: "Desiccated Coconut",
    image: p31,
  },
  {
    title: "Desiccated Coconut",
    image: p32,
  },
  {
    title: "Desiccated Coconut",
    image: p33,
  },
  {
    title: "Rbd Coconuto Oil",
    image: p41,
  },
  {
    title: "Rbd Coconuto Oil",
    image: p42,
  },
  {
    title: "Rbd Coconuto Oil",
    image: p43,
  },
  {
    title: "Virgin Coconut Oil",
    image: p51,
  },
  {
    title: "Virgin Coconut Oil",
    image: p52,
  },
  {
    title: "Virgin Coconut Oil",
    image: p53,
  },
];

export function ProductSection() {
  const [products, setProducts] = useState([]);

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
    slidesToShow: 3,
  };

  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div id="product" className="w-full flex justify-center">
      <div className="max-w-7xl w-full flex flex-col items-center text-center py-20">
        <TitleComp title="PRODUCTS" desc="Our newest product" />
        <div className="mt-16 h-full w-full">
          <BrowserView>
            <Slider {...settingsDesktop}>
              {products.map((el, idx) => {
                return (
                  <div className=" p-4" key={idx}>
                    <div className="bg-white rounded-lg">
                      <div className="w-full h-56 rounded-lg overflow-hidden mx-auto">
                        {/* <Image
                          src={el?.data?.image}
                          layout="responsive"
                          objectFit="contain"
                        /> */}
                        <img
                          src={el?.data?.image}
                          className="w-full h-full relative z-0"
                        />
                      </div>

                      <h2 className="text-lg text-gray-900 font-medium title-font my-4">
                        {el?.data?.name}
                      </h2>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </BrowserView>
          <MobileView>
            <Slider {...settingsMobile}>
              {products.map((el, idx) => {
                return (
                  <div className=" p-4" key={idx}>
                    <div className="bg-white rounded-lg">
                      <div className="w-full h-56 rounded-lg overflow-hidden mx-auto">
                        {/* <Image
                          src={el?.data?.image}
                          layout="responsive"
                          objectFit="contain"
                        /> */}
                        <img
                          src={el?.data?.image}
                          className="w-full h-full relative z-0"
                        />
                      </div>

                      <h2 className="text-lg text-gray-900 font-medium title-font my-4">
                        {el?.data?.name}
                      </h2>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </MobileView>
        </div>
      </div>
    </div>
  );
}
