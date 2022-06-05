import { Footer } from "components/footer";
import { Navbar } from "components/Navbar";
import Head from "next/head";
import { AiOutlineWhatsApp } from "react-icons/ai";

export default function LayoutLanding({ children, title, page }) {
  const defaultTitle = "PT Lumbung Karya Adisumantri";
  const pageTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <main className="bg-white dark:bg-gray-800 dark:text-white overflow-hidden relative">
        <Navbar id={page} />

        <a
          target="_blank"
          rel="noreferrer"
          href="https://wa.me/6281538222363"
          className="fixed z-50 bottom-8 right-8 text-white bg-yellow-500 rounded-lg border text-xs border-yellow-500 font-medium px-5 py-2 shadow-lg flex gap-3 items-center"
        >
          <AiOutlineWhatsApp size={24} />
          Jendralcoco Support
        </a>
        {children}
        <Footer />
      </main>
    </>
  );
}
