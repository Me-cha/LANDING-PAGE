import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center w-full py-4 px-24 h-24">
      <div className="mb-2 sm:mb-0 font-[Mignon-Regular] text-4xl font-[900]">
        <h1>Medium</h1>
      </div>
      <div className="mb-2 sm:mb-0 text-xl">
        <p>Every idea needs a medium</p>
      </div>
      <div className="flex flex-row space-x-4 text-xs underline">
        <a href="/about" className="hover:underline">
          About
        </a>
        <a href="/terms" className="hover:underline">
          Terms
        </a>
        <a href="/privacy" className="hover:underline">
          Privacy
        </a>
        <a href="/help" className="hover:underline">
          Help
        </a>
      </div>
    </div>
  );
};

export default Footer;
