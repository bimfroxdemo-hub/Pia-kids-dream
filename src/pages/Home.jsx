import { motion } from "framer-motion";
import Hero from "../components/Hero";
import InstagramSection from "../components/instagram";
import BackgroundShapes from "../components/BackgroundShapes";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
// IMAGES
import outline from "../assets/outline.jpg";
import outline1 from "../assets/outline1.jpg";

import c1 from "../assets/celebratyimg/look1.JPG";
import c2 from "../assets/celebratyimg/look2.jpeg";
import c3 from "../assets/celebratyimg/look3.JPG";
import c4 from "../assets/celebratyimg/look4.jpeg";
import c5 from "../assets/celebratyimg/look5.jpeg";
import c6 from "../assets/celebratyimg/look6.jpeg";

import logo from "../assets/heroimg/logo.png";


import shopc1 from "../assets/westernimg/24-frontimg.jpeg";
import shopc2 from  "../assets/westernimg/25-img1.jpeg";
import shopc3 from "../assets/westernimg/7-frontimg.jpeg";
import shopc4 from "../assets/westernimg/2-frontimg.jpeg";
import shopc5 from "../assets/westernimg/western5.JPG";

import productsData from "../data/productsData";
import flower from "../assets/imgback.png";

import homeimg1 from "../assets/birthdayimg/9-img3.jpeg";
import homeimg2 from "../assets/birthdayimg/8-frontimg.jpeg";
import homeimg3 from "../assets/birthdayimg/3-frontimg.jpeg";

import homeimg4 from "../assets/heroimg/imghome1.jpeg";
import Bannerhome from "../components/Bannerhome";
// ANIMATION
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};
const summerProducts = productsData.Summer;
const outfits = [
  {
    name: "Champagne Grace Three-Piece Set",
    img: shopc5,
    price: 1499,
  },
  {
    name: "Mint Pearl Party Dress",
    img: shopc4,
    price: 1299,
  },
  {
    name: "Mauve Petal Ruffle Dress",
    img: shopc1,
    price: 1999,
  },
  {
    name: "Ruby Pleated Grace Dress",
    img: shopc2,
    price: 3499,
  },
  {
    name: "Blossom Breeze High-Low Dress",
    img: shopc3,
    price: 1799,
  },
];
export const testimonials = [
  {
    name: "Sahu Santosini",
    rating: 5,
    time: "a week ago",
    text: "Amazing collection at Pia Kids Dream.. pure fabrics & comfort for kids. Totally worth it. Thank you so much for such adorable dresses 😊😍"
  },
  {
    name: "Desai Krina",
    rating: 5,
    time: "a week ago",
    text: "Had an amazing experience with Pia Dream Kids! Best outfit designs, excellent suggestions, and the owner is very supportive and helpful 😍"
  },

  {
    name: "Akanksha Anushree",
    rating: 5,
    time: "a week ago",
    text: "Absolutely loved my experience at this boutique! The collection is elegant, trendy, and beautifully curated with great attention to detail."
  },
  {
    name: "Aneri Shah",
    rating: 5,
    time: "a week ago",
    text: "Amazing experience with Pia Kids Dream. I am a regular client. Such a sweet nature of owner and great experience 😍"
  },

];

function Home() {


  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
const sliderRef = useRef(null);
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 80,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  const [index, setIndex] = useState(0);

  const navigate = useNavigate();

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % outfits.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  const getItem = (i) =>
    outfits[(index + i + outfits.length) % outfits.length];

  const whatsappNumber = "919054981808"; // India country code + number

  const sendToWhatsApp = (product) => {
    const msg = `Hi 👋
I want to order:

Product: ${product.name}
Price: ₹${product.price}`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <div className="font-sans text-black overflow-x-hidden">
      <Helmet>
        <title>Pia Kids Dream | Premium Kidswear Fashion Brand India</title>

        <meta
          name="description"
          content="Pia Kids Dream is a premium kidswear brand offering stylish, comfortable and custom outfits for kids. Explore summer collection, birthday dresses and designer kids fashion in India."
        />

        <meta
          name="keywords"
          content="kidswear India, premium kids clothing, Pia Kids Dream, children fashion brand, kids dress online, birthday dresses kids, designer kids outfits, Surat kidswear boutique"
        />

        <meta name="robots" content="index, follow" />

        {/* Open Graph (WhatsApp / Instagram preview) */}
        <meta property="og:title" content="Pia Kids Dream | Premium Kidswear Brand" />

        <meta
          property="og:description"
          content="Explore stylish and comfortable kidswear collections by Pia Kids Dream - premium fashion for children."
        />

        <meta property="og:type" content="website" />

        <meta property="og:image" content="/owner.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pia Kids Dream | Kids Fashion Brand" />
        <meta
          name="twitter:description"
          content="Premium kidswear brand offering stylish, comfortable and custom outfits for children."
        />
        <meta name="twitter:image" content="/owner.jpg" />
      </Helmet>

      <Hero />
      <BackgroundShapes />

      {/* PREMIUM CATEGORY SECTION */}



<section className="px-4 md:px-10 py-10 bg-white">


<h2
  className="
    text-center
    mb-8
    text-lg
    md:text-xl
    font-semibold
    text-purple-900
    tracking-widest
    uppercase
  "
>
  ✦ Bestsellers ✦

  <span
    className="
      block
      mx-auto
      mt-2
      w-12
      h-[2px]
      bg-purple-500
    "
  ></span>

</h2>



  <div
    className="
      grid
      grid-cols-2
      gap-5
      md:grid-cols-4
    "
  >


    {[
      {
        img: homeimg1,
        name: "Purple Bloom Birthday Gown"
      },
      {
        img: homeimg3,
        name: "Black Sparkle Birthday Dress"
      },
      {
        img: homeimg2,
        name: "Orange Flower Birthday Gown"
      },
      {
        img: homeimg4,
        name: "Dark Green Birthday Gown"
      },

    ].map((item,index)=>(


      <Link
        key={index}
        to="/collections?category=Birthday+Collection"
        className="block"
      >


        <div
          className="
            bg-white
            overflow-hidden
            shadow-md
            hover:shadow-xl
            transition-all
          "
        >


          {/* IMAGE */}
          <div className="relative">


            <img
              src={item.img}
              alt={item.name}
              className="
                w-full
                h-[230px]
                sm:h-[280px]
                md:h-[420px]
                object-cover
              "
            />


            {/* HEART */}
           <div
  className="
    absolute
    top-3
    right-3
    w-7
    h-7
    bg-purple-900
    text-white
    flex
    items-center
    justify-center
    text-lg
    shadow-md
  "
>
  ♡
</div>


          </div>



          {/* NAME */}
          <div
            className="
              py-3
              px-2
              text-center
              bg-purple-50
            "
          >

            <p
              className="
                text-xs
                md:text-sm
                font-semibold
                tracking-wide
                text-purple-800
              "
            >
              {item.name}
            </p>


          </div>


        </div>


      </Link>


    ))}


  </div>



  {/* WHATSAPP BUTTON */}
  <a
    href="http://localhost:5174/collections?category=Birthday+Collection"
    className="
      fixed
      right-5
      bottom-5
      z-50
      w-14
      h-14
      bg-green-500
      rounded-full
      flex
      items-center
      justify-center
      text-white
      text-3xl
      shadow-xl
    "
  >
    ☎
  </a>


</section>
      <Bannerhome/>
      {/* COLLECTION */}
      <section className="px-4 md:px-6 py-14 md:py-20 bg-white">

        {/* HEADING */}
        <div className="text-center mb-12">

          <p className="uppercase tracking-[5px] text-purple-500 text-sm font-medium mb-3">
            Fashion Collection
          </p>

          <h2
            className="text-2xl md:text-4xl lg:text-5xl text-center text-gray-900 leading-none"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: "700",
              letterSpacing: "-1px",
            }}
          >
            Explore Our
            <span className="text-purple-500 ml-3 italic">
              Categories
            </span>
          </h2>
          <div className="w-20 h-[2px] bg-purple-500 mx-auto mt-4"></div>

        </div>

        <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-6">

          {/* 🔹 FAR LEFT */}
          <div className="hidden lg:block border border-black/10 p-2 bg-white shadow-sm">
            <img
              src={getItem(-2).img}
              className="
          w-[140px] xl:w-[160px]
          h-[280px] xl:h-[340px]
          object-cover
          opacity-40 hover:opacity-70
          transition duration-300
        "
            />
          </div>

          {/* 🔹 LEFT */}
          <div className="hidden sm:block border border-black/10 p-2 bg-white shadow-sm">
            <img
              src={getItem(-1).img}
              className="
          w-[120px] md:w-[150px] lg:w-[180px]
          h-[260px] md:h-[320px] lg:h-[420px]
          object-cover
          opacity-50 hover:opacity-80
          transition duration-300
        "
            />
          </div>

          {/* 🔸 CENTER */}
          <motion.div
            key={index}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="
        relative
        group
        z-10
        border border-black/10
        p-3
        bg-white
        shadow-xl
      "
          >
            <img
              src={getItem(0).img}
              className="
          w-[85vw]
          max-w-[300px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[460px]
          h-[360px] sm:h-[460px] md:h-[520px] lg:h-[600px]
          object-cover
        "
            />

            {/* OVERLAY */}
            <div className="
        absolute inset-0
        bg-gradient-to-t from-black/70
        opacity-0 group-hover:opacity-100
        flex flex-col justify-end
        p-4 sm:p-6
        text-white
        transition
      ">
              <h3 className="text-sm sm:text-base md:text-lg">
                {getItem(0).name}
              </h3>
              <button
                onClick={() => sendToWhatsApp(getItem(0))}
                className="
            mt-2 sm:mt-3
            border border-white
            px-3 sm:px-4
            py-1.5 sm:py-2
            text-xs sm:text-sm
            hover:bg-white hover:text-black
            transition
          "
              >
                BUY NOW
              </button>
            </div>
          </motion.div>

          {/* 🔹 RIGHT */}
          <div className="hidden sm:block border border-black/10 p-2 bg-white shadow-sm">
            <img
              src={getItem(1).img}
              className="
          w-[120px] md:w-[150px] lg:w-[180px]
          h-[260px] md:h-[320px] lg:h-[420px]
          object-cover
          opacity-50 hover:opacity-80
          transition duration-300
        "
            />
          </div>

          {/* 🔹 FAR RIGHT */}
          <div className="hidden lg:block border border-black/10 p-2 bg-white shadow-sm">
            <img
              src={getItem(2).img}
              className="
          w-[140px] xl:w-[160px]
          h-[280px] xl:h-[340px]
          object-cover
          opacity-40 hover:opacity-70
          transition duration-300
        "
            />
          </div>

        </div>

      </section>

      {/* ==========================SUMMER COLLECTION========================== */}
      <section className="py-20 sm:py-24 bg-white overflow-hidden">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 px-4 sm:px-6 lg:px-14 mb-12 sm:mb-16"
        >
          <div>
            <p className="uppercase tracking-[5px] text-[10px] sm:text-xs text-[#7e57c2] mb-3">
              Trending Collection
            </p>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-[#2d1b45] leading-tight">
              Summer Collection
            </h2>
          </div>

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.96,
            }}
            onClick={() => navigate("/collections?category=Summer")}
            className="border border-[#6b21a8] text-[#6b21a8] px-6 py-3 text-[10px] sm:text-xs uppercase tracking-[3px] hover:bg-[#6b21a8] hover:text-white transition w-fit"
          >
            Explore All
          </motion.button>
        </motion.div>

        {/* PRODUCTS */}
        <div className="w-full px-4 sm:px-6 lg:px-14">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-7"
          >
            {summerProducts.slice(0, 4).map((item) => (
              <motion.div
                key={item.id}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                {/* CARD */}
                <div className="bg-white border border-[#eadcf8] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                  {/* IMAGE */}
                  <div className="relative overflow-hidden">
                    {/* FRONT IMAGE */}
                    <img
                      src={item.front}
                      alt={item.title}
                      className="w-full h-[240px] sm:h-[420px] lg:h-[520px] object-cover transition-all duration-700 group-hover:scale-110"
                    />

                    {/* HOVER IMAGE */}
                    <img
                      src={item.images[1]}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                    {/* TAG */}
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#6f3785] text-white px-3 sm:px-4 py-1 sm:py-2 text-[9px] sm:text-[10px] uppercase tracking-[2px] z-20"
                    >
                      Summer
                    </motion.div>

                    {/* VIEW BUTTON */}
                    <div className="absolute bottom-0 left-0 w-full translate-y-full group-hover:translate-y-0 transition duration-500 z-20">
                      <button
                        onClick={() =>
                          navigate("/collections?category=Summer")
                        }
                        className="w-full bg-[#aa61cf] text-white py-3 sm:py-4 uppercase tracking-[3px] text-[10px] sm:text-xs hover:bg-[#581c87] transition"
                      >
                        View Product
                      </button>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-3 sm:p-5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <h3 className="text-xs sm:text-lg lg:text-xl font-light text-[#2d1b45] leading-5 sm:leading-normal transition-colors duration-300 group-hover:text-[#6b21a8]">
                          {item.title}
                        </h3>

                        <p className="text-[10px] sm:text-sm text-[#8d79a8] mt-1">
                          Premium Summer Wear
                        </p>
                      </div>

                      <motion.p
                        whileHover={{ scale: 1.08 }}
                        className="text-[#6b21a8] text-xs sm:text-base lg:text-lg font-medium"
                      >
                        {item.price}
                      </motion.p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="grid md:grid-cols-2">

        <div className="relative h-[350px] md:h-[450px] overflow-hidden">
          <img src={outline} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-white/70 flex items-center justify-center text-center px-6">
            <div>
              <h2 className="text-xl md:text-2xl mb-3">Customize to Perfection</h2>
              <p className="italic text-sm md:text-base">
                Tailor every outfit to your child’s unique style.
              </p>
            </div>
          </div>
        </div>

        <div className="relative h-[350px] md:h-[450px] overflow-hidden">
          <img src={outline1} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-purple-500/70 flex items-center justify-center text-center px-6 text-white">
            <div>
              <h2 className="text-xl md:text-2xl mb-3">Need Help?</h2>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                className="mt-4 inline-block bg-white text-black px-6 py-2"
              >
                CHAT NOW
              </a>
            </div>
          </div>
        </div>

      </section>

      {/* BRAND */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Content */}
        <div className="relative text-center text-white max-w-2xl px-4">

          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img
              src={logo}
              alt="Pia Kids Dream"
              className="w-28 md:w-40 lg:w-52 object-contain drop-shadow-lg"
            />
          </div>

          {/* Decorative Line */}
          <div className="flex justify-center items-center gap-4 mt-4 mb-6">
            <div className="w-14 h-[1px] bg-black/60"></div>
            <span className="text-black text-xl">✦</span>
            <div className="w-14 h-[1px] bg-black/60"></div>
          </div>

          {/* Tagline */}
          <p
            className="text-lg md:text-2xl italic font-medium text-black leading-relaxed drop-shadow-md"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Where Little Dreams Meet Beautiful Fashion
          </p>
        </div>
      </section>

      {/* LOOKS */}
      <section className="relative py-16 md:py-24 bg-purple-50 overflow-hidden">

        {/* 🌸 LEFT TOP (BIG) */}
        <img
          src={flower}
          className="
      hidden lg:block
      absolute right-4 top-6
      w-[240px] xl:w-[350px]

      opacity-95
      brightness-105
      contrast-110
      saturate-150
      rotate-180
      drop-shadow-[0_15px_35px_rgba(0,0,0,0.25)]
      pointer-events-none
    "
        />

        {/* 🌸 RIGHT BOTTOM (BIG) */}
        <img
          src={flower}
          className="
      hidden lg:block
      absolute left-4 bottom-10
      w-[240px] xl:w-[350px]
      opacity-95
      brightness-105
      contrast-110
      saturate-150
      drop-shadow-[0_15px_35px_rgba(0,0,0,0.25)]
      pointer-events-none
    "
        />

        {/* 💎 CONTENT */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">

          {/* HEADING */}
          <div className="text-center mb-12">
            <p className="uppercase tracking-[5px] text-purple-500 text-sm font-medium mb-3">
              Designed for You
            </p>
            <div className="w-20 h-[2px] bg-purple-500 mx-auto mt-4"></div>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">

            {[c1, c2, c3, c4, c5, c6].map((img, i) => (
              <div
                key={i}
                className="relative overflow-hidden group "
              >
                {/* IMAGE */}
                <img
                  src={img}
                  className="
            w-full
            aspect-[3/4]
            object-cover
            group-hover:scale-105
            transition duration-500
          "
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 transition duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">

                  <button
                    onClick={() => {
                      const whatsappNumber = "919054981808";

                      const message = `Hi 👋
I like this design from gallery.
Can you please share details?`;

                      window.open(
                        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
                        "_blank"
                      );
                    }}
                    className="bg-purple-500 hover:bg-purple-600 text-white text-sm px-4 py-2  shadow-lg transition"
                  >
                    WhatsApp Order
                  </button>

                </div>
              </div>
            ))}

          </div>
        </div>

      </section>

      {/* =======================================INSTAGRAM=============================================== */}
      <InstagramSection />

      <section className="relative py-24 px-6 bg-[#fafafa] overflow-hidden">

        {/* 🌸 FLOWER 1 (soft lavender - top left) */}
        <svg className="absolute -top-28 -left-28 w-[460px] h-[460px] opacity-20" viewBox="0 0 200 200">
          <path
            d="M100 40
      C120 20, 140 35, 145 55
      C165 60, 170 85, 150 95
      C170 110, 160 130, 140 135
      C135 155, 110 150, 100 135
      C90 150, 65 155, 60 135
      C40 130, 30 110, 50 95
      C30 85, 35 60, 55 55
      C60 35, 80 20, 100 40 Z"
            fill="#e9d5ff"
          />
          <circle cx="100" cy="100" r="15" fill="#a78bfa" />
        </svg>

        {/* 🌸 FLOWER 2 (different shape - bottom right) */}
        <svg className="absolute -bottom-32 -right-32 w-[520px] h-[520px] opacity-20" viewBox="0 0 200 200">
          <path
            d="M100 30
      C125 15, 155 40, 150 65
      C175 75, 170 105, 145 110
      C165 130, 150 155, 125 150
      C120 175, 80 175, 75 150
      C50 155, 35 130, 55 110
      C30 105, 25 75, 50 65
      C45 40, 75 15, 100 30 Z"
            fill="#c4b5fd"
          />
          <circle cx="100" cy="100" r="14" fill="#a78bfa" />
        </svg>

        {/* 🌼 FLOWER 3 (small accent flower - top right) */}
        <svg className="absolute top-12 right-12 w-[140px] h-[140px] opacity-25" viewBox="0 0 100 100">
          <path
            d="M50 15
      C65 5, 75 25, 70 35
      C85 40, 80 60, 65 60
      C70 80, 50 85, 45 65
      C30 85, 15 70, 30 55
      C15 45, 25 25, 40 30
      C40 15, 45 10, 50 15 Z"
            fill="#ddd6fe"
          />
          <circle cx="50" cy="50" r="8" fill="#a78bfa" />
        </svg>

        {/* 🍃 LEAF 1 (broad leaf - top right) */}
        <svg className="absolute top-6 right-40 w-[160px] h-[160px] opacity-20" viewBox="0 0 100 100">
          <path d="M20 80 C40 10, 80 10, 60 80 C50 60, 40 60, 20 80 Z" fill="#c7d2fe" />
        </svg>

        {/* 🍃 LEAF 2 (thin leaf - mid left rotated) */}
        <svg className="absolute top-[45%] left-[6%] w-[130px] h-[130px] opacity-15 rotate-45" viewBox="0 0 100 100">
          <path d="M30 80 C45 20, 70 20, 60 80 C50 60, 40 60, 30 80 Z" fill="#ddd6fe" />
        </svg>

        {/* 🍃 LEAF 3 (curved leaf - bottom left) */}
        <svg className="absolute bottom-10 left-20 w-[110px] h-[110px] opacity-15" viewBox="0 0 100 100">
          <path d="M20 70 C35 15, 85 25, 60 85 C45 65, 35 60, 20 70 Z" fill="#e0e7ff" />
        </svg>

        {/* DOT PATTERN */}
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#a78bfa_1px,transparent_1px)] [background-size:22px_22px]"></div>

        {/* HEADER */}
        <div className="relative z-10 text-center mb-16">

          <p className="uppercase tracking-[6px] text-[11px] text-purple-500">
            Testimonials
          </p>

          <h2 className="text-3xl md:text-5xl font-light mt-3 text-black">
            Loved by Parents
          </h2>

          <p className="text-gray-500 mt-4 text-sm">
            Real reviews from our customers
          </p>

        </div>

        {/* GRID */}
        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          {testimonials.slice(0, 3).map((item, i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="
          relative bg-white border border-purple-100 p-8
          transition-all duration-300
          hover:-translate-y-2
          hover:shadow-[0_25px_60px_-15px_rgba(167,139,250,0.35)]
          hover:border-purple-300
        "
            >

              <div className="absolute top-4 right-4 w-2 h-2 bg-purple-500"></div>

              <h3 className="text-lg font-medium text-black mb-2">
                {item.name}
              </h3>

              <div className="text-purple-500 text-sm mb-4">
                ★★★★★
              </div>

              <p className="text-gray-600 text-sm leading-7">
                {item.text}
              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="py-16 text-center bg-purple-50">
        <h2 className="text-xl">Ready to Upgrade Your Style?</h2>
        <a
          href={`https://wa.me/${whatsappNumber}`}
          className="mt-6 inline-block border px-6 py-2 bg-purple-900 text-white"
        >
          Chat on WhatsApp
        </a>
      </section>
    </div>
  );
}

export default Home;