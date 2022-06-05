import { TitleComp } from "./TitleComp";
import Image from "next/image";
import maps from "public/images/maps/maps.jpg";

export function GlobeSection() {
  return (
    <div id="globe" className="w-full flex justify-center text-center">
      <div className="max-w-7xl w-full py-20 flex flex-col items-center">
        <TitleComp
          title="Export Maps"
          desc="Ideal step to meet your company's requirements"
        />
        <div className="w-full mt-16">
          <div className="w-full overflow-hidden" data-aos="fade-up">
            <Image src={maps} layout="responsive" objectFit="contain" />
          </div>
        </div>
      </div>
    </div>
  );
}
