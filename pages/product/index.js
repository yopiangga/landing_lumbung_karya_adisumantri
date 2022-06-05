import LayoutLanding from "layouts/landing/index";
import Slider from "react-slick";

import Image from "next/image";

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
import { useState } from "react";
import vision from "public/images/bg/vision-mission.jpg";

const products = [
  {
    name: "Virgin Coconut Oil",
    description:
      "Virgin Coconut Oil is cold-pressed coconut oil made from fresh coconuts. VCO is a common ingredient in pharmaceuticals and cosmetics, as well as cooking oil and skin care products. Our VCO has a clear, pure appearance, a smooth, light mouthfeel, a fresh coconut scent, and no rancidity flavor. ",
    image: [p51, p52, p53],
    ingredients: [
      {
        label: "Insoluble Impurities ",
        value: "0.05% ",
      },
      {
        label: "Saponification Value ",
        value: "250-265 mg KOH/g ",
      },
      {
        label: "Acid Value ",
        value: "0.5% mg KOH/g ",
      },
      {
        label: "Peroxide Value ",
        value: "2% meq/kg",
      },
      {
        label: "Free Fatty Acid (as Oleic Acid) ",
        value: "0.1% ",
      },
      {
        label: "Free Fatty Acid (as Lauric Acid) ",
        value: "0.07% ",
      },
    ],
    cta: "Virgin Coconut Oil",
    packaging: "20 Litre/jerry can or according to customer’s request",
  },
  {
    name: "Coconut Charcoal Briquette",
    description:
      "Our coconut charcoal briquettes are made from high-quality, matured coconut shell sourced from various areas throughout Indonesia (Sulawesi, Sumatera and Java Islands). Coconut Charcoal Briquettes are made entirely of pure Coconut Shell Charcoal. Coconut shell charcoal is a valuable product derived from coconut. Shell charcoal is used in a variety of applications, including domestic and industrial fuel, as well as barbeque and heating material.",
    image: [p11, p12, p13],
    ingredients: [
      {
        label: "Cube",
        value: "2.5 x 2.5 x 2.5 cm (dimensions by request) ",
      },
      {
        label: "Burning Time",
        value: "Up to 3 hours Calories : 7100 Ã?Â¢?? 7600 Kcal/kg ",
      },
      {
        label: "Moisture",
        value: "< 5% Ash : < 2.1% ( Light ) ",
      },
      {
        label: "Fixed Carbon",
        value: "> 80% ",
      },
    ],
    cta: "Coconut Charcoal Briquette",
    packaging: "PP Bag 25 – 60 Kg or according to customer request",
  },
  {
    name: "Copra",
    description:
      "Coconut flesh that has been dried is known as copra. Copra is typically used as a head derivative product, and it plays an important role as a raw material in the production of coconut oil and its derivatives. Copra can also be used to feed animals. White copra or wet copra, smoked copra or dried copra, and sun-dried copra are the three types of copra. High quality copra is made from 300-day-old coconuts weighing 3-4 kg, resulting in copra with a water content of about 6-7 percent, making it resistant to nuisance organisms.",
    image: [p21, p22, p23],
    ingredients: [
      {
        label: "Grade",
        value: "Regular and Edible ",
      },
      {
        label: "Diameter",
        value: "6cm - 12cm ",
      },
      {
        label: "Moisture",
        value: "5% - 7% ",
      },
      {
        label: "Oil Content ",
        value: "65% - 70%",
      },
      {
        label: "FFA",
        value: "0.5% - 1.5% Rubbery : 5% Smoky : 5% Packaging",
      },
    ],
    cta: "Copra",
    packaging: "25-25- 50 kg/pp bag or according to customer request",
  },
  {
    name: "Dessicated Coconut",
    description:
      "Desiccated coconut is white and has the aroma and flavor of a fine coconut. Desiccated coconut is produced by drying out the flesh in a clean environment using a series of procedures that begin with the selection of fine material, removal of the shell, washing and stabilizing, grinding, drying, freezing, and packing. Dessicated coconut is widely used in the confectionery industry as an aroma enhancer in the production of chocolate bars or as an ingredient in nut products, the bakery industry, the frozen food industry, and household consumption.",
    image: [p31, p32, p33],
    ingredients: [
      {
        label: "Appearance & Colour",
        value: "White, free from yellow specks ",
      },
      {
        label: "Flavor and Taste ",
        value: "Mild and sweet coconut flavor ",
      },
      {
        label: "Size",
        value: "Fine granules of coconut ",
      },
      {
        label: "Physical Impurities",
        value: "Not more than 8 Pcs/ 100 Gram ",
      },
      {
        label: "Total Fat ",
        value: "65% +/- 2% ",
      },
      {
        label: "Particle Size ",
        value:
          "Retained on 12 mesh Max 10 % Retained on 20 mesh 80 % Passed through 20 mesh Max 10 % ",
      },
      {
        label: "PH",
        value: "6.1 6.7 ",
      },
      {
        label: "Moisture",
        value: "Max 3 % ",
      },
      {
        label: "Microbiological Analysis ",
        value:
          "Total Plate Count 5 X 103 cfu/ gr Max Mould 0 cfu/g Yeast 0/cfu/g E.Coli Negative/25 g Salmonella Negative/25 g ",
      },
    ],
    cta: "Dessicated Coconut",
    packaging: "25-50kgs/pp bag or according to customer’s request",
  },
  {
    name: "RBD Coconut Oil",
    description:
      "RBD Coconut Oil is a refined oil derived from copra. Several stages of RBD CNO production include using high-pressure extract, heating it, and then adding additional compounds that are useful for eliminating the smell and taste of coconut oil. Because of the high pressure refining process, RBD CNO has distinct characteristics. This coconut oil product is typically clearer, has a bland taste, and is odorless, making it an ideal raw material for soap, cosmetics, and commercial food processing.",
    image: [p41, p42, p43],
    ingredients: [
      {
        label: "Moisture Content",
        value: "0.1% (max) AOCS Ca 2c-25",
      },
      {
        label: "FFA as Lauric Acid Content ",
        value: "0.1% (max) - AOCS Ca 5a-40",
      },
      {
        label: "Iodine Value",
        value: "7.5-10.5 (max) - AOCS Cd 1-25 ",
      },

      {
        label: "Peroxide Value ",
        value: "1.0 meq/kg (max) AOCS Cd 8-53 ",
      },
      {
        label: "Color 51/4 Inch-Red ",
        value: "1.5 (max) AOCS Cc 13b-45 ",
      },
      {
        label: "Color 51/4 Inch-Yellow ",
        value: "15.0 (max)",
      },
    ],
    cta: "RBD Coconut Oil",
    packaging: "15 Litre/pail or according to customer’s request",
  },
];

export default function Product() {
  const [active, setActive] = useState({ idx: 0, choice: 0 });

  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
  };

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
                      {el.image.map((e, i) => {
                        return (
                          <div key={i} className="h-64">
                            <Image
                              src={e}
                              layout="responsive"
                              objectFit="cover"
                            />
                            <h4 className="absolute bottom-4 left-4 text-white font-medium">
                              PT Lumbung Karya Adisumantri
                            </h4>
                          </div>
                        );
                      })}
                    </Slider>
                  </div>

                  <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                    <h3 className="font-black text-gray-800 md:text-3xl text-xl mb-2">
                      {el.name}
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
                        {el.description}
                      </p>

                      <a
                        href={`https://wa.me/6281538222363?text= ${convertTextToMessage(
                          el.cta
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
                      {el.ingredients.map((spe, i) => {
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
