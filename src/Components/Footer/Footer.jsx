"use client";

import FooterCopyright from "./Elements/FooterCopyright";
import FooterLanguageSelector from "./Elements/FooterLanguageSelector";
import FooterLinks from "./Elements/FooterLinks";
import FooterSocials from "./Elements/FooterSocials";



export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 px-6 py-10 text-sm">
      <div className="max-w-6xl mx-auto">
        <FooterSocials />
        <FooterLinks />
        <FooterLanguageSelector />
        <FooterCopyright />
      </div>
    </footer>
  );
}
