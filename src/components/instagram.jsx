import { FaInstagram } from "react-icons/fa";
import flower from "../assets/backimg3.png";
import post1 from "../assets/instapostimg/post-1.JPEG";
import post2 from "../assets/instapostimg/post-2.JPEG";
import post3 from "../assets/instapostimg/post-3.JPEG";
import post4 from "../assets/instapostimg/post-4.JPEG";
import post5 from "../assets/instapostimg/post-5.JPG";
import post6 from "../assets/instapostimg/post-6.JPEG";
import post7 from "../assets/instapostimg/post-7.JPEG";
import post8 from "../assets/instapostimg/post-8.JPEG";
import post9 from "../assets/instapostimg/post-9.JPEG";
import post10 from "../assets/instapostimg/post-10.JPEG";
import post11 from "../assets/instapostimg/post-11.JPEG";
import post12 from "../assets/instapostimg/post-12.JPEG";
import post13 from "../assets/instapostimg/post-13.JPEG";
import post14 from "../assets/instapostimg/post-14.JPEG";
const posts = [
  {
    id: 1,
    image: post1,
    link: "https://www.instagram.com/p/DZzy1lGDGvW/?utm_source=ig_web_button_share_sheet",
    desc: "Kids fashion collection 👗",
  },

  {
    id: 2,
    image: post2,
    link: "https://www.instagram.com/p/DaF7JysjDyH/?utm_source=ig_web_button_share_sheet",
    desc: "New arrivals 💖",
  },

  {
    id: 3,
    image: post3,
    link: "https://www.instagram.com/p/DZsBsN8jFqC/?utm_source=ig_web_button_share_sheet",
    desc: "Trending reel 🔥",
  },

  {
    id: 4,
    image: post4,
    link: "https://www.instagram.com/p/DYyse0TDIQB/?utm_source=ig_web_button_share_sheet",
    desc: "Latest reel 🎬",
  },

  {
    id: 5,
    image: post5,
    link: "https://www.instagram.com/p/DU3iXwhDG7x/?utm_source=ig_web_button_share_sheet",
    desc: "Elegant style ✨",
  },

  {
    id: 6,
    image: post6,
    link: "https://www.instagram.com/p/DYV88pMjEdK/?utm_source=ig_web_button_share_sheet",
    desc: "Party wear 🎉",
  },

  {
    id: 7,
    image: post7,
    link: "https://www.instagram.com/p/DYj-sv-jMEj/?utm_source=ig_web_button_share_sheet",
    desc: "Stylish outfit 😍",
  },

  {
    id: 8,
    image: post8,
    link: "https://www.instagram.com/p/DY14NKejGgK/?utm_source=ig_web_button_share_sheet",
    desc: "Premium collection 👑",
  },

  {
    id: 9,
    image: post9,
    link: "https://www.instagram.com/p/DY9lzRCE7Et/?utm_source=ig_web_button_share_sheet",
    desc: "New reel 🚀",
  },

  {
    id: 10,
    image: post10,
    link: "https://www.instagram.com/p/DYwc5BKjGJ5/?utm_source=ig_web_button_share_sheet",
    desc: "Festive look 🎊",
  },

  {
    id: 11,
    image: post11,
    link: "https://www.instagram.com/p/DZT-YktDI6V/?utm_source=ig_web_button_share_sheet",
    desc: "Casual wear 👕",
  },

  {
    id: 12,
    image: post12,
    link: "https://www.instagram.com/p/DZaECf1MoX1/?utm_source=ig_web_button_share_sheet",
    desc: "Daily fashion 💫",
  },

  {
    id: 13,
    image: post13,
    link: "https://www.instagram.com/p/DVJSJm3jBel/?utm_source=ig_web_button_share_sheet",
    desc: "Trendy outfit 💃",
  },

  {
    id: 14,
    image: post14,
    link: "https://www.instagram.com/p/DTcdm2KjPHt/?utm_source=ig_web_button_share_sheet",
    desc: "Latest drop 🆕",
  },
];

const Img = ({ image, link, desc }) => (
  <div
    onClick={() => window.open(link, "_blank")}
    className="
      relative
      group
      cursor-pointer
      overflow-hidden
      rounded-2xl
      bg-black
      w-full
      h-full
    "
  >
    <img
      src={image}
      alt="instagram"
      className="
        w-full
        h-full
        object-cover
        transition-all
        duration-700
        group-hover:scale-110
      "
    />

    {/* OVERLAY */}
    <div
      className="
        absolute inset-0
       
        transition-all
        duration-500
        flex
        flex-col
        items-center
        justify-center
        text-center
        px-3 sm:px-5
      "
    >
      <FaInstagram
        className="
          text-2xl sm:text-4xl
          mb-2
          opacity-0
          translate-y-3
          group-hover:opacity-100
          group-hover:translate-y-0
          transition-all
          duration-500
        "
        style={{
          background:
            "radial-gradient(circle at 30% 107%, #fdf497 0%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      />

      <p
        className="
          text-[10px] sm:text-xs
          text-gray-300
          opacity-0
          group-hover:opacity-100
          transition-all
          duration-500
        "
      >
        March 20, 2026
      </p>

      <p
        className="
          text-white
          text-[11px] sm:text-sm
          mt-2
          leading-relaxed
          opacity-0
          translate-y-2
          group-hover:opacity-100
          group-hover:translate-y-0
          transition-all
          duration-500
          line-clamp-3
        "
      >
        {desc}
      </p>
    </div>
  </div>
);

export default function InstagramSection() {
  return (
    <section className="relative py-14 sm:py-20 bg-white overflow-hidden">

      {/* HEADER */}
<div className="text-center mb-10 relative z-10">

  <p className="uppercase tracking-[5px] text-[10px] text-purple-500 mb-2">
    Social Gallery
  </p>

  <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
    Discover on
    <span className="text-purple-500 italic font-light ml-2">
      Instagram
    </span>
  </h2>

</div>

      <div className="max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-8 relative">

        {/* LEFT FLOWER */}
        <img
          src={flower}
          alt=""
          className="
            hidden lg:block
            absolute
            -left-32 xl:-left-52
            top-10
            w-[220px] xl:w-[380px]
            opacity-40
            pointer-events-none
            z-0
            
          "
        />

        {/* RIGHT FLOWER */}
        <img
          src={flower}
          alt=""
          className="
            hidden lg:block
            absolute
            -right-32 xl:-right-52
            bottom-0
            w-[220px] xl:w-[380px]
            opacity-40
            rotate-180
            pointer-events-none
            z-0
          
          "
        />

        {/* MOBILE GRID */}
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            lg:grid-cols-4
            gap-2 sm:gap-4
            relative
            z-10
          "
        >

          {/* BIG CARD */}
          <div className="col-span-2 row-span-2 h-[260px] sm:h-[420px] lg:h-[780px]">
            <Img {...posts[0]} />
          </div>

          {/* NORMAL */}
          <div className="h-[125px] sm:h-[200px] lg:h-[380px]">
            <Img {...posts[1]} />
          </div>

          <div className="h-[125px] sm:h-[200px] lg:h-[380px]">
            <Img {...posts[2]} />
          </div>

          <div className="h-[125px] sm:h-[200px] lg:h-[380px]">
            <Img {...posts[3]} />
          </div>

          <div className="h-[125px] sm:h-[200px] lg:h-[380px]">
            <Img {...posts[13]} />
          </div>

          <div className="h-[125px] sm:h-[200px] lg:h-[380px]">
            <Img {...posts[6]} />
          </div>

          <div className="h-[125px] sm:h-[200px] lg:h-[380px]">
            <Img {...posts[5]} />
          </div>

          {/* BIG CARD */}
          <div className="col-span-2 row-span-2 h-[260px] sm:h-[420px] lg:h-[780px]">
            <Img {...posts[4]} />
          </div>

          {/* TALL CARD */}
          <div className="row-span-2 h-[260px] sm:h-[420px] lg:h-[780px]">
            <Img {...posts[8]} />
          </div>

          {/* SMALL */}
          <div className="h-[125px] sm:h-[200px] lg:h-[380px]">
            <Img {...posts[9]} />
          </div>

          <div className="h-[125px] sm:h-[200px] lg:h-[380px]">
            <Img {...posts[10]} />
          </div>

          <div className="h-[125px] sm:h-[200px] lg:h-[380px]">
            <Img {...posts[11]} />
          </div>

          <div className="h-[125px] sm:h-[200px] lg:h-[380px]">
            <Img {...posts[12]} />
          </div>

        </div>
      </div>
    </section>
  );
}