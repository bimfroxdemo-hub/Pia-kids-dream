import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// DESKTOP IMAGES
import heroimg1 from "../assets/heroimg/herophoto1.jpg";
import heroimg2 from "../assets/heroimg/herophoto2.jpg";
import heroimg3 from "../assets/heroimg/herophoto3.jpg";
import heroimg4 from "../assets/heroimg/herophoto4.jpg";
import heroimg5 from "../assets/heroimg/herophoto5.jpg";
import heroimg6 from "../assets/heroimg/herophoto6.jpg";

// MOBILE IMAGES
import frock4 from "../assets/kids/frock4.jpg";
import frock5 from "../assets/kids/frock5.jpg";
import dress6 from "../assets/women/Dresses6.jpg";
import saree6 from "../assets/women/saree6.jpg";

const desktopImages = [
  heroimg1,
  heroimg2,
  heroimg3,
  heroimg4,
  heroimg5,
  heroimg6,
];

const mobileImages = [
  frock4,
  frock5,
  dress6,
  saree6,
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setCurrentIndex(0); // reset index when switching device
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto slider
  const images = isMobile ? mobileImages : desktopImages;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative w-full h-[75vh] md:h-screen overflow-hidden">

      {/* IMAGES */}
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`hero-${idx}`}
          className={`absolute inset-0 w-full h-full 
          object-cover 
          ${isMobile ? "object-center" : "object-[50%_20%]"} 
          transition-opacity duration-1000 ${
            idx === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* DOTS */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full cursor-pointer ${
              idx === currentIndex ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;