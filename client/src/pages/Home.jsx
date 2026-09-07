import React from "react";
import HomeHero from "../components/home/HomeHero";
import HomeProducts from "../components/home/HomeProducts";
import HomeIndustries from "../components/home/HomeIndustries";
import HomeAbout from "../components/home/HomeAbout";
import HomeCertifications from "../components/home/HomeCertifications";
import HomeWhyChoose from "../components/home/HomeWhyChoose";
import HomeInsights from "../components/home/HomeInsights";
import HomeFAQ from "../components/home/HomeFAQ";
import HomeCTA from "../components/home/HomeCTA";

const Home = () => {
  return (
    <main className="flex flex-col">
      <HomeHero />
      <HomeProducts />
      <HomeIndustries />
      <HomeAbout />
      <HomeCertifications />
      <HomeWhyChoose />
      <HomeInsights />
      <HomeFAQ />
      <HomeCTA />
    </main>
  );
};

export default Home;
