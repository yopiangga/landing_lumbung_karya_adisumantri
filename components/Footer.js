import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <span className="block w-32 bg-gray-200 rounded-lg">
              {/* <Image src={logo2} layout="responsive" objectFit="cover" /> */}
            </span>

            <h2 className="mt-4 font-medium text-xl">
              PT Lumbung Karya Adisumantri
            </h2>

            <p className=" mt-2 text-sm text-gray-500 ">
              We are well known for best products as well as 24/7 available for
              support to our valuable customers. We know you are interested and
              want to know more about our products. so what are you waiting for.
              just fill our contact form, we would like to know you more about
              our quality products. so feel free to contact us at any time, our
              company person contact you within some times to solve your
              queries.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="font-medium text-xl">Company</p>

              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <Link href="/home">
                  <a className="hover:opacity-75 text-lg"> Home </a>
                </Link>
                <Link href="/about">
                  <a className="hover:opacity-75 text-lg"> About us </a>
                </Link>
                <Link href="/certificate">
                  <a className="hover:opacity-75 text-lg"> Certificate </a>
                </Link>
              </nav>
            </div>

            <div>
              <p className="font-medium text-xl">Services</p>

              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <Link href="/product">
                  <a className="hover:opacity-75 text-lg"> Product </a>
                </Link>
                <Link href="/news">
                  <a className="hover:opacity-75 text-lg"> News </a>
                </Link>
              </nav>
            </div>

            <div>
              <p className="font-medium text-xl">Helpful Links</p>

              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <Link href="/faq">
                  <a className="hover:opacity-75 text-lg"> FAQs </a>
                </Link>
                <Link href="/term">
                  <a className="hover:opacity-75 text-lg"> Term </a>
                </Link>
                <Link href="/certificate">
                  <a className="hover:opacity-75 text-lg"> Contact </a>
                </Link>
              </nav>
            </div>

            <div>
              <p className="font-medium text-xl">Legal</p>

              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a className="hover:opacity-75 text-lg" href="">
                  {" "}
                  Privacy Policy{" "}
                </a>
                <a className="hover:opacity-75 text-lg" href="">
                  {" "}
                  Terms & Conditions{" "}
                </a>
                <a className="hover:opacity-75 text-lg" href="">
                  {" "}
                  Returns Policy{" "}
                </a>
                <a className="hover:opacity-75 text-lg" href="">
                  {" "}
                  Accessibility{" "}
                </a>
              </nav>
            </div>
          </div>
        </div>

        <p className="mt-8 text-xs text-gray-500">
          &copy; 2022 PT Lumbung Karya Adisumantri
        </p>
      </div>
    </footer>
  );
}
