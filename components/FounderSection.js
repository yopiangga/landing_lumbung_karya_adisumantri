import { TitleComp } from "./TitleComp";
import Image from "next/image";
import imageFounder from "public/images/founder/founder.jpg";

export function FounderSection() {
  return (
    <div id="founder" className="w-full flex justify-center">
      <div className="max-w-7xl w-full flex flex-col items-center text-center py-20 px-8">
        <TitleComp title="FOUNDER" desc="Founder this company" />
        <div className="flex justify-center mt-16 gap-6">
          <div className="item" data-aos="fade-up">
            <div className="w-56 h-56 rounded-lg overflow-hidden mx-auto relative shadow-lg">
              <Image src={imageFounder} layout="fill" objectFit="contain" />
            </div>
            <h3 className="mt-6 text-xl">Adhi Unel</h3>
            <p className="mt-4">Founder PT Lumbung Karya Adisumantri</p>
          </div>
        </div>
      </div>
    </div>
  );
}
