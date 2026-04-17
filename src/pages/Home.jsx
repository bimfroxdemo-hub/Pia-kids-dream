import { motion } from "framer-motion";
import Hero from "../components/Hero";
import InstagramSection from "../components/instagram";
import BackgroundShapes from "../components/BackgroundShapes";
import { useState, useEffect } from "react";

// IMAGES
import heroimg1 from "../assets/heroimg/herobg2.jpg";
import heroimg3 from "../assets/heroimg/herobg3.jpg";
import fammally from "../assets/heroimg/famally.jpg";
import Dresses from "../assets/SHOPIMG/Dresses/Dresses4.jpg";
import kidsimg from "../assets/heroimg/kidsimg.jpg";
import Casual from "../assets/bestsaller-img/casual-shirt.avif";
import outline from "../assets/outline.jpg"
import outline1 from "../assets/outline1.jpg"

import c1 from "../assets/celebratyimg/celebraty1.jpg";
import c2 from "../assets/celebratyimg/celebraty2.jpg";
import c3 from "../assets/celebratyimg/celebraty3.jpg";
import c4 from "../assets/celebratyimg/celebraty4.jpg";
import c5 from "../assets/celebratyimg/celebraty5.jpg";
import c6 from "../assets/celebratyimg/celebraty6.jpg";

// ANIMATION
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const whatsappNumber = "919999999999";

const outfits = [
  { name: "Summer Fit", img: Casual, price: 1499 },
  { name: "Casual Drop", img: Dresses, price: 1299 },
  { name: "Urban Style", img: heroimg1, price: 1999 },
  { name: "Luxury Edit", img: heroimg3, price: 3499 },
  { name: "Kids Comfort", img: kidsimg, price: 1799 },
];

function Home() {
  const sendToWhatsApp = (product) => {
    const msg = `Hi 👋
I want to order:

Product: ${product.name}
Price: ₹${product.price}`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`
    );
  };
  const [index, setIndex] = useState(0);

  // NEXT / PREV
  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % outfits.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + outfits.length) % outfits.length);
  };

  // AUTO SCROLL
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getItem = (i) => {
    return outfits[(index + i + outfits.length) % outfits.length];
  };
  return (
    <div className="font-sans text-black relative">

      {/* 🌸 BACKGROUND */}
      <BackgroundShapes />

      {/* 💎 HERO */}
      <Hero />

      {/* 💎 CATEGORY */}
      <section className="grid md:grid-cols-2 gap-4 px-6 py-16">

        <div className="relative overflow-hidden group">
          <img
            src={kidsimg}
            className="w-full h-[500px] object-cover group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white text-3xl font-semibold">
            Kids Collection
          </div>
        </div>

        <div className="relative overflow-hidden group">
          <img
            src={Dresses}
            className="w-full h-[500px] object-cover group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white text-3xl font-semibold">
            Women Collection
          </div>
        </div>

      </section>



      {/* 💎 COLLECTION */}
      {/* 💎 COLLECTION */}
      <section className="px-6 py-24">

        <h2 className="text-4xl text-center mb-16">Shop Collection</h2>

        <div className="flex items-center justify-center gap-6">

          {/* LEFT SIDE (BIG + SMALL) */}
          <div className="hidden md:flex items-end gap-4">
            {/* SMALL */}
            <motion.img
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 0.6, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              src={getItem(-1).img}
              className="w-[140px] h-[320px] object-cover mb-10 hover:scale-105 transition duration-500"
            />


            {/* BIG */}
            <motion.img
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 0.7, x: 0 }}
              transition={{ duration: 0.6 }}
              src={getItem(-2).img}
              className="w-[180px] h-[480px] object-cover hover:scale-105 transition duration-500"
            />


          </div>

          {/* CENTER BIGGEST */}
          <motion.div
            key={index}
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative group"
          >
            <img
              src={getItem(0).img}
              className="w-[340px] md:w-[440px] h-[620px] object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 opacity-0 group-hover:opacity-100 flex flex-col justify-end p-6 text-white transition duration-500">

              <h3 className="text-2xl">{getItem(0).name}</h3>
              <p>₹{getItem(0).price}</p>

              <button
                onClick={() => sendToWhatsApp(getItem(0))}
                className="mt-3 border border-white px-4 py-2 text-sm hover:bg-white hover:text-black transition"
              >
                BUY NOW
              </button>

            </div>
          </motion.div>

          {/* RIGHT SIDE (SMALL + BIG) */}
          <div className="hidden md:flex items-end gap-4">
            {/* BIG */}
            <motion.img
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 0.7, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              src={getItem(2).img}
              className="w-[180px] h-[480px] object-cover hover:scale-105 transition duration-500"
            />

            {/* SMALL */}
            <motion.img
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 0.6, x: 0 }}
              transition={{ duration: 0.6 }}
              src={getItem(1).img}
              className="w-[120px] h-[320px] object-cover mb-10 hover:scale-105 transition duration-500"
            />



          </div>

        </div>

      </section>


      {/* 💎 FEATURES (IMAGE STYLE) */}
      <section className="grid md:grid-cols-2">

        {/* LEFT BLOCK */}
        <div className="relative h-[450px] overflow-hidden group">
          <img
            src={outline} // 👈 change image if needed
            className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
          />

          <div className="absolute inset-0 bg-white/70 flex flex-col justify-center items-center text-center px-6">
            <h2 className="text-3xl font-semibold mb-4">
              Customize to Perfection
            </h2>

            <p className="text-gray-900 max-w-md">
              Tailor every outfit to your child’s unique style and comfort.
              Get the perfect fit with our customizations.
            </p>

            <button className="mt-6 px-6 py-3 bg-black text-white text-sm tracking-wide">
              DISCOVER MORE
            </button>
          </div>
        </div>

        {/* RIGHT BLOCK */}
        <div className="relative h-[450px] overflow-hidden group">
          <img
            src={outline1} // 👈 change image if needed
            className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
          />

          <div className="absolute inset-0 bg-blue-500/70 flex flex-col justify-center items-center text-center px-6 text-white">
            <h2 className="text-3xl font-semibold mb-4">
              Need Help Choosing?
            </h2>

            <p className="max-w-md">
              Connect with our experts to find the ideal outfit.
              We’re here to make shopping easy and fun!
            </p>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              className="mt-6 px-6 py-3 bg-white text-black text-sm tracking-wide"
            >
              START CHAT
            </a>
          </div>
        </div>

      </section>



      {/* 💎 BRAND STORY */}
      <section className="relative h-[120vh] overflow">

        {/* 🖼️ BACKGROUND IMAGE (ONLY THIS SECTION) */}
        <div className="absolute inset-0 -z-10">
          <img
            src={fammally}
            className="w-full h-full object-cover"
          />
        </div>

        {/* 🌫️ DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/40 -z-10" />

        {/* 🌸 SHAPES (ONLY HERE) */}
        <BackgroundShapes />

        {/* 💎 CONTENT */}
        <div className="sticky top-0 h-screen flex items-center justify-center text-center text-black px-6 z-10">

          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Designed with Love
            </h2>

            <p className="max-w-xl mx-auto text-lg opacity-90">
              We create customized clothing for kids and women with comfort,
              elegance, and a personal touch that makes every moment special.
            </p>

            <button className="mt-6 px-6 py-3 bg-white text-black rounded-full hover:bg-black hover:text-white transition">
              Shop Now
            </button>
          </div>

        </div>

      </section>

      {/* 💎 CELEBRITY LOOKS (LONG IMAGES - CLEAN GRID) */}
      <section className="px-6 py-24 bg-pink-50">

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-center mb-14"
        >
          Celebrity Inspired Looks
        </motion.h2>

        {/* CENTER GRID */}
        <div className="flex justify-center ">
          <div className="grid grid-cols-3 gap-6">

            {[c1, c2, c3, c4, c5, c6].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative overflow-hidden group"
              >

                {/* IMAGE */}
                <img
                  src={img}
                  className="w-[250px] md:w-[300px] h-[350px] md:h-[420px] object-cover group-hover:scale-105 transition duration-500"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/30 flex items-end p-4 text-white">
                  <h3 className="text-sm md:text-lg font-semibold">
                    Style {i + 1}
                  </h3>
                </div>

              </motion.div>
            ))}

          </div>
        </div>

      </section>


      {/* 💎 TESTIMONIAL */}
      <section className="py-24 text-center">

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl mb-12"
        >
          Customer Love
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">

          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="p-6 bg-white"
            >
              <p className="italic text-gray-600">
                "Best purchase ever! Quality is amazing."
              </p>
              <h4 className="mt-4 font-semibold">Happy Customer</h4>
            </motion.div>
          ))}

        </div>

      </section>

      <InstagramSection />

      {/* 💎 CTA */}
      <section className="py-20 text-center">

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl font-light"
        >
          Ready to Upgrade Your Style?
        </motion.h2>

        <a
          href={`https://wa.me/${whatsappNumber}`}
          className="inline-block mt-8 px-10 py-3 border border-black hover:bg-black hover:text-white transition"
        >
          Chat on WhatsApp
        </a>

      </section>

    </div>
  );
}

export default Home;