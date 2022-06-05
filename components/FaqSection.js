import { useState } from "react";
import { TitleComp } from "./TitleComp";
import { FiMinus, FiPlus } from "react-icons/fi";

export function FaqSection() {
  const [active, setActive] = useState();
  const [h, setH] = useState();

  const faq = [
    {
      question: "Do you still have the packaging?",
      answer:
        "Of course. We can combine and package your product in accordance with your manufacturing method and standards.",
    },
    {
      question: "Is there a minimum stock quantity for your products?",
      answer:
        "Yes, the minimum order is a 20 ft container, commonly referred to as an FCL (Full Container Load)",
    },
    {
      question: "Where can I purchase your products?",
      answer:
        "You may contact us by Whatsapp +6281538222363, or via email at adhi.unel@gmail.com. It is available on this website.",
    },
    {
      question: "Can I receive a sample of your product?",
      answer:
        "Of course you can. We will give you a sample of our products if you request one. The only thing you have to pay for is shipping.",
    },
    {
      question: "How long does it take to make a product?",
      answer: "It can take anywhere between 10 and 25 days.",
    },
    {
      question: "How about the payment terms?",
      answer:
        "You have the option of using letter of credit (L/C) or a telegraphic transfer (T/T).",
    },
    {
      question: "What shipping options should we consider?",
      answer: "We can make deliveries FOB, CNF, or CIF.",
    },
    {
      question:
        "Do you have the capability of producing custom things based on my specifications?",
      answer: "You are welcome to discuss it with us.",
    },
  ];

  return (
    <div id="faq" className="w-full flex justify-center">
      <div className="max-w-7xl w-full flex flex-col items-center text-center py-20">
        <TitleComp
          title="Frequently Asked Questions"
          desc="You can see some FAQ here!"
        />
        <div
          className="row justify-center mt-16 mx-auto text-left text-lg"
          style={{ maxWidth: "600px" }}
        >
          {faq.map(function (el, idx) {
            return (
              <div
                key={idx}
                className="col-lg-10 col-md-12 col-sm-12"
                data-aos="fade-up"
              >
                <div className="team-item flex px-4 py-4 justify-between">
                  <div className="team-content-1 mr-4 ">
                    <h6 className="font-medium">{el.question}</h6>
                    <p
                      id={`answer${idx}`}
                      style={{ height: `${h?.[`answer${idx}`]}px` }}
                      className="m-0 w-full text-gray-600 dark:text-white text-md mt-2 h-0 overflow-hidden duration-300"
                    >
                      {el.answer}
                    </p>
                  </div>
                  <div className="action">
                    <div
                      className="w-5 h-5 flex justify-center items-center cursor-pointer group"
                      onClick={() => {
                        if (active?.[`answer${idx}`]) {
                          setActive({
                            ...active,
                            [`answer${idx}`]: false,
                          });
                          setH({
                            ...h,
                            [`answer${idx}`]: 0,
                          });
                        } else {
                          setActive({
                            ...active,
                            [`answer${idx}`]: true,
                          });
                          const a = document.querySelector(
                            `#answer${idx}`
                          ).scrollHeight;
                          setH({
                            ...h,
                            [`answer${idx}`]: a,
                          });
                        }
                      }}
                    >
                      {active?.[`answer${idx}`] ? (
                        <FiMinus className="group-hover:text-main scale-100 group-hover:scale-110 rotate-0 group-hover:rotate-90 duration-200" />
                      ) : (
                        <FiPlus className="group-hover:text-main scale-100 group-hover:scale-110 rotate-0 group-hover:rotate-90 duration-200" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
