import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const [dropdown, setDropdown] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileFilter, setMobileFilter] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === "/";
  const isTransparent = isHome && !scrolled;

  // ✅ TEXT COLOR LOGIC
  const linkColor = `${
    isTransparent
      ? "text-white/80 hover:text-white"
      : "text-gray-700 hover:text-black"
  } transition-colors duration-300`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleFilter = (category) => {
    const query = new URLSearchParams();
    if (category) query.append("category", category);

    navigate(`/collections?${query.toString()}`);
    setDropdown(null);
    setMobileMenu(false);
  };

  const handleCategoryPage = (basePath, category) => {
    const query = new URLSearchParams();
    if (category) query.append("category", category);

    navigate(`${basePath}?${query.toString()}`);
    setDropdown(null);
    setMobileMenu(false);
  };

  const shopCategories = [
    "Tops",
    "Shirts",
    "Skirts",
    "Shorts",
    "Pants",
    "Blazers",
    "Dresses",
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-20 transition-all duration-500
      ${
        isTransparent
          ? "bg-transparent"
          : "bg-white/90 backdrop-blur-md shadow-md border-b border-gray-200"
      }`}
    >
      {/* TOP BAR */}
      <div className="bg-pink-800 text-white text-center text-xs md:text-sm py-2 font-medium tracking-wide">
        🚀 Free Shipping On Orders Over ₹1500!
      </div>

      {/* MAIN NAV */}
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-8 py-4">
        
        {/* LOGO */}
        <h1
          onClick={() => navigate("/")}
          className={`text-2xl md:text-3xl font-bold tracking-widest cursor-pointer ${
            isTransparent ? "text-white" : "text-black"
          }`}
        >
          VASTRA FASHION<span className="text-gray-400">.</span>
        </h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/" className={linkColor}>HOME</Link>
          <Link to="/about" className={linkColor}>OUR STORY</Link>

          {/* SHOP */}
          <div
            className="relative"
            onMouseEnter={() => setDropdown("shop")}
            onMouseLeave={() => setDropdown(null)}
          >
            <div className={`cursor-pointer ${linkColor}`}>
              SHOP ▼
            </div>

            <div className={`absolute top-10 left-0 w-56 bg-white rounded-2xl shadow-xl py-4
              ${dropdown === "shop" ? "opacity-100 visible" : "opacity-0 invisible"}
              transition-all duration-300`}
            >
              {shopCategories.map((item) => (
                <p
                  key={item}
                  onClick={() => handleFilter(item)}
                  className="px-6 py-2 text-black hover:bg-gray-100 cursor-pointer"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          <Link to="/explore" className={linkColor}>EXPLORE</Link>

          {/* WOMEN */}
          <div
            className="relative"
            onMouseEnter={() => setDropdown("women")}
            onMouseLeave={() => setDropdown(null)}
          >
            <div
              onClick={() => navigate("/womensstyle")}
              className={`cursor-pointer ${linkColor}`}
            >
              WOMEN ▼
            </div>

            <div className={`absolute top-10 left-0 w-56 bg-white rounded-2xl shadow-xl py-4
              ${dropdown === "women" ? "opacity-100 visible" : "opacity-0 invisible"}
              transition-all duration-300`}
            >
              {["Top","T-Shirt","Pants","Dress","Skirt","Blazer","Saree","Kurti"].map((item) => (
                <p
                  key={item}
                  onClick={() => handleCategoryPage("/womensstyle", item)}
                  className="px-6 py-2 text-black hover:bg-gray-100 cursor-pointer"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* KIDS */}
          <div
            className="relative"
            onMouseEnter={() => setDropdown("kids")}
            onMouseLeave={() => setDropdown(null)}
          >
            <div
              onClick={() => navigate("/kidsstyle")}
              className={`cursor-pointer ${linkColor}`}
            >
              KIDS ▼
            </div>

            <div className={`absolute top-10 left-0 w-56 bg-white rounded-2xl shadow-xl py-4
              ${dropdown === "kids" ? "opacity-100 visible" : "opacity-0 invisible"}
              transition-all duration-300`}
            >
              {["T-Shirt","Shirt","Pant","Shorts","Frock"].map((item) => (
                <p
                  key={item}
                  onClick={() => handleCategoryPage("/kidsstyle", item)}
                  className="px-6 py-2 text-black hover:bg-gray-100 cursor-pointer"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          <Link to="/contact" className={linkColor}>CONTACT</Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className={`md:hidden text-2xl ${
            isTransparent ? "text-white" : "text-black"
          }`}
        >
          {mobileMenu ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className={`${mobileMenu ? "block" : "hidden"} md:hidden bg-white text-black shadow-md p-4`}>
        <div className="flex flex-col gap-4">

          <Link to="/">HOME</Link>
          <Link to="/about">OUR STORY</Link>

          {/* SHOP */}
          <div>
            <div
              onClick={() => setMobileFilter(mobileFilter === "shop" ? null : "shop")}
              className="flex justify-between cursor-pointer font-medium"
            >
              SHOP <span>{mobileFilter === "shop" ? "−" : "+"}</span>
            </div>

            {mobileFilter === "shop" && (
              <div className="pl-4 mt-2 flex flex-col gap-2 text-sm">
                {shopCategories.map((item) => (
                  <p key={item} onClick={() => handleFilter(item)}>
                    {item}
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* WOMEN */}
          <div>
            <div
              onClick={() => setMobileFilter(mobileFilter === "women" ? null : "women")}
              className="flex justify-between cursor-pointer font-medium"
            >
              WOMEN <span>{mobileFilter === "women" ? "−" : "+"}</span>
            </div>

            {mobileFilter === "women" && (
              <div className="pl-4 mt-2 flex flex-col gap-2 text-sm">
                {["Top","T-Shirt","Pants","Dress","Skirt","Blazer","Saree","Kurti"].map((item) => (
                  <p key={item} onClick={() => handleCategoryPage("/womensstyle", item)}>
                    {item}
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* KIDS */}
          <div>
            <div
              onClick={() => setMobileFilter(mobileFilter === "kids" ? null : "kids")}
              className="flex justify-between cursor-pointer font-medium"
            >
              KIDS <span>{mobileFilter === "kids" ? "−" : "+"}</span>
            </div>

            {mobileFilter === "kids" && (
              <div className="pl-4 mt-2 flex flex-col gap-2 text-sm">
                {["T-Shirt","Shirt","Pant","Shorts","Frock"].map((item) => (
                  <p key={item} onClick={() => handleCategoryPage("/kidsstyle", item)}>
                    {item}
                  </p>
                ))}
              </div>
            )}
          </div>

          <Link to="/contact">CONTACT</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;