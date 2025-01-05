import React from "react";
import FooterHero from "./FooterHero";
import FooterNavigation from "./FooterNavigation";
import FooterInfo from "./FooterInfo";

function Footer() {
  return (
    <footer className="relative h-auto layout_padding bg-secondary_section_bg">
      <div className="relative z-30 -top-20">
        <FooterHero />
      </div>
      <div className="relative ">
        <FooterNavigation />
        <FooterInfo />
      </div>
    </footer>
  );
}

export default Footer;
