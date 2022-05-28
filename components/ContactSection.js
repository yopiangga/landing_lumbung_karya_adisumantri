import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import { TitleComp } from "./TitleComp";
import { useState } from "react";

export function ContactSection() {
  const [message, setMessage] = useState({
    fullname: "",
    email: "",
    textMessage: "",
  });

  function handleChange(e) {
    setMessage({ ...message, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // sendMessage(message.fullname, message.email, message.textMessage);
  }

  return (
    <div id="ContactUs" className="flex w-full justify-center">
      <div className="w-full max-w-7xl flex">
        <div className="lg:w-7/12 w-full py-20 lg:px-14 px-8 bg-gray-100 text-center">
          <div className="mt-12"></div>
          <TitleComp
            title="Contact Us"
            desc="Do You Need Help for “How to Order Our Products”? We Are Ready! Contact Us, Now!"
          />

          <div className="form">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullname"
                id=""
                className="bg-white border-2 border-gray-300 outline-none h-14 w-full text-lg px-4 text-gray-900 mt-16"
                placeholder="Name"
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                id=""
                className="bg-white border-2 border-gray-300 outline-none h-14 w-full text-lg px-4 text-gray-900 mt-6"
                placeholder="Email"
                onChange={handleChange}
              />
              <textarea
                type="text"
                name="textMessage"
                id=""
                rows={5}
                className="bg-white border-2 border-gray-300 outline-none w-full text-lg px-4 py-4 text-gray-900 mt-6"
                placeholder="Message"
                onChange={handleChange}
              />

              <button
                type="submit"
                className=" bg-gray-900 hover:bg-gray-900 text-white font-medium h-14 px-6 mt-8 text-lg"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
        <div className="lg:w-5/12 w-full py-20 lg:px-14 px-8">
          <div className="mt-12"></div>
          <TitleComp
            title="Our Headquarter"
            desc="For Customer Support and Query, Get in touch with us."
          />

          <div className="mt-12 flex flex-col gap-8">
            <div className="item flex gap-4">
              <div className="">
                <FiMapPin size={36} />
              </div>
              <div>
                <h2 className="text-xl font-medium mb-3">
                  PT Lumbung Karya Adisumantri
                </h2>
                <a
                  className="text-lg"
                  href="https://goo.gl/maps/rKmsvQXbLxtU36BRA"
                >
                  Jl Letjen Alamsyah Ratu Prawiranegara <br />
                  Ruko Foodcity No 5 Bandar Lampung <br />
                  Lampung, Sumatra, Indonesia
                </a>
              </div>
            </div>
            <div className="item flex gap-4">
              <div className="">
                <FiPhone size={36} />
              </div>
              <div>
                <h2 className="text-xl font-medium mb-3">WhatsApp</h2>
                <a className="text-lg" href="https://wa.me/6281538222363">
                  +62 815-3822-2363
                </a>
              </div>
            </div>
            <div className="item flex gap-4">
              <div className="">
                <FiMail size={36} />
              </div>
              <div>
                <h2 className="text-xl font-medium mb-3">Busines Email</h2>
                <a className="text-lg" href="mailto:info@aisoru.com">
                  adhi.unel@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
