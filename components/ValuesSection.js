import { TitleComp } from "./TitleComp";
import Image from "next/image";
import setting from "public/images/icon/setting.png";
import jempol from "public/images/icon/jempol.png";
import centang from "public/images/icon/centang.png";

export function ValuesSection() {
  const items = [
    {
      title: "SKILLS",
      desc: "Skill and smart evidence-based solutions are at the core of everything Barine Food does.",
      image: setting,
    },
    {
      title: "CENTERED",
      desc: "Our employees and partners worked with local communities, involving them in decision-making at all levels.",
      image: jempol,
    },
    {
      title: "EFFECTIVE",
      desc: "We effect long-term change for fishermen, their families, and the communities at large",
      image: centang,
    },
  ];
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-7xl w-full flex flex-col items-center text-center py-20">
        <TitleComp
          title="OUR CORE VALUES"
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
