import Head from "next/head";
import About from "../src/components/about/about";
import HeroSection from "../src/components/hero-section/hero-section";
import InfiniteScrollMenu from "../src/components/infinite-scroll-menu/InfiniteScrollMenu";
import Services from "../src/components/services/services";
import Testimonials from "../src/components/testimonials/testimonials";
import WorkedWithBrands from "../src/components/worked-with/worked-with-brands";
import PortfolioComponent from "../src/components/portfolio/portfolio";
import WhyChooseUs from "../src/components/why-choose-us/why-choose-us";

export default function Home() {
  return (
    <>
      <Head>
        <title>Codeupscale</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <HeroSection />
        <InfiniteScrollMenu />
        <About />
        <Services />
        {/* <OurWork /> */}
        <WhyChooseUs />
        <PortfolioComponent />
        <WorkedWithBrands />
        <Testimonials />
      </div>
    </>
  );
}
