import React, { useEffect } from "react";
import CertificationsHero from "../components/certifications/CertificationsHero";
import CertificateDisplay from "../components/certifications/CertificateDisplay";
import CertificationScope from "../components/certifications/CertificationScope";
import CertificationsFAQ from "../components/certifications/CertificationsFAQ";
import HomeCTA from "../components/home/HomeCTA";

const Certifications = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Certifications | ImageTech Industries";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <CertificationsHero />
      <CertificateDisplay />
      <CertificationScope />
      <CertificationsFAQ />

      {/* Reusing HomeCTA for consistency */}
      <div className="bg-slate-50 pt-16 pb-24 border-t border-gray-200">
        <HomeCTA />
      </div>
    </div>
  );
};

export default Certifications;
