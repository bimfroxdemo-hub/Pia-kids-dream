import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import kidsProducts from "../data/kidsproducts";

const { Kids } = kidsProducts;
const categories = ["All", ...new Set(Kids.map((p) => p.category))];

export default function KidsStyle() {
  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search);
  const urlCategory = query.get("category");
  const productId = query.get("id");

  const [selectedCategory, setSelectedCategory] = useState(
    urlCategory || "All"
  );

  const selectedProduct = Kids.find(
    (p) => p.id === Number(productId)
  );

  const gallery = selectedProduct?.images || [];

  const [activeImage, setActiveImage] = useState("");

  useEffect(() => {
    if (gallery.length > 0) {
      setActiveImage(gallery[0]);
    }
  }, [productId]);

  const filtered =
    selectedCategory === "All"
      ? Kids
      : Kids.filter((p) => p.category === selectedCategory);

  const handleWhatsApp = (item) => {
    const phone = "916353771878";

    const message = `
🛍️ NEW ORDER REQUEST

Product Name: ${item.name}
Product ID: ${item.id}
Category: ${item.category}
Price: ${item.price}

Please confirm my order ✅
`;

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const seoTitle = "Kids Fashion Collection | Premium Kids Wear India";
  const seoDesc =
    "Explore premium kidswear collection including shirts, pants, frocks, shorts and t-shirts.";

  /* ================= PRODUCT PAGE ================= */

  if (selectedProduct) {
    return (
      <div className="pt-24 md:pt-28 max-w-7xl mx-auto px-4 pb-16">
        <Helmet>
          <title>{selectedProduct.name}</title>
          <meta name="description" content={seoDesc} />
        </Helmet>

        <button
          onClick={() => navigate("/kidsstyle")}
          className="mb-6 text-sm text-gray-500 hover:text-purple-500"
        >
          ← Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8">

          {/* LEFT GALLERY */}
          <div>
            <div className="flex flex-col md:flex-row gap-4">

              {/* THUMBNAILS */}
              <div className="flex md:flex-col gap-3 overflow-x-auto">
                {gallery.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    onClick={() => setActiveImage(img)}
                    className={`w-16 h-20 md:w-24 md:h-28 object-cover border cursor-pointer flex-shrink-0 ${
                      activeImage === img
                        ? "border-purple-500"
                        : "border-gray-200"
                    }`}
                  />
                ))}
              </div>

              {/* MAIN IMAGE */}
              <div className="flex-1 border bg-white flex items-center justify-center">
                <img
                  src={activeImage || gallery[0]}
                  alt={selectedProduct.name}
                  className="w-full h-[400px] sm:h-[500px] md:h-[750px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="pt-2">

            <p className="uppercase tracking-[4px] text-purple-400 text-xs">
              Premium Kids Wear
            </p>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-light mt-4">
              {selectedProduct.name}
            </h1>

            <p className="text-2xl sm:text-3xl md:text-4xl text-purple-500 font-medium mt-5">
              {selectedProduct.price}
            </p>

            <p className="mt-6 text-gray-500 leading-7">
              {selectedProduct.description}
            </p>

            {/* SIZE */}
            <div className="mt-10">
              <h3 className="uppercase tracking-[3px] text-sm mb-4">
                Select Size
              </h3>

              <div className="flex gap-3 flex-wrap">
                {["18", "20", "22", "24", "26", "28"].map((size) => (
                  <button
                    key={size}
                    className="w-12 h-12 border hover:bg-purple-500 hover:text-white transition"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* BUTTON */}
            <button
              onClick={() => handleWhatsApp(selectedProduct)}
              className="mt-10 w-full bg-purple-500 hover:bg-purple-600 text-white py-4 uppercase tracking-[2px]"
            >
              Order on WhatsApp
            </button>

          </div>
        </div>
      </div>
    );
  }

  /* ================= GRID ================= */

  return (
    <div className="pt-24 min-h-screen bg-[#fff7fa]">

      <div className="text-center max-w-7xl mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-light">
          Kids Collection
        </h1>

        {/* CATEGORY */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                cat === "All"
                  ? navigate("/kidsstyle")
                  : navigate(`/kidsstyle?category=${cat}`);
              }}
              className={`px-4 py-2 text-xs border ${
                selectedCategory === cat
                  ? "bg-purple-500 text-white"
                  : "bg-white text-gray-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-4 mt-10">
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

    {filtered.map((item) => (
      <div
        key={item.id}
        onClick={() => navigate(`/kidsstyle?id=${item.id}`)}
        className="cursor-pointer group"
      >
        <div className="relative overflow-hidden border bg-white">
          <img
            src={item.images?.[0]}
            alt={item.name}
            className="w-full h-[260px] sm:h-[300px] md:h-[480px] object-cover group-hover:scale-105 transition duration-500"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4">
            <h3 className="text-white font-medium text-sm">
              {item.name}
            </h3>

            <p className="text-white text-sm">
              {item.price}
            </p>
          </div>
        </div>
      </div>
    ))}

  </div>
</div>
    </div>
  );
}