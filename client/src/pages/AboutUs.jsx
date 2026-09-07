import React, { useEffect } from "react";
import AboutStory from "../components/about/AboutStory";
import AboutCapabilities from "../components/about/AboutCapabilities";
import AboutValues from "../components/about/AboutValues";
import AboutVisionMission from "../components/about/AboutVisionMission";
import AboutGlobalPresence from "../components/about/AboutGlobalPresence";
import HomeCertifications from "../components/home/HomeCertifications";
import AboutFAQ from "../components/about/AboutFAQ";
import HomeCTA from "../components/home/HomeCTA";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Us | ImageTech Industries";
  }, []);

  return (
    <main>
      <AboutStory />
      <AboutCapabilities />
      <AboutValues />
      <AboutVisionMission />
      <HomeCertifications />
      <AboutGlobalPresence />
      <AboutFAQ />
      <HomeCTA />
    </main>
  );
};

export default AboutUs;
