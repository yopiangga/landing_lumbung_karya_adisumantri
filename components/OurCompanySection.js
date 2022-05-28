import { TitleComp } from "./TitleComp";
import Image from "next/image";
import copra2 from "public/images/product/copra-2.jpg";

export function OurCompanySection() {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-7xl w-full flex flex-col items-center text-center py-20">
        <TitleComp title="Our Company" desc="Lorem Ipsum Dollor sit ammet" />
        <div className="grid grid-cols-2 mt-20 gap-8">
          <div className="text-left">
            <h3 className="text-2xl font-semibold">Our Company</h3>
            <p className="text-gray-600 text-lg mt-8">
              When it comes to work innovation, PT Lumbung Karya Adisumantri is
              an coconut Industry leader, and these basic principles have been
              the cornerstone of our culture and inventions, allowing us to
              build and produce modern lifestyle statements synonymous with life
              winners.
            </p>
            <p className="text-gray-600 text-lg mt-6">
              We believe in providing exceptional value to our esteemed clients.
              We are committed to high-quality organic products as well as the
              economic development of local farmers. As a result, we can offer
              products at competitive prices both domestically and
              internationally.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-3/4 h-full relative">
              <div className="absolute left-0 bottom-0 w-full h-full bg-yellow-400 rounded-lg"></div>
              <div className="w-full h-full left-10 bottom-10 absolute rounded-lg overflow-hidden">
                <Image src={copra2} layout="responsive" objectFit="contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
