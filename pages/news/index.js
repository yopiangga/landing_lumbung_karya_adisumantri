import LayoutLanding from "layouts/landing/index";
import Link from "next/link";
import Image from "next/image";
import news1 from "public/images/news/news-1.png";
import news2 from "public/images/news/news-2.png";
import vision from "public/images/bg/vision-mission.jpg";

const news = [
  {
    title: "MSSRF project to enhance coconut farmers’ income in Kuttanad",
    desc: "The M.S. Swaminathan Research Foundation (MSSRF) has joined hands with the SAARC Development Fund (SDF)",
    date: "May, 06 2022",
    image: news1,
  },
  {
    title: "Coconut husk charcoal maker strikes big deal",
    desc: "A Local producer of charcoal briskets from coconut husks has received the greenlight to export part of its produce ",
    date: "March, 11 2021",
    image: news2,
  },
];

export default function News() {
  return (
    <LayoutLanding page="news" title="News">
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
              News
            </h1>

            <p
              className="max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl"
              data-aos="fade-right"
            >
              Latest story from our company
            </p>
          </div>
        </div>
      </section>

      <div className="flex justify-center bg-white">
        <div className="w-11/12 max-w-7xl py-16">
          <div className="grid 2xl:grid-cols-5 xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12 w-full mt-6">
            {news.map((el, idx) => {
              return (
                <Link href={`/news/${idx + 1}`} key={idx}>
                  <div className=" p-4 hover:cursor-pointer">
                    <div className="bg-white rounded-lg text-center">
                      <div className="w-full h-56 rounded-lg overflow-hidden mx-auto">
                        <Image
                          src={el.image}
                          layout="responsive"
                          objectFit="contain"
                        />
                      </div>

                      <h2 className="text-lg text-gray-900 font-medium title-font my-4">
                        {el.title}
                      </h2>
                      <p
                        className="leading-relaxed text-base"
                        data-aos="fade-up"
                      >
                        {el.desc}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </LayoutLanding>
  );
}
