import Image from "next/image";

export function PaymentSection() {
  return (
    <div id="payment">
      <section className="text-white bg-gray-900 relative">
        <div className="w-full h-full absolute bg-black bg-opacity-50"></div>
        <div className="max-w-screen-xl relative px-4 py-32 mx-auto lg:h-fit lg:items-center lg:flex">
          <div className="max-w-3xl mx-auto text-center">
            <h1
              className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600"
              data-aos="fade-left"
            >
              OUR PAYMENT TERM
            </h1>

            <p
              className="max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl"
              data-aos="fade-right"
            >
              All payments should be made via T/T (Telegraph transfer) or L/C
              Irrevocable (Letter of Credit)
            </p>
          </div>
        </div>
      </section>

      <div className="flex justify-center relative">
        <div className="w-full h-full bg-leaves absolute"></div>
        <div className="w-11/12 max-w-7xl py-16 relative">
          <div className="container mx-auto py-6 bg-white dark:bg-gray-800">
            <div className="mb-6 lg:mb-12 text-center">
              <h2
                className="text-base text-yellow-600 font-semibold tracking-wide uppercase"
                data-aos="fade-up"
              >
                TERM
              </h2>
              <p
                className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
                data-aos="fade-up"
              >
                OUR DELIVERY TERM
              </p>
            </div>
            <div className="flex flex-wrap my-6 dark:text-white">
              <div
                className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8"
                data-aos="fade-right"
              >
                <div className="flex items-center mb-6">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="h-6 w-6 text-yellow-500"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                  </svg>
                  <div className="ml-4 text-xl">
                    <h3>FOB</h3>
                    <p className="text-sm text-yellow-500">Freight on Board</p>
                  </div>
                </div>
                <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                  We only have an obligation to pay for the shipping costs of
                  goods arriving at our warehouse is international port.
                </p>
              </div>
              <div
                className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8"
                data-aos="fade-up"
              >
                <div className="flex items-center mb-6">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="h-6 w-6 text-yellow-500"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                  </svg>
                  <div className="ml-4 text-xl">
                    <h3>CNF </h3>
                    <p className="text-sm text-yellow-500">Cost and Freight</p>
                  </div>
                </div>
                <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                  The cost of the ship is journey from our port to the nearest
                  port in your country is our responsibility.
                </p>
              </div>
              <div
                className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8"
                data-aos="fade-left"
              >
                <div className="flex items-center mb-6">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="h-6 w-6 text-yellow-500"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                  </svg>
                  <div className="ml-4 text-xl">
                    <h3>CIF</h3>
                    <p className="text-sm text-yellow-500">
                      Cost, Insurance, and Freight
                    </p>
                  </div>
                </div>
                <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                  All costs including insurance costs have been borne by us
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 ">
        <div className="text-center w-11/12 mx-auto py-12 z-20">
          <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block" data-aos="fade-up">
              For More Information About
            </span>
            <span className="block text-yellow-500" data-aos="fade-up">
              Shipment Procces And Term Of Payment
            </span>
          </h2>

          <div className="lg:mt-0 lg:flex-shrink-0">
            <div
              className="mt-12 inline-flex rounded-md shadow"
              data-aos="fade-up"
            >
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="py-4 px-6  bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500 focus:ring-offset-yellow-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
