import { TitleComp } from "./TitleComp";
import Image from "next/image";
import djp from "public/images/certificate/djp.jpg";
import mendagri from "public/images/certificate/mendagri.jpg";
import menkumham from "public/images/certificate/menkumham.jpg";
import oss from "public/images/certificate/oss.jpg";

export function CertifiedSection() {
  return (
    <div className="w-full flex justify-center text-center">
      <div className="max-w-7xl w-full py-20 flex flex-col items-center">
        <TitleComp
          title="Certified"
          desc="We provide the greatest prices on unquestionably high-quality products, ensuring quality from farmers through certified production"
        />
        <div className="w-full flex gap-2 mt-16">
          <div className="w-1/4 overflow-hidden">
            <Image src={mendagri} layout="responsive" objectFit="contain" />
          </div>
          <div className="w-1/4 overflow-hidden">
            <Image src={oss} layout="responsive" objectFit="contain" />
          </div>
          <div className="w-1/4 overflow-hidden">
            <Image src={menkumham} layout="responsive" objectFit="contain" />
          </div>
          <div className="w-1/4 overflow-hidden">
            <Image src={djp} layout="responsive" objectFit="contain" />
          </div>
        </div>
      </div>
    </div>
  );
}
