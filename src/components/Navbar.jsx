import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/heroimg/logo.png"
import {
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

import { FiPhone } from "react-icons/fi";

import {
  HiOutlineShoppingBag,
} from "react-icons/hi2";

import {
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

function Navbar() {
  const [dropdown, setDropdown] = useState(null);

  const [mobileMenu, setMobileMenu] =
    useState(false);

  const [mobileShopOpen, setMobileShopOpen] =
    useState(false);

  const [mobileWomenOpen, setMobileWomenOpen] =
    useState(false);

  const [mobileKidsOpen, setMobileKidsOpen] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const transparentPages = ["/"];

  const isTransparentPage =
    transparentPages.includes(
      location.pathname
    );

  const isTransparent =
    window.innerWidth >= 768 &&
    isTransparentPage &&
    !scrolled;

  useEffect(() => {
    const handleScroll = () =>
      setScrolled(window.scrollY > 40);

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  useEffect(() => {
    document.body.style.overflow =
      mobileMenu ? "hidden" : "auto";
  }, [mobileMenu]);

  const isActive = (path) =>
    location.pathname === path;

  const handleFilter = (category) => {
    const query = new URLSearchParams();

    if (category)
      query.append("category", category);

    navigate(
      `/collections?${query.toString()}`
    );

    setMobileMenu(false);
  };

  const handleCategoryPage = (
    basePath,
    category
  ) => {
    const query = new URLSearchParams();

    if (category)
      query.append("category", category);

    navigate(
      `${basePath}?${query.toString()}`
    );

    setMobileMenu(false);
  };

  const shopCategories = [
    "Wedding Collection",
    "Western Wear",
    "Summer Collection",
    "Navratri Collection",
    "Birthday Collection",
  ];

  const navClass = (path) =>
    `relative text-[14px] tracking-[2px] font-semibold uppercase transition-all duration-300 ${isActive(path)
      ? "text-violet-600"
      : isTransparent
        ? "text-black/85 hover:text-violet-200"
        : "text-gray-700 hover:text-violet-600"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isTransparent
        ? "bg-transparent"
        : "bg-purple-100/80 backdrop-blur-2xl border-b border-white/30 shadow-[0_10px_40px_rgba(0,0,0,0.06)]"
        }`}
      style={{
        fontFamily:
          "'Montserrat', sans-serif",
      }}
    >

    <div className="w-full overflow-hidden py-2 text-white border-b border-white/10 bg-purple-900">

  <div className="marquee">

    <div className="marquee-content">

      <span>🚚 Pan India Delivery</span>
      <span>✨ New Summer Collection Live</span>
      <span>🎀 Premium Kids Fashion</span>
      <span>💜 Easy WhatsApp Ordering</span>
      <span>✂️Customize Any Size Available</span>

    </div>


    <div className="marquee-content">

      <span>🚚 Pan India Delivery</span>
      <span>✨ New Summer Collection Live</span>
      <span>🎀 Premium Kids Fashion</span>
      <span>💜 Easy WhatsApp Ordering</span>
      <span>✂️Customize Any Size Available</span>

    </div>

  </div>

</div>
      {/* ================= MAIN NAV ================= */}
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        <div className="h-[88px] flex items-center justify-between">

          {/* LOGO */}
          <div
            onClick={() => navigate("/")}
            className="cursor-pointer flex items-center"
          >
           <img
  src={logo}
  alt="PIA Kids Dream"
  className="h-20 md:h-24 w-auto object-contain"
/>
          </div>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden md:flex items-center gap-9">

            <Link
              to="/"
              className={navClass("/")}
            >
              HOME
            </Link>

            {/* SHOP */}
            <div
              className="relative"
              onMouseEnter={() =>
                setDropdown("shop")
              }
              onMouseLeave={() =>
                setDropdown(null)
              }
            >

              <div
                className={`${navClass(
                  "/collections"
                )} flex items-center gap-1 cursor-pointer`}
              >
                Kids collection

                <ChevronDown size={15} />
              </div>

              {/* SHOP DROPDOWN */}
              <div
                className={`absolute top-full left-0 w-64 bg-white  py-4 shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-gray-100 transition-all duration-300 ${dropdown === "shop"
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-3"
                  }`}
              >

                {shopCategories.map(
                  (item) => (
                    <p
                      key={item}
                      onClick={() =>
                        handleFilter(item)
                      }
                      className="px-6 py-3 text-sm hover:bg-violet-50 cursor-pointer transition"
                    >
                      {item}
                    </p>
                  )
                )}

              </div>
            </div>

            <Link
              to="/about"
              className={navClass("/about")}
            >
              STORY
            </Link>

            <Link
              to="/mom-daughter-duo"
              className={navClass(
                "/mom-daughter-duo"
              )}
            >
              MOM DUO
            </Link>

            <Link
              to="/womensstyle"
              className={navClass(
                "/womensstyle"
              )}
            >
              WOMEN
            </Link>

           

            <Link
              to="/contact"
              className={navClass(
                "/contact"
              )}
            >
              CONTACT
            </Link>

          </div>

          {/* ================= MOBILE BUTTON ================= */}
          <button
            onClick={() =>
              setMobileMenu(!mobileMenu)
            }
            className={`md:hidden ${isTransparent
              ? "text-white"
              : "text-black"
              }`}
          >
            {mobileMenu ? (
              <X size={32} />
            ) : (
              <Menu size={32} />
            )}
          </button>

        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`md:hidden fixed top-0 right-0 w-full h-screen bg-white z-[999] transition-all duration-500 ${mobileMenu
          ? "translate-x-0"
          : "translate-x-full"
          }`}
      >

        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-5 border-b">

          <div>

           <div className="flex items-center">
  <img
    src={logo}
    alt="PIA Kids Dream"
    className="h-14 md:h-16 w-auto"
  />
</div>

            

          </div>

          <button
            onClick={() =>
              setMobileMenu(false)
            }
          >
            <X size={32} />
          </button>

        </div>

        {/* LINKS */}
        <div className="px-6 py-6 flex flex-col gap-2">

          <Link
            to="/"
            onClick={() =>
              setMobileMenu(false)
            }
            className="py-4 border-b font-semibold tracking-wide"
          >
            HOME
          </Link>

          <Link
            to="/about"
            onClick={() =>
              setMobileMenu(false)
            }
            className="py-4 border-b font-semibold tracking-wide"
          >
            OUR STORY
          </Link>

          <Link
            to="/mom-daughter-duo"
            onClick={() =>
              setMobileMenu(false)
            }
            className="py-4 border-b font-semibold tracking-wide"
          >
            MOM DUO
          </Link>

          {/* SHOP */}
          <div className="border-b py-4">

            <div
              onClick={() =>
                setMobileShopOpen(
                  !mobileShopOpen
                )
              }
              className="flex items-center justify-between cursor-pointer font-semibold tracking-wide"
            >
              Kids collection

              <span>
                {mobileShopOpen
                  ? "−"
                  : "+"}
              </span>
            </div>

            {mobileShopOpen && (
              <div className="pl-4 mt-4 flex flex-col gap-3">

                {shopCategories.map(
                  (item) => (
                    <p
                      key={item}
                      onClick={() =>
                        handleFilter(item)
                      }
                      className="text-sm text-gray-600"
                    >
                      {item}
                    </p>
                  )
                )}

              </div>
            )}
          </div>

          {/* WOMEN */}
          <div className="border-b py-4">
            <div
              onClick={() => handleCategoryPage("/womensstyle", "Women")}
              className="cursor-pointer font-semibold tracking-wide"
            >
              WOMEN
            </div>
          </div>

         
       
          <Link
            to="/contact"
            onClick={() =>
              setMobileMenu(false)
            }
            className="py-4 font-semibold tracking-wide"
          >
            CONTACT
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;