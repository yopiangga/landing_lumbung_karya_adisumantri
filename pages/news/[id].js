import { useRouter } from "next/router";
import LayoutLanding from "layouts/landing/index";
import news1 from "public/images/news/news-1.png";
import news2 from "public/images/news/news-2.png";
import Image from "next/image";
import { useState } from "react";
import vision from "public/images/bg/vision-mission.jpg";

const news = [
  {
    title: "MSSRF project to enhance coconut farmers’ income in Kuttanad",
    description:
      "The M.S. Swaminathan Research Foundation (MSSRF) has joined hands with the SAARC Development Fund (SDF)",
    date: "May, 06 2022",
    image: news1,
    essay: [
      "The M.S. Swaminathan Research Foundation (MSSRF) has joined hands with the SAARC Development Fund (SDF) to launch an ambitious project to boost farm income in Kuttanad by helping farmers make value-added products from coconut.",
      "Officials of the MSSRF say a Joint Liability Group (JLG) comprising farmers has been constituted for the purpose. The value-added products made from coconuts procured solely from the below sea-level region are expected to hit the market under the brand name ‘Kera Saras’ in October this year.",
      "“It is a model project funded by the SDF to promote coconut farmers in Kuttanad. A wide range of value-added products such as coconut oil, virgin oil, coconut milk, powder, coconut water, and coir geotextiles, to name a few, can be made from it. The JLG will begin with producing coconut oil and virgin oil before launching other products. The project will ensure higher income for farmers, increased employment, and a rise in coconut production in Kuttanad, while consumers will get the best products made in the below sea-level region,” says Jibin Thomas, coordinator, MSSRF, Kuttanad centre.",
      "Along with paddy, coconut is an integral part of the agricultural system in Kuttanad. According to a report prepared by the MSSRF in 2007, rice and coconut contribute to about 80% of agricultural income in Kuttanad. The area occupied by paddy and coconut is 38% and 45% of the cropped area respectively. That said, coconut growers nowadays are finding the going tough due to the declining yield and price of coconut.",
      "As part of the project, the MSSRF is providing support in the form of technology, machinery, training, infrastructure, and market backup to the members of the JLG. The production unit being constructed at Pulinkunnu in Kuttanad will be ready in two months. “Value-addition is the best way to increase the income of coconut farmers. As the next step, the JLG, which currently has 50 members, will be expanded to make it a big venture. This hopefully with the financial assistance of the Union and State governments,” Mr. Thomas says.",
      "The Central Plantation Crops Research Institute (CPCRI), Kasaragod, CPCRI Regional Station, Kayamkulam, Kerala Agricultural University, and Tamil Nadu Agricultural University, are also contributing to the project in the form of imparting training, technical expertise, and so on.",
      "The SDF, established in 2005, is the umbrella financial institution of the South Asian Association for Regional Cooperation (SAARC).",
    ],
  },
  {
    title: "Coconut husk charcoal maker strikes big deal",
    description:
      "A Local producer of charcoal briskets from coconut husks has received the greenlight to export part of its produce ",
    date: "March, 11 2021",
    image: news2,
    essay: [
      "A Local producer of charcoal briskets from coconut husks has received the greenlight to export part of its produce to Canada, Mexico and the United States of America (USA).",
      "The offer will enable Zaacoal Company Limited, the local producer of the clean energy fuel, to expand its production, contribute to saving the environment, and employ more people, especially the youth.",
      "The greenlight follows the signing of a memorandum of understanding between Zaacoal and a Canadian company, QE 24 Group, for the distribution of the coconut husk charcoal on the international market, starting from the three countries.",
      "The agreement will also support Zaacoal Company Limited to scale up the processing of coconut waste into charcoal for both domestic and industrial use.",
      "The Chief Executive Officer of Zaacoal, Mr Amin Sulley, signed for his company, while the Chief Operations Officer of QE 24 Group (Canada) in Africa, Mr Steve Asare Hackman, initialled for his company.",
      "Staff of the two companies witnessed the signing ceremony which took place at Pese, near Dodowa, in the Shai-Osudoku District in the Greater Accra Region.",
      "Research trials",
      "At the ceremony, Mr Sulley said coconut waste initially had no use but upon research trials by his outfit, it was found out that the waste could be processed into charcoal.",
      "He said the company had since started processing coconut waste, and currently produced about three tonnes of the new commodity per hour.",
      "Processing of the coconut waste is environmentally friendly because no tree is cut, and moreover there is no pollution that is harmful to the lives of people.",
      "Using the charcoal from the coconut waste either for domestic or industrial purposes does not also produce ash, making it the best of all kinds of charcoal, the founder and CEO stated.",
      "Marketing",
      "Mr Hackman expressed satisfaction that his company would now be marketing the commodity on the international market.",
      "Mr Hackman stated that the price of their produce on the Ghanaian market would be cheaper and affordable to all, adding that it was one of their main reasons for going into the production of the commodity.",
      "The Director in-charge of Sales and Marketing of Zaacoal Company Limited, Mr Mawuli Gbedawu, said the Ghanaian public was initially not too receptive to the charcoal produced from coconut waste but added that now they had fully embraced it.",
      "Jakarta (ANTARA) - President Joko Widodo (Jokowi), First Lady Iriana, and the entourage departed for Jambi Province for a working visit on Thursday to distribute cooking oil and to visit temples.",
      "The head of state and the entourage took off aboard the Indonesia-1 Presidential Aircraft from Soekarno-Hatta International Airport, Tangerang, at around 7 a.m. local time, according to a statement from the presidential office.",
      "Upon arrival at the Sultan Thaha Saifuddin Airport, Jambi City, the president will head directly to Angso Duo Market to hand over Cooking Oil Direct Cash Assistance (BLT) to the beneficiary communities.",
      "Later, Jokowi is scheduled to continue his trip to Pudak Village, Kumpeh Ulu District, Muaro Jambi District, to inspect the areca nut factory as well as kick off the exports of betel nuts.",
      "After the export release, the president and his entourage will head to the Muaro Jambi National Cultural Conservation Area (KCBN), Muaro Jambi District  to visit Kedaton Temple.",
      "On the way to Muaro Jambi KCBN, the president is also scheduled to review the infrastructure project to improve the quality of the Muaro Jambi Temple access road and Muara Sabak Port.",
      "Ending a series of activities in Jambi Province, the President and First Lady will again hand over several aids to beneficiary communities in Bedug Market, Jambi City, before heading to the Sultan Thaha Saifuddin Airport, Jambi City, to return to Jakarta.",
      "Accompanying the President and First Lady Iriana on the flight to Jambi Province were Minister of State Secretary Pratikno, Minister of Public Works and Public Housing (PUPR) Basuki Hadimuljono, Head of the Presidential Secretariat Heru Budi Hartono, Military Secretary of the President Air Vice Marshal M. Tonny Harjono, Commander of the Presidential Guards (Paspampres) Major General Tri Budi Utomo, Deputy for Protocol, the Press and Media of the Presidential Secretariat Bey Machmudin, and Coordinator of the Presidential Special Staff Ari Dwipayana. ",
    ],
  },
];

export default function NewsDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [article, setArticle] = useState(news[id - 1]);

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
              Detail News
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

      <div className="flex justify-center">
        <div className="w-11/12 max-w-7xl py-16">
          <h1 className="text-4xl font-bold mb-2" data-aos="fade-up">
            {article?.title}
          </h1>
          <h5 className="font-medium text-sm mb-8" data-aos="fade-up">
            Date : {article?.date}
          </h5>
          <div className="w-full relative mb-8" data-aos="fade-up">
            <Image src={article?.image} layout="responsive" objectFit="cover" />
          </div>
          {article?.essay.map((item, index) => {
            return (
              <p key={index} className="mb-5" data-aos="fade-up">
                {item}
              </p>
            );
          })}
        </div>
      </div>
    </LayoutLanding>
  );
}
