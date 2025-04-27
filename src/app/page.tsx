import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./sections/Contact";
import DevelopmentProcessSection from "./sections/DevelopmentProcess";
import PricingSection from "./sections/Pricing";
import ServicesSection from "./sections/Services";
import WhatWeOfferSection from "./sections/WhatWeOffer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <ServicesSection />
        <WhatWeOfferSection />
        <DevelopmentProcessSection />
        <PricingSection />
        <Contact/>
      </main>
      <Footer />
    </>
  );
}
