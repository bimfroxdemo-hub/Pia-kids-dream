import { useState } from "react";

import post1 from "../assets/instagram/post1.jpg";
import post2 from "../assets/instagram/post2.jpg";
import post3 from "../assets/instagram/post3.jpg";
import post4 from "../assets/instagram/post4.jpg";
import post5 from "../assets/instagram/post5.jpg";
import post6 from "../assets/instagram/post6.jpg";
import post8 from "../assets/instagram/post8.jpg";
import post9 from "../assets/instagram/post9.jpg";

function InstagramSection() {
  const [instaModal, setInstaModal] = useState(null);

  const instaGallery = [
    { id: 1, img: post1, user: "@fashionista", link: "https://instagram.com" },
    { id: 2, img: post2, user: "@trendy", link: "https://instagram.com" },
    { id: 3, img: post3, user: "@stylehub", link: "https://instagram.com" },
    { id: 4, img: post4, user: "@ootd", link: "https://instagram.com" },
    { id: 5, img: post5, user: "@fashiongram", link: "https://instagram.com" },
    { id: 6, img: post6, user: "@streetstyle", link: "https://instagram.com" },
    { id: 8, img: post8, user: "@vogue", link: "https://instagram.com" },
    { id: 9, img: post9, user: "@fashionblogger", link: "https://instagram.com" },
  ];

  return (
    <div>
      {/* ================= INSTAGRAM SECTION ================= */}
      <section className="py-20 px-6 bg-white">

        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">
          Discover on Instagram
        </h2>

        <p className="text-center text-gray-500 mb-12">
          @Aksharcollection
        </p>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          {instaGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setInstaModal(item)}
              className="relative overflow-hidden group cursor-pointer"
            >

              {/* IMAGE */}
              <img
                src={item.img}
                alt={item.user}
                className="w-full h-[400px] md:h-[550px] object-cover transition duration-500 group-hover:scale-105"
              />

              {/* HOVER EFFECT */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition"></div>

              {/* USERNAME */}
              <div className="absolute bottom-3 left-3 text-white text-sm opacity-0 group-hover:opacity-100 transition">
                {item.user}
              </div>

            </div>
          ))}

        </div>

      </section>

      {/* ================= INSTAGRAM MODAL ================= */}
      {instaModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl w-full max-w-5xl flex flex-col md:flex-row overflow-hidden shadow-2xl animate-fadeIn relative">

            {/* Close Button */}
            <button
              onClick={() => setInstaModal(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl"
            >
              ✕
            </button>

            {/* Image */}
            <img
              src={instaModal.img}
              alt={instaModal.user}
              className="md:w-1/2 h-80 md:h-auto object-cover"
            />

            {/* Content */}
            <div className="p-8 md:w-1/2 flex flex-col justify-center">

              <h3 className="text-3xl font-bold mb-3">
                {instaModal.user}
              </h3>

              <p className="text-gray-600 mb-6">
                Discover this stunning fashion look ✨ and stay updated with the latest trends.
              </p>

              {/* Stats */}
              <div className="flex gap-6 mb-6 text-gray-700">
                <span>❤️1,245 Likes</span>
                <span>💬120 Comments</span>
              </div>

              <a
                href={instaModal.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full text-center hover:scale-105 transition"
              >
                View on Instagram
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default InstagramSection;
