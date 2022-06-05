import LayoutLanding from "layouts/landing/index";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { getProducts } from "services/product_services";
import Image from "next/image";
import vision from "public/images/bg/vision-mission.jpg";

export default function Product() {
  const [active, setActive] = useState({ idx: 0, choice: 0 });
  const [products, setProducts] = useState([]);

  const settings = {
    // dots: true,
    autoplay: true,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
  };

  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(res);
        // console.log(res)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function convertTextToMessage(text) {
    return text.replace(" ", "%20");
  }

  return (
    <LayoutLanding page="product" title="Product">
      <section className="text-white bg-gray-900 relative">
        <div className="w-full h-full overflow-hidden absolute">
          <Image src={vision} layout="fill" objectFit="cover" />
        </div>
        <div className="w-full h-full absolute bg-black bg-opacity-50"></div>
        <div className="max-w-screen-xl relative px-4 py-32 mx-auto lg:h-fit lg:items-center lg:flex">
          <div className="max-w-3xl mx-auto text-center">
            <h1
              className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600"
              data-aos="fade-left"
            >
              Product
            </h1>

            <p
              className="max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl"
              data-aos="fade-right"
            >
              Our products are guaranteed quality and quality
            </p>
          </div>
        </div>
      </section>

      <div className="flex justify-center">
        <div className="w-11/12 max-w-7xl py-16 ">
          <h1 className="text-3xl mb-3" data-aos="fade-up">
            OUR BEST PRODUCTS
          </h1>
          <p data-aos="fade-up">
            We are committed to bringing high-quality products and comprehensive
            services. We have proudly offered our Commodity Products for
            International Marketing with that positive attitude and confidence.
            We encourage you to join us in experiencing the richness of
            Indonesian spices and building a long-term mutually beneficial
            partnership.
          </p>

          <div className="grid 2xl:grid-cols-2 xl:grid-cols-1 lg:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-x-6 gap-y-12 w-full mt-6">
            {products.map((el, idx) => {
              return (
                <div
                  key={idx}
                  className="relative w-full flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 mx-auto border border-white bg-white"
                  data-aos="fade-up"
                >
                  <div className="md:w-72 md:h-full h-64 relative">
                    <Slider {...settings}>
                      {el?.data?.image.map((e, i) => {
                        return (
                          <div key={i} className="h-56 py-4">
                            {/* <Image
                              src={e}
                              layout="responsive"
                              objectFit="cover"
                            /> */}
                            <img
                              src={e}
                              className="w-full h-full relative z-0"
                            />

                            <h4 className="absolute z-10 bottom-4 left-4 text-white font-medium">
                              PT Lumbung Karya Adisumantri
                            </h4>
                          </div>
                        );
                      })}
                    </Slider>
                  </div>

                  <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                    <h3 className="font-black text-gray-800 md:text-3xl text-xl mb-2">
                      {el?.data?.name}
                    </h3>
                    <ul className="flex text-center border-b border-gray-200 mb-4">
                      <li className="flex-1">
                        <button
                          onClick={() => setActive({ idx: idx, choice: 0 })}
                          className={`w-full relative block p-3 text-sm font-medium bg-white border-gray-200 ${
                            (active.idx == idx && active.choice == 0) ||
                            active.idx != idx
                              ? "border-t border-l border-r"
                              : ""
                          }`}
                        >
                          <span className="absolute inset-x-0 w-full h-px bg-white -bottom-px"></span>
                          General
                        </button>
                      </li>

                      <li className="flex-1">
                        <button
                          onClick={() => setActive({ idx: idx, choice: 1 })}
                          className={`block relative w-full p-3 text-sm font-medium bg-white border-gray-200 ${
                            active.idx == idx && active.choice == 1
                              ? "border-t border-l border-r"
                              : ""
                          }`}
                        >
                          <span className="absolute inset-x-0 w-full h-px bg-white -bottom-px"></span>
                          Detail{" "}
                        </button>
                      </li>
                    </ul>

                    <div
                      className={`${
                        (active.idx == idx && active.choice == 0) ||
                        active.idx != idx
                          ? "block"
                          : "hidden"
                      }`}
                    >
                      <p className="md:text-lg text-gray-500 text-base mb-3">
                        {el?.data?.description}
                      </p>

                      <a
                        href={`https://wa.me/6281538222363?text= ${convertTextToMessage(
                          el?.data?.cta
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-warning text-white"
                      >
                        INQUIRY NOW
                      </a>
                    </div>

                    <div
                      className={`${
                        active.idx == idx && active.choice == 1
                          ? "block"
                          : "hidden"
                      }`}
                    >
                      {el?.data?.ingredients.map((spe, i) => {
                        return (
                          <div key={i} className="flex gap-4">
                            <div className="lg:w-40 w-1/3 min-w-fit">
                              <h4 className="font-medium">{spe.label}</h4>
                            </div>
                            <div className="grow">
                              <h4>{spe.value}</h4>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </LayoutLanding>
  );
}
