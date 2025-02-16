"use client"
import Link from "next/link";
import { useState, useEffect } from "react";

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
      <Link href={`tel:+44 7777 602125`} className={`fixed bottom-6 right-6 text-sm md:text-lg font-light flex items-center justify-center bg-sky-600 text-white p-3 gap-2 rounded-full shadow-lg transition-opacity duration-300 hover:bg-sky-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}>
        <p>Free Phone Consultation</p>
      </Link>
  );
};

export default ScrollButton;
