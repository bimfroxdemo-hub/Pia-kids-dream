import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { products } from "../data/womenproducts";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function WomenStyle() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedSize, setSelectedSize] = useState("");
  const query = new URLSearchParams(location.search);
  const productId = query.get("id");

  const selectedProduct = products.find(
    (p) => p.id === Number(productId)
  );

  const gallery = selectedProduct?.images || [];

  const [activeImage, setActiveImage] = useState("");

  useEffect(() => {
    if (gallery.length > 0) {
      setActiveImage(gallery[0]);
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [productId]);

  const handleWhatsApp = (item) => {
    const phone = "916353771878";

    const message = `
🛍️ NEW ORDER REQUEST

Product: ${item.name}
Price: ${item.price}
Category: ${item.category}
Size: ${selectedSize || "Not selected"}

✨ Details:
Colour: ${item.details?.colour || "-"}
Fabric: ${item.details?.fabric || "-"}
Style: ${item.details?.style || "-"}
Vibe: ${item.details?.vibe || "-"}

📝 Description:
${item.description || ""}

Please confirm availability.
`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };
  const seoTitle =
    "Women Fashion Collection | Premium Dresses, Tops, Saree & Western Wear";

  const seoDesc =
    "Explore premium women's fashion collection including dresses, tops, sarees, skirts, pants and stylish outfits.";

  if (selectedProduct) {
    return (
      <div className="pt-24 md:pt-28 max-w-7xl mx-auto px-4 pb-16">
        <Helmet>
          <title>{selectedProduct.name}</title>
          <meta name="description" content={selectedProduct.description} />
        </Helmet>

        <button
          onClick={() => navigate("/womensstyle")}
          className="mb-6 text-sm"
        >
          ← Back
        </button>

        {/* LEFT + RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8 items-start">

          {/* LEFT */}
          <div>
            <div className="flex flex-col md:flex-row gap-4">

              {/* Thumbnails */}
              <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
                {gallery.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt=""
                    onClick={() => setActiveImage(img)}
                    className={`w-16 h-22 md:w-24 md:h-28 object-cover bg-white border cursor-pointer flex-shrink-0 ${activeImage === img
                      ? "border-purple-600"
                      : "border-gray-200"
                      }`}
                  />
                ))}
              </div>

              {/* Main Image */}
              <div className="flex-1 border bg-white flex items-center justify-center">
                <img
                  src={activeImage || gallery[0]}
                  alt={selectedProduct.name}
                  className="
                  w-full
                  h-[390px]
                  sm:h-[420px]
                  md:h-[700px]
                 
                  bg-white
                  p-2
                  group-hover:scale-105
                  transition duration-500
                "
                />
              </div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="pt-4 lg:pt-2">

            {/* Badge */}
            <p className="uppercase tracking-[4px] text-purple-500 text-xs md:text-sm">
              New Collection
            </p>

            {/* Name */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-light mt-4">
              {selectedProduct.name}
            </h1>

            {/* Price */}
            <p className="text-2xl sm:text-3xl md:text-5xl font-bold text-purple-700 mt-5">
              {selectedProduct.price}
            </p>

            {/* Description */}
            <p className="mt-5 text-gray-600 text-sm md:text-base leading-relaxed">
              {selectedProduct.description}
            </p>

            {/* DETAILS BOX */}
            <div className="mt-6 p-4 border bg-white rounded-xl space-y-2 shadow-sm">

              <h3 className="uppercase tracking-[3px] text-sm font-semibold text-purple-700 mb-2">
                Product Details
              </h3>

              <p className="text-sm md:text-base">
                <span className="font-semibold">Colour:</span>{" "}
                {selectedProduct.details?.colour}
              </p>

              <p className="text-sm md:text-base">
                <span className="font-semibold">Fabric:</span>{" "}
                {selectedProduct.details?.fabric}
              </p>

              <p className="text-sm md:text-base">
                <span className="font-semibold">Style:</span>{" "}
                {selectedProduct.details?.style}
              </p>

              <p className="text-sm md:text-base">
                <span className="font-semibold">Vibe:</span>{" "}
                {selectedProduct.details?.vibe}
              </p>

            </div>

            {/* SIZE SELECT */}
            <div className="mt-8 md:mt-10">

              <h3 className="uppercase tracking-[3px] text-sm mb-4">
                Select Size
              </h3>

              <div className="flex flex-wrap gap-3">

                {selectedProduct?.sizes?.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 md:w-16 md:h-16 border transition ${selectedSize === size
                        ? "bg-purple-700 text-white"
                        : "hover:bg-purple-700 hover:text-white"
                      }`}
                  >
                    {size}
                  </button>
                ))}

              </div>

            </div>



            <button
              onClick={() => handleWhatsApp(selectedProduct)}
              className="mt-8 md:mt-10 w-full bg-purple-700 hover:bg-purple-800 text-white py-3 md:py-4 uppercase tracking-[2px] text-sm md:text-lg transition"
            >
              Order on WhatsApp
            </button>

          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 md:pt-24 min-h-screen bg-[#fcf8ff]">
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDesc} />
      </Helmet>

      <div className="relative pt-8 pb-10 overflow-hidden bg-gradient-to-b from-[#fcf8ff] via-white to-[#fcf8ff]">

        {/* Left Flower */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 0.12, x: 0 }}
          transition={{ duration: 1 }}
          className="absolute left-0 top-0 text-[90px] md:text-[130px] select-none pointer-events-none"
        >
          🌸
        </motion.div>

        {/* Right Flower */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 0.12, x: 0 }}
          transition={{ duration: 1 }}
          className="absolute right-0 bottom-0 text-[90px] md:text-[130px] select-none pointer-events-none"
        >
          🪻
        </motion.div>

        {/* Floating Flowers */}
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute left-[22%] top-6 text-xl opacity-30"
        >
          ✿
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute right-[22%] top-10 text-xl opacity-30"
        >
          ❀
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">

          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-5 py-2  bg-purple-100 border border-purple-200 mb-4"
          >
            <span className="uppercase tracking-[5px] text-[11px] font-semibold text-purple-700">
              Premium Fashion
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight"
          >
            <span className="bg-gradient-to-r from-purple-800 via-fuchsia-500 to-purple-700 bg-clip-text text-transparent">
              Women's Premium
            </span>

            <br />

            <span className="font-serif italic text-[#3b1d57]">
              Collection
            </span>
          </motion.h1>

          {/* Divider */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 90 }}
            transition={{ duration: 0.8 }}
            className="h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mt-5"
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">

          {products.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/womensstyle?id=${item.id}`)}
              className="cursor-pointer group"
            >
              <div className="relative overflow-hidden border bg-white">

                <img
                  src={item.images?.[0]}
                  alt={item.name}
                  className="
              w-full
              h-[220px]
              sm:h-[360px]
              md:h-[440px]
              object-cover
              bg-white
              p-2
              group-hover:scale-105
              transition duration-500
            "
                />

                {/* Hover Overlay */}
                <div
                  className="
              absolute inset-0
              flex flex-col
              justify-end
              items-center
              text-white
              p-4
              opacity-0
              group-hover:opacity-100
              transition duration-300
            "
                >
                  <div className="absolute bottom-0 left-0 w-full text-white py-3 px-4">



                    <button
                      onClick={() => handleWhatsApp(selectedProduct)}
                      className="mt-3 md:mt-5 w-full max-w-[180px] bg-purple-700 hover:bg-purple-800 text-white py-2 md:py-2.5 uppercase tracking-[1px] text-xs md:text-sm transition "
                    >
                      Order on WhatsApp
                    </button>

                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}