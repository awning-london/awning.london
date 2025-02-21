"use client"

import { useState, useEffect } from "react";
import { Button } from "./Button";

const ScrollButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <Button href="tel:+44 7777 602125" invert={false} className={`fixed bottom-6 right-6 text-sm md:text-lg font-light flex items-center justify-center bg-sky-600 text-white p-3 gap-2 rounded-full shadow-lg transition-opacity duration-300 hover:bg-sky-700 ${
         isVisible ? "opacity-100" : "opacity-0"
       }`}>
        Free Phone Consultation
      </Button>
  );
};

export default ScrollButton;
