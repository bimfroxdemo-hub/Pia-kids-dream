import { useLocation } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";

import Instagramsection from "../components/instagram";
import productsData from "../data/productsData";
import { Helmet } from "react-helmet-async";

// ==========================
// CATEGORY MAP
// ==========================
const categoryMap = {
  Wedding: "Wedding",
  Western: "Western",
  Summer: "Summer",

  Navratri: "Navratri Collection",
  Birthday: "Birthday Collection",

  "Wedding Collection": "Wedding",
  "Western Wear": "Western",
  "Summer Collection": "Summer",
  "Navratri Collection": "Navratri Collection",
  "Birthday Collection": "Birthday Collection",
};
function Collections() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const category =
    categoryMap[query.get("category")] || "Wedding";

  const products = productsData[category] || [];

  // STATES
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");

  // ==========================
  // NOT FOUND
  // ==========================
  if (!products.length) {
    return (
      <div className="pt-32 text-center text-red-500">
        Product not found
      </div>
    );
  }

  // ==========================
  // OPEN PRODUCT
  // ==========================
  const openProduct = (item) => {
    setSelectedProduct(item);
    setSelectedImage(item.front);
    setSelectedSize("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // ==========================
  // WHATSAPP ORDER
  // ==========================
 const handleWhatsApp = () => {
  if (!selectedSize) return alert("Please select size");

  const msg = `🛍️ NEW ORDER REQUEST

👗 Product: ${selectedProduct.title}
💰 Price: ${selectedProduct.price}
📏 Size: ${selectedSize}

📝 Details:
${selectedProduct.details}

📦 Specs:
${selectedProduct.specs?.map((s) => `- ${s}`).join("\n")}

Please confirm availability 🙏`;

  const whatsappNumber = "919054981808";

  window.open(
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`,
    "_blank"
  );
};

  // ==========================
  // DETAIL PAGE
  // ==========================
  if (selectedProduct) {
    return (
      <div className="min-h-screen bg-[#f8f5ff] pt-[150px] sm:pt-[135px]">
        <Helmet>
          <title>{category} Collection | Pia Kids Dream Premium Kidswear</title>
          <meta
            name="description"
            content={`Explore premium ${category} collection by Pia Kids Dream. Stylish, comfortable and designer kidswear outfits.`}
          />
          <meta name="keywords" content="kidswear, fashion, boutique, designer kids clothes" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content={`${category} Collection`} />
          <meta property="og:description" content="Premium kidswear collection" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/owner.jpg" />
          <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-14 xl:px-20">

          {/* BACK BUTTON */}
          <button
            onClick={() => {
              setSelectedProduct(null);
              setSelectedImage(null);
              setSelectedSize("");
            }}
            className="flex items-center gap-2 mb-6 text-xs sm:text-sm uppercase tracking-[3px] text-[#5b2c83]"
          >
            <ArrowLeft size={15} />
            Back To Collections
          </button>

          {/* PRODUCT BOX */}
          <div className="bg-white border border-[#eadcf8] p-3 sm:p-5 lg:p-8 ">

            <div className="grid grid-cols-1 lg:grid-cols-[90px_1fr_0.8fr] gap-5 lg:gap-8">

              {/* THUMBNAILS */}
              <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2">

                {selectedProduct.images.map((img, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedImage(img)}
                    className={`
            min-w-[60px]
            sm:min-w-[70px]
            cursor-pointer
            border
            transition-all
            duration-300
            ${selectedImage === img
                        ? "border-[#6b21a8]"
                        : "border-[#e5d7f5]"
                      }
          `}
                  >
                    <img
                      src={img}
                      alt=""
                      className="
              w-full
              h-[75px]
              sm:h-[90px]
              object-cover
            "
                    />
                  </div>
                ))}
              </div>

              {/* MAIN IMAGE */}
              <div>
                <img
                  src={selectedImage}
                  alt={selectedProduct.title}
                  className="
          w-full
          h-[350px]
          sm:h-[500px]
          md:h-[650px]
          lg:h-[700px]
          object-cover
          border
          
        "
                />
              </div>

              {/* DETAILS */}
              <div className="mt-2 lg:mt-0">

                <p className="uppercase text-[10px] sm:text-xs tracking-[4px] text-[#8d79a8]">
                  New Collection
                </p>

                <h1 className="text-2xl md:text-3xl mt-3 font-light text-[#2d1b45] leading-tight">
                  {selectedProduct.title}
                </h1>

                <p className="text-xl md:text-2xl mt-3 text-[#6b21a8] font-medium">
                  {selectedProduct.price}
                </p>

                {/* DESCRIPTION */}
                <p className="mt-5 text-sm md:text-base text-[#6f6480] leading-7">
                  {selectedProduct.details}
                </p>

                {/* SPECS */}
                {selectedProduct.specs && (
                  <ul className="mt-5 text-sm text-[#6f6480] space-y-2">
                    {selectedProduct.specs.map((s, i) => (
                      <li key={i}>• {s}</li>
                    ))}
                  </ul>
                )}

                {/* SIZE */}
                <div className="mt-8">

               <p className="uppercase text-xs sm:text-sm tracking-[3px] mb-4 text-[#5b2c83] font-medium">
  Select Size
</p>

<div className="flex flex-wrap gap-3">
  {selectedProduct.sizes.map((size) => (
    <button
      key={size}
      onClick={() => setSelectedSize(size)}
      className={`
        min-w-[52px] h-12 px-4
        rounded-lg
        border
        text-sm font-medium
        transition-all duration-300
        shadow-sm
        ${
          selectedSize === size
            ? "bg-[#6b21a8] text-white border-[#6b21a8] shadow-md scale-105"
            : "bg-white text-[#5b2c83] border-[#e5d4ff] hover:border-[#6b21a8] hover:bg-[#f8f3ff]"
        }
      `}
    >
      {size}
    </button>
  ))}
</div>

                </div>

                {/* ORDER BUTTON */}
                <button
                  onClick={handleWhatsApp}
                  className="
          w-full
          mt-8
          bg-[#6b21a8]
          hover:bg-[#581c87]
          text-white
          py-3
          md:py-4
          text-sm
          md:text-base
          uppercase
          tracking-[2px]
          transition-all
          duration-300
        "
                >
                  Order On WhatsApp
                </button>

              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }

  // ==========================
  // COLLECTION GRID
  // ==========================
  return (
    <div className="min-h-screen bg-[#f8f5ff] pt-[150px] sm:pt-[135px]">
      {/* SEO (GRID PAGE) */}
      <Helmet>
        <title>{category} Collection | Pia Kids Dream Premium Kidswear</title>
        <meta
          name="description"
          content={`Explore premium ${category} collection by Pia Kids Dream.`}
        />
        <meta name="keywords" content="kidswear, fashion, boutique, designer clothes" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={`${category} Collection`} />
        <meta property="og:description" content="Premium kidswear collection" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/owner.jpg" />
      </Helmet>

      {/* HEADER */}
      <div className="text-center mb-14 px-4">
        <p className="uppercase tracking-[6px] text-[#8d79a8] text-sm">
          Luxury Fashion
        </p>

        <h1 className="text-3xl md:text-5xl mt-4 font-light text-[#2d1b45]">
          {category} Collection
        </h1>

        <p className="text-sm md:text-base text-[#746985] mt-4 max-w-2xl mx-auto">
          Explore premium styles with modern fashion aesthetics.
        </p>
      </div>

      {/* PRODUCTS GRID */}
      <div className="px-4 sm:px-6 lg:px-14">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {products.map((item) => (
            <div
              key={item.id}
              onClick={() => openProduct(item)}
              className="cursor-pointer group"
            >

              <div className="overflow-hidden border bg-white">
                <img
                  src={item.front}
                  alt={item.title}
                  className="
    w-full
    h-[240px]
    sm:h-[320px]
    md:h-[420px]
    lg:h-[500px]
    object-cover
    group-hover:scale-105
    transition
    duration-500
  "
                />
              </div>

   <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
  
  <div className="flex-1">
    <h3 className="text-sm md:text-lg font-medium text-[#2d1b45]">
      {item.title}
    </h3>

    <p className="inline-block bg-purple-500 text-white px-4 py-2 text-xs font-medium mt-2">
      {item.price}
    </p>
  </div>

  <button
    onClick={() => handleWhatsApp(item)}
    className="w-full sm:w-auto border border-purple-500 text-purple-500 px-4 py-2  text-xs hover:bg-purple-500 hover:text-white transition"
  >
    WhatsApp
  </button>

</div>

            </div>
          ))}

        </div>
      </div>

      {/* INSTAGRAM */}
      <div className="mt-20">
        <Instagramsection />
      </div>

    </div>
  );
}

export default Collections;