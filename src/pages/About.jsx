import { motion } from "framer-motion";
import achievement1 from "../assets/aboutimg/achievement1.jpeg"
import achievement2 from "../assets/aboutimg/achievement2.jpeg"
import achievement3 from "../assets/aboutimg/achievement3.jpeg"
import owenerimg from "../assets/aboutimg/owenerimg.jpeg"

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Sparkles, Heart, Scissors } from "lucide-react";
/* ================= ANIMATION ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function About() {
  return (
    <div className="bg-[#faf7f5] text-[#111111] overflow-hidden">
      <Helmet>
        <title>Pia Kids Dream | Premium Kidswear Brand by Priya Mahapatra</title>

        <meta
          name="description"
          content="Pia Kids Dream is a premium kidswear brand founded by Priya Mahapatra, offering stylish, comfortable and high-quality outfits for children. Custom designs, soft fabrics and special occasion wear for kids."
        />

        <meta
          name="keywords"
          content="kidswear brand India, Pia Kids Dream, Priya Mahapatra brand, premium kids clothing, children fashion dresses, baby clothes, custom kids outfits, stylish kids wear, birthday dress for kids"
        />

        <meta name="robots" content="index, follow" />

        {/* Open Graph (WhatsApp / Instagram sharing) */}
        <meta property="og:title" content="Pia Kids Dream | Premium Kidswear Brand" />

        <meta
          property="og:description"
          content="Discover Pia Kids Dream by Priya Mahapatra - premium, stylish and comfortable kidswear designed with love for every child."
        />

        <meta property="og:type" content="website" />

        {/* IMPORTANT: full URL use karna (replace with your domain) */}
        <meta property="og:image" content="https://yourdomain.com/owner.jpg" />

        {/* Twitter SEO */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pia Kids Dream | Kidswear Brand" />
        <meta
          name="twitter:description"
          content="Premium kidswear brand by Priya Mahapatra offering stylish and comfortable outfits for children."
        />
        <meta name="twitter:image" content="https://yourdomain.com/owner.jpg" />
      </Helmet>
      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section className="relative flex items-center px-6 md:px-10 pt-28 md:pt-32 pb-32 overflow-hidden bg-purple-100">

        {/* BACKGROUND BLOBS */}
        <div className="absolute top-0 left-0 w-[320px] md:w-[450px] h-[320px] md:h-[450px] bg-purple-100 blur-[140px] opacity-50"></div>

        <div className="absolute bottom-0 right-0 w-[280px] md:w-[380px] h-[280px] md:h-[380px] bg-pink-100 blur-[130px] opacity-40"></div>

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-14 lg:gap-20 items-center relative z-10">

          {/* LEFT CONTENT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-7"
          >

            <p className="text-xs tracking-[5px] text-purple-600 uppercase font-medium flex items-center gap-2">
              <Sparkles size={16} />
              Pia Kids Dream
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.2] text-gray-900">
              Dressing Childhood with
              <span className="block text-purple-600 mt-2">
                Comfort, Style & Love
              </span>
            </h1>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl flex gap-2">
              <Heart size={18} className="text-pink-500 mt-1 flex-shrink-0" />
              Pia Kids Dream is a premium kidswear brand designed to make every child
              feel confident, comfortable and special.
            </p>

            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-xl flex gap-2">
              <Scissors size={18} className="text-purple-500 mt-1 flex-shrink-0" />
              From birthday outfits to daily wear, every piece is made with soft
              fabrics, fine stitching and thoughtful design.
            </p>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-xl flex gap-2">
              <Sparkles size={18} className="text-yellow-500 mt-1 flex-shrink-0" />
              Founded by
              <span className="text-purple-600 font-medium ml-1">
                Priya Mahapatra
              </span>
              , focused on comfort, quality and love.
            </p>

          

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative"
          >

            <div className="relative overflow-hidden shadow-lg">

              <img
                src={owenerimg}
                alt="Pia Kids Dream premium kidswear collection"
                className="w-full h-[480px] sm:h-[560px] md:h-[650px] object-cover hover:scale-105 transition duration-700"
              />

              {/* INFO STRIP */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/90 backdrop-blur-md p-5 border border-gray-200">

                <p className="text-xs uppercase tracking-[2px] text-gray-500">
                  Founder & Designer
                </p>

                <h3 className="text-2xl font-bold text-gray-900">
                  Priya Mahapatra
                </h3>
              </div>

            </div>

          </motion.div>

        </div>

        {/* WAVE BOTTOM */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">

          <svg
            viewBox="0 0 1440 200"
            className="w-full h-[80px] md:h-[140px]"
            preserveAspectRatio="none"
          >
            <path
              fill="#faf8ff"
              d="M0,96L60,112C120,128,240,160,360,160C480,160,600,128,720,117.3C840,107,960,117,1080,128C1200,139,1320,149,1380,154.7L1440,160L1440,200L1380,200C1320,200,1200,200,1080,200C960,200,840,200,720,200C600,200,480,200,360,200C240,200,120,200,60,200L0,200Z"
            />
          </svg>

        </div>

      </section>

      {/*achivement*/}
      <section className="py-24 bg-[#faf8ff]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[6px] text-[#9836b9] text-xs">
              Achievements
            </p>

            <h2 className="text-4xl md:text-5xl font-light mt-4">
              Awards & Recognition
            </h2>

            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Recognition and milestones that reflect our dedication to quality and creativity.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Award 1 */}
            <div className="bg-white shadow-sm overflow-hidden">

              <img
                src={achievement2}
                alt="Award 1"
                className="w-full h-[320px] object-cover"
              />

              <div className="p-6">

                <h3 className="text-xl font-medium text-[#9836b9]">
                  Best Kids Fashion Award
                </h3>

                <p className="mt-3 text-gray-600 text-sm leading-6">
                  Recognized for excellence in children's fashion and innovative designs.
                </p>

              </div>

            </div>

            {/* Award 2 */}
            <div className="bg-white shadow-sm overflow-hidden">

              <img
                src={achievement1}
                alt="Award 2"
                className="w-full h-[320px] object-cover"
              />

              <div className="p-6">

                <h3 className="text-xl font-medium text-[#9836b9]">
                  Business Excellence Recognition
                </h3>

                <p className="mt-3 text-gray-600 text-sm leading-6">
                  Honored for outstanding contribution and customer satisfaction.
                </p>

              </div>

            </div>

            {/* Award 3 */}
            <div className="bg-white shadow-sm overflow-hidden">

              <img
                src={achievement3}
                alt="Award 3"
                className="w-full h-[320px] object-cover"
              />

              <div className="p-6">

                <h3 className="text-xl font-medium text-[#9836b9]">
                  Fashion Industry Appreciation
                </h3>

                <p className="mt-3 text-gray-600 text-sm leading-6">
                  Appreciated for creativity, quality craftsmanship and unique collections.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>
      
      {/* ================================================= */}
      {/* ABOUT BLOCK */}
      {/* ================================================= */}

      <section className="relative py-20  md:py-32 bg-gradient-to-b from-[#fffafd] to-white overflow-hidden">

        {/* FLOWER DECOR */}
        <div className="absolute top-10 left-10 text-6xl opacity-10">
          🌸
        </div>

        <div className="absolute bottom-20 right-10 text-7xl opacity-10 rotate-12">
          🌷
        </div>

        <div className="absolute top-1/2 left-[5%] text-5xl opacity-10">
          🌼
        </div>

        <div className="absolute top-32 right-[15%] text-4xl opacity-10">
          ✿
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">

          {/* HEADING */}
          <div className="text-center mb-10">

            <p className="text-purple-500 tracking-[5px] text-xs uppercase">
              Piakids Dream
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-light text-gray-900">
              Growing Beautiful Dreams
            </h2>

          </div>

          <div className="grid lg:grid-cols-2 gap-10">

            {/* VISION */}
            <div className="group bg-white p-10 border border-purple-100 shadow-lg hover:-translate-y-2 transition duration-500">

              <div className="flex items-center gap-4 mb-6">

                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-3xl">
                  🌸
                </div>

                <div>
                  <p className="text-purple-500 text-xs tracking-[4px] uppercase">
                    Vision
                  </p>

                  <h3 className="text-2xl font-semibold">
                    Timeless Kids Fashion
                  </h3>
                </div>

              </div>

              <p className="text-gray-600 leading-8">
                Our vision is to become a trusted kidswear brand
                that blends comfort, quality and elegance into
                every outfit, making childhood more beautiful.
              </p>

            </div>

            {/* MISSION */}
            <div className="group bg-gradient-to-br from-purple-600 to-fuchsia-600  p-10 text-white shadow-xl hover:-translate-y-2 transition duration-500">

              <div className="flex items-center gap-4 mb-6">

                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-3xl">
                  🌷
                </div>

                <div>
                  <p className="text-purple-100 text-xs tracking-[4px] uppercase">
                    Mission
                  </p>

                  <h3 className="text-2xl font-semibold">
                    Comfort With Style
                  </h3>
                </div>

              </div>

              <p className="text-purple-100 leading-8">
                Our mission is to design premium outfits that
                allow children to move freely, feel confident,
                and enjoy every moment in comfort and style.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================================================= */}
      {/* QUOTE SECTION */}
      {/* ================================================= */}
      <section className="relative py-20 md:py-28 px-6 md:px-10 bg-purple-100 text-black overflow-hidden">

        {/* TOP CURVE */}
        <div className="absolute top-0 left-0 w-full -translate-y-[98%]">

          <svg
            viewBox="0 0 1440 220"
            className="w-full h-[90px] md:h-[150px]"
            preserveAspectRatio="none"
          >
            <path
              fill="#e9d5ff"
              d="M0,220 C300,40 1140,40 1440,220 L1440,220 L0,220 Z"
            />
          </svg>

        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >

          <p className="text-purple-600 tracking-[5px] uppercase text-xs md:text-sm">
            Pia Kids Dream
          </p>

          <h2 className="mt-8 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-[-2px]">
            Dressing Your Little
            <span className="block text-purple-500">
              Favourites
            </span>
          </h2>

          <p className="mt-8 text-gray-700 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Custom, comfortable & crafted with love
            for your little star ✨
          </p>

        </motion.div>

      </section>
    </div>
  );
}

export default About;