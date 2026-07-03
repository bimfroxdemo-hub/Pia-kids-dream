import { useState, useEffect } from "react";
import heroimg5 from "../assets/heroimg/piakids_banner1.png";
import summercollection from "../assets/heroimg/piakids_banner2.png";

const images = [
  summercollection,
    heroimg5
];

function Hero() {
  const [currentIndex, setCurrentIndex] =
    useState(0);

  // AUTO SLIDER
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prev) => (prev + 1) % images.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
   <section className="relative w-full overflow-hidden pt-[120px] md:pt-0 bg-[#f8eef3]">
      {/* IMAGE WRAPPER */}
      <div className="relative w-full">

        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`hero-${idx}`}
            className={`
              w-full
              h-auto
              md:h-auto
              object-contain
              md:object-cover
              transition-opacity
              duration-1000
              ${
                idx === currentIndex
                  ? "opacity-100 relative z-10"
                  : "opacity-0 absolute inset-0 z-0"
              }
            `}
          />
        ))}

      </div>

      {/* DOTS */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">

        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() =>
              setCurrentIndex(idx)
            }
            className={`transition-all duration-300 rounded-full ${
              idx === currentIndex
                ? "w-6 h-2 bg-white"
                : "w-2 h-2 bg-white/50"
            }`}
          />
        ))}

      </div>

    </section>
  );
}

export default Hero;