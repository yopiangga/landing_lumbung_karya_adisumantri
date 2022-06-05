import { TitleComp } from "./TitleComp";
import Image from "next/image";
import copra2 from "public/images/product/copra-2.jpg";
import jendralcoco from "public/images/jendralcoco.jpg";

export function OurCompanySection() {
  return (
    <div id="our-company" className="w-full flex justify-center">
      <div className="max-w-7xl w-full flex flex-col items-center text-center py-20 lg:px-0 px-8">
        <TitleComp title="Our Company" desc="Find out more about our company" />
        <div className="lg:hidden block w-full h-48 relative mt-12 rounded-lg overflow-hidden">
          <Image src={jendralcoco} layout="fill" objectFit="cover" />
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:mt-20 mt-12 gap-8">
          <div className="text-left">
            <h3 className="text-2xl font-semibold" data-aos="fade-up">
              Our Company
            </h3>
            <p
              className="text-gray-600 dark:text-white text-lg mt-8"
              data-aos="fade-up"
            >
              When it comes to work innovation, PT Lumbung Karya Adisumantri is
              an coconut Industry leader, and these basic principles have been
              the cornerstone of our culture and inventions, allowing us to
              build and produce modern lifestyle statements synonymous with life
              winners.
            </p>
            <p
              className="text-gray-600 dark:text-white text-lg mt-6"
              data-aos="fade-up"
            >
              We believe in providing exceptional value to our esteemed clients.
              We are committed to high-quality organic products as well as the
              economic development of local farmers. As a result, we can offer
              products at competitive prices both domestically and
              internationally.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-3/4 h-full relative">
              <div
                className="absolute left-0 bottom-0 w-full h-full bg-yellow-400 rounded-lg"
                data-aos="fade-right"
              ></div>
              <div
                className="w-full h-full left-10 bottom-10 absolute rounded-lg overflow-hidden"
                data-aos="fade-left"
              >
                <Image src={copra2} layout="responsive" objectFit="contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
