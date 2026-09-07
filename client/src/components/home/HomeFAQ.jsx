import React from "react";
import FAQSection from "../common/FAQSection";

const faqData = [
  // Original 10
  {
    question: "What are Doctor Blades used for?",
    answer:
    "A doctor blade is a thin, flexible blade used in printing and coating processes to wipe excess ink or coating material from the surface of a cylinder or roll. It ensures a consistent, uniform layer is transferred to the substrate, critical for high-quality rotogravure and flexographic printing.",
  },
  {
    question: "What materials are your Doctor Blades made from?",
    answer:
    "We manufacture doctor blades using premium-grade materials including Carbon Steel, Stainless Steel, and advanced Polymer/Plastic materials. The choice of material depends on the specific printing application, ink type, and desired blade life.",
  },
  {
    question: "How do I choose the right edge profile for my application?",
    answer:
    "The edge profile (such as Lamella, Bevel, or Round) affects print quality and blade wear. Lamella profiles are excellent for fine graphics, while Beveled edges offer strength for heavier inks and abrasive conditions. Our technical team can recommend the ideal profile based on your specific press setup.",
  },
  {
    question: "How long does a Doctor Blade typically last?",
    answer:
    "Blade lifespan varies significantly based on press speed, cylinder condition, ink abrasiveness, and blade material. High-quality carbon and stainless steel blades provide long-lasting performance, while polymer blades offer extended life with reduced cylinder wear.",
  },
  {
    question: "Do you offer custom-sized Doctor Blades?",
    answer:
    "Yes, we provide doctor blades in custom lengths, widths, and thicknesses tailored to fit your specific printing press or coating machinery requirements perfectly.",
  },
  {
    question: "Why is Doctor Blade thickness important?",
    answer:
    "Thickness dictates the stiffness of the blade. A thicker blade provides more stability against high viscosity inks and faster press speeds, preventing blade bending. Thinner blades offer finer wiping action but wear faster.",
  },
  {
    question: "How does a Polymer Doctor Blade differ from a Steel one?",
    answer:
    "Polymer blades are safer to handle, reduce wear on the anilox or gravure cylinder, and eliminate the risk of metal fragments falling into the ink pan. However, steel blades generally offer a sharper wipe for very fine, high-resolution printing.",
  },
  {
    question: "What causes Doctor Blades to wear out prematurely?",
    answer:
    "Premature wear can be caused by excessive blade pressure, poor cylinder condition, abrasive inks, or incorrect installation angles. Ensuring proper alignment and minimal necessary pressure is key to maximizing blade life.",
  },
  {
    question: "How should Doctor Blades be stored to prevent damage?",
    answer:
    "Doctor blades should be stored in a dry, climate-controlled environment to prevent rust (for steel blades) and warping (for polymer blades). Keep them in their original packaging, lying flat or hung properly, and handle them with care to avoid edge nicks.",
  },
  {
    question:
    "Can you help us troubleshoot printing defects related to Doctor Blades?",
    answer:
    "Absolutely. Our technical experts can help diagnose issues like lines, streaks, or uneven ink density that may be caused by incorrect blade selection, improper pressure, or worn edges. We offer consulting to optimize your printing process.",
  },
  // New 10
  {
    question: "Are your Doctor Blades compatible with water-based inks?",
    answer:
    "Yes, our Stainless Steel and Polymer Doctor Blades are highly resistant to corrosion and are ideal for use with water-based inks, ensuring no rust contaminates your printing process.",
  },
  {
    question: "What is the difference between a Lamella and a Bevel edge?",
    answer:
    "A Lamella edge has a stepped profile that maintains a constant contact area as the blade wears, providing consistent print quality over time. A Bevel edge is angled, offering a strong tip that is highly durable for abrasive inks.",
  },
  {
    question: "How do I know when it's time to replace my Doctor Blade?",
    answer:
    "You should replace the blade when you notice a drop in print quality, such as hazing, streaking, or uneven ink distribution. Visually, if the blade edge looks jagged or excessively worn, it's time for a replacement.",
  },
  {
    question: "Can Doctor Blades be used for coating applications?",
    answer:
    "Yes, Doctor Blades are widely used in coating applications to precisely meter the thickness of adhesives, varnishes, and functional coatings onto various substrates like paper, film, and foil.",
  },
  {
    question: "Do you supply pre-cut Doctor Blades?",
    answer:
    "We supply Doctor Blades in continuous coils (rolls) as well as pre-cut lengths specific to your press cylinder size, ready for immediate installation.",
  },
  {
    question: "What is the recommended blade angle for flexographic printing?",
    answer:
    "In flexographic printing, the optimal contact angle for the doctor blade against the anilox roll is typically between 30 to 35 degrees. This angle ensures a clean wipe and minimizes wear.",
  },
  {
    question: "Why should I choose ImageTech Industries for Doctor Blades?",
    answer:
    "ImageTech Industries combines over 30 years of manufacturing excellence with premium raw materials, strict ISO 9001:2015 quality control, and expert technical support to deliver blades that maximize your press uptime.",
  },
  {
    question: "Are your Polymer blades suitable for high-speed printing?",
    answer:
    "Advanced polymer materials can handle high-speed printing, but they must be carefully matched to the ink type and cylinder. We offer specialty high-performance polymers designed specifically for high-speed, demanding environments.",
  },
  {
    question: "What causes 'hazing' or 'scumming' in rotogravure printing?",
    answer:
    "Hazing is often caused by the doctor blade floating over the cylinder rather than wiping it clean. This can result from incorrect blade pressure, worn blade edges, or using a blade that is too thin or flexible for the ink viscosity.",
  },
  {
    question: "Do you ship internationally?",
    answer:
    "Yes, we have a strong global presence and export our high-quality Doctor Blades and industrial products to over 25 countries worldwide, ensuring secure packaging and reliable delivery.",
  },
];

import { SchemaInjector } from "../common/SEO";

const HomeFAQ = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <SchemaInjector schema={faqSchema} />
      <FAQSection
        title="Everything You Need To Know About Doctor Blades"
        subtitle="Frequently Asked Questions"
        description="Find answers to common questions about our industrial products, applications, manufacturing capabilities, and technical support."
        faqs={faqData}
      />
    </>
  );
};

export default HomeFAQ;
