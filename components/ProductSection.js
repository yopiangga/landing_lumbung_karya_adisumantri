import Link from "next/link";
import Image from "next/image";
import { BrowserView, MobileView } from "react-device-detect";
import { useEffect, useState } from "react";
import { getProducts } from "services/product_services";

import { TitleComp } from "./TitleComp";
import Slider from "react-slick";

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
