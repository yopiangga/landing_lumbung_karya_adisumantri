import { TitleComp } from "./TitleComp";
import Image from "next/image";
import bintang from "public/images/icon/bintang.jpg";
import jempol from "public/images/icon/jempol.png";
import medali from "public/images/icon/medali.png";

export function ReasonSection() {
  const items = [
    {
      title: "SELECTED PRODUCTS",
      desc: "Products are made from high-quality coconut ingredients that have also been hand-picked.",
      image: jempol,
    },
    {
      title: "HIGHEST QUALITY",
      desc: "Quality control points are supposed to apply to each product.",
      image: bintang,
    },
    {
      title: "PROFESSIONAL STANDARDS",
      desc: "Professionals from PT. Lumbung Karya Adisumantri will help you at every stage.",
      image: medali,
    },
  ];
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-7xl w-full flex flex-col items-center text-center py-20">
        <TitleComp
          title="THE REASON FOR CHOOSING US"
          desc="Lorem Ipsum Dollor sit ammet"
        />
        <div className="grid grid-cols-3 mt-16 gap-6">
          {items.map((el, idx) => {
            return (
              <div className="item" key={idx}>
                <div className="w-20 h-20 rounded-lg overflow-hidden mx-auto">
                  <Image
                    src={el.image}
                    layout="responsive"
                    objectFit="contain"
                  />
                </div>
                <h3 className="mt-6 text-xl">{el.title}</h3>
                <p className="mt-4">{el.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
