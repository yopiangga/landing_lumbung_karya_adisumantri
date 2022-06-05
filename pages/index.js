import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HomeSection } from "components/HomeSection";
import { OurCompanySection } from "components/OurCompanySection";
import { VisionSection } from "components/VisionSection";
import { ReasonSection } from "components/ReasonSection";
import { TestimonialSection } from "components/TestimonialSection";
import { NewsSection } from "components/NewsSection";
import { FaqSection } from "components/FaqSection";
import { AboutSection } from "components/AboutSection";
import { ValuesSection } from "components/ValuesSection";
import { ProductSection } from "components/ProductSection";
import { PaymentSection } from "components/PaymentSection";
import { Navbar } from "components/Navbar";
import { CertifiedSection } from "components/CertifiedSection";
import { GlobeSection } from "components/GlobeSection";
import { ContactSection } from "components/ContactSection";
import { Footer } from "components/Footer";
import LayoutLanding from "layouts/landing";
import { FounderSection } from "components/FounderSection";

export default function Home() {
  const [active, setActive] = useState(0);

  const menu = [
    { title: "Home", href: "#home" },
    { title: "About Company", href: "#about-company" },
    { title: "Why Choose Me?", href: "#why-choose-me" },
    { title: "Special Product", href: "#special-product" },
    { title: "Testimonial", href: "#testimonial" },
    { title: "News", href: "#news" },
    { title: "FAQ", href: "#faq" },
    { title: "Payment", href: "#payment" },
    { title: "Contact Us", href: "#contact-us" },
  ];

  return (
    <LayoutLanding page="home" title="Home">
      <HomeSection />
      <OurCompanySection />
      <VisionSection />
      <ValuesSection />
      <ReasonSection />
      <ProductSection />
      <TestimonialSection />
      <NewsSection />
      <FounderSection />
      <FaqSection />
      <PaymentSection />
      <CertifiedSection />
      <GlobeSection />
      <ContactSection />
    </LayoutLanding>
  );
}
