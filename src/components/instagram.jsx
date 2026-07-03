import { FaInstagram } from "react-icons/fa";
import flower from "../assets/backimg3.png";

const posts = [
  {
    id: 1,
    postId: "DOwI13AjCro",
    link: "https://www.instagram.com/reel/DOwI13AjCro/",
    desc: "Kids fashion collection 👗",
  },

  {
    id: 2,
    postId: "DYV88pMjEdK",
    link: "https://www.instagram.com/p/DYV88pMjEdK/?utm_source=ig_web_button_share_sheet",
    desc: "New arrivals 💖",
  },

  {
    id: 3,
    postId: "DXpbxNJDPlC",
    link: "https://www.instagram.com/reel/DXpbxNJDPlC/",
    desc: "Trending reel 🔥",
  },

  {
    id: 4,
    postId: "DTQaK0DDMXk",
    link: "https://www.instagram.com/reel/DTQaK0DDMXk/",
    desc: "Latest reel 🎬",
  },

  {
    id: 5,
    postId: "DIZL7XUSNJP",
    link: "https://www.instagram.com/reel/DIZL7XUSNJP/",
    desc: "Elegant style ✨",
  },

  {
    id: 6,
    postId: "DVJSJm3jBel",
    link: "https://www.instagram.com/p/DVJSJm3jBel/",
    desc: "Party wear 🎉",
  },

  {
    id: 7,
    postId: "DXLqLwuDHd_",
    link: "https://www.instagram.com/p/DXLqLwuDHd_/?utm_source=ig_web_button_share_sheet",
    desc: "Stylish outfit 😍",
  },

  {
    id: 8,
    postId: "DU3iXwhDG7x",
    link: "https://www.instagram.com/p/DU3iXwhDG7x/",
    desc: "Premium collection 👑",
  },

  {
    id: 9,
    postId: "DQUaonCkt8b",
    link: "https://www.instagram.com/reel/DQUaonCkt8b/",
    desc: "New reel 🚀",
  },

  {
    id: 10,
    postId: "DS-WYa2DPne",
    link: "https://www.instagram.com/p/DS-WYa2DPne/",
    desc: "Festive look 🎊",
  },

  {
    id: 11,
    postId: "DSwhhSJjLTj",
    link: "https://www.instagram.com/p/DSwhhSJjLTj/",
    desc: "Casual wear 👕",
  },

  {
    id: 12,
    postId: "DSwhFl8DDBE",
    link: "https://www.instagram.com/p/DSwhFl8DDBE/",
    desc: "Daily fashion 💫",
  },

  {
    id: 13,
    postId: "DSFpsYZDPHj",
    link: "https://www.instagram.com/p/DSFpsYZDPHj/",
    desc: "Trendy outfit 💃",
  },

  {
    id: 14,
    postId: "DXJaTcTkQtW",
    link: "https://www.instagram.com/p/DXJaTcTkQtW/",
    desc: "Latest drop 🆕",
  },
];

const Img = ({ postId, link, desc }) => (
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
      src={`https://images.weserv.nl/?url=https://www.instagram.com/p/${postId}/media/?size=l`}
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