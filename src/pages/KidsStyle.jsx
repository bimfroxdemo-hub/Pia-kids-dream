import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Frocks
import frock1 from "../assets/kids/frock1.jpg";
import frock2 from "../assets/kids/frock2.jpg";
import frock3 from "../assets/kids/frock3.jpg";
import frock4 from "../assets/kids/frock4.jpg";
import frock5 from "../assets/kids/frock5.jpg";

// Pants
import pant1 from "../assets/kids/Pants1.jpg";
import pant2 from "../assets/kids/Pants2.jpg";
import pant3 from "../assets/kids/Pants3.jpg";
import pant4 from "../assets/kids/Pants4.jpg";
import pant5 from "../assets/kids/Pants5.jpg";
import pant6 from "../assets/kids/Pants6.jpg";
import pant7 from "../assets/kids/Pant7.jpg";
import pant8 from "../assets/kids/Pant8.jpg";
import pant9 from "../assets/kids/Pant9.jpg";
import pant10 from "../assets/kids/Pant10.jpg";

// Shirts
import shirt1 from "../assets/kids/shirts1.jpg";
import shirt2 from "../assets/kids/shirts2.jpg";
import shirt3 from "../assets/kids/shirts3.jpg";
import shirt4 from "../assets/kids/shirts4.jpg";
import shirt5 from "../assets/kids/shirts5.jpg";
import shirt6 from "../assets/kids/shirts6.jpg";
import shirt7 from "../assets/kids/shirts7.jpg";

// Shorts
import short1 from "../assets/kids/short1.jpg";
import short2 from "../assets/kids/short2.jpg";
import short3 from "../assets/kids/short3.jpg";
import short4 from "../assets/kids/short4.jpg";
import short5 from "../assets/kids/short5.jpg";
import short6 from "../assets/kids/short6.jpg";
import short7 from "../assets/kids/short7.jpg";
import short8 from "../assets/kids/short8.jpg";

// T-Shirts
import tshirt1 from "../assets/kids/t-shirts1.jpg";
import tshirt2 from "../assets/kids/t-shirts2.jpg";
import tshirt3 from "../assets/kids/t-shirts3.jpg";
import tshirt4 from "../assets/kids/t-shirts4.jpg";
import tshirt5 from "../assets/kids/t-shirts5.jpg";
import tshirt6 from "../assets/kids/t-shirts6.jpg";
import tshirt7 from "../assets/kids/t-shirts7.jpg";
import tshirt8 from "../assets/kids/t-shirts8.jpg";
import tshirt9 from "../assets/kids/t-shirts9.jpg";

// PRODUCTS
const products = [
  { id: 1, name: "Kids Shirt 1", price: "₹499", category: "Shirt", img: shirt1 },
  { id: 2, name: "Kids Shirt 2", price: "₹499", category: "Shirt", img: shirt2 },
  { id: 3, name: "Kids Shirt 3", price: "₹499", category: "Shirt", img: shirt3 },
  { id: 4, name: "Kids Shirt 4", price: "₹499", category: "Shirt", img: shirt4 },
  { id: 5, name: "Kids Shirt 5", price: "₹499", category: "Shirt", img: shirt5 },
  { id: 6, name: "Kids Shirt 6", price: "₹499", category: "Shirt", img: shirt6 },
  { id: 7, name: "Kids Shirt 7", price: "₹499", category: "Shirt", img: shirt7 },

  { id: 8, name: "Kids Pant 1", price: "₹599", category: "Pant", img: pant1 },
  { id: 9, name: "Kids Pant 2", price: "₹599", category: "Pant", img: pant2 },
  { id: 10, name: "Kids Pant 3", price: "₹599", category: "Pant", img: pant3 },
  { id: 11, name: "Kids Pant 4", price: "₹599", category: "Pant", img: pant4 },
  { id: 12, name: "Kids Pant 5", price: "₹599", category: "Pant", img: pant5 },
  { id: 13, name: "Kids Pant 6", price: "₹599", category: "Pant", img: pant6 },
  { id: 14, name: "Kids Pant 7", price: "₹599", category: "Pant", img: pant7 },
  { id: 15, name: "Kids Pant 8", price: "₹599", category: "Pant", img: pant8 },
  { id: 16, name: "Kids Pant 9", price: "₹599", category: "Pant", img: pant9 },
  { id: 17, name: "Kids Pant 10", price: "₹599", category: "Pant", img: pant10 },

  { id: 18, name: "Kids Frock 1", price: "₹699", category: "Frock", img: frock1 },
  { id: 19, name: "Kids Frock 2", price: "₹699", category: "Frock", img: frock2 },
  { id: 20, name: "Kids Frock 3", price: "₹699", category: "Frock", img: frock3 },
  { id: 21, name: "Kids Frock 4", price: "₹699", category: "Frock", img: frock4 },
  { id: 22, name: "Kids Frock 5", price: "₹699", category: "Frock", img: frock5 },

  { id: 24, name: "Kids Shorts 1", price: "₹399", category: "Shorts", img: short1 },
  { id: 25, name: "Kids Shorts 2", price: "₹399", category: "Shorts", img: short2 },
  { id: 26, name: "Kids Shorts 3", price: "₹399", category: "Shorts", img: short3 },
  { id: 27, name: "Kids Shorts 4", price: "₹399", category: "Shorts", img: short4 },
  { id: 28, name: "Kids Shorts 5", price: "₹399", category: "Shorts", img: short5 },
  { id: 29, name: "Kids Shorts 6", price: "₹399", category: "Shorts", img: short6 },
  { id: 30, name: "Kids Shorts 7", price: "₹399", category: "Shorts", img: short7 },
  { id: 31, name: "Kids Shorts 8", price: "₹399", category: "Shorts", img: short8 },

  { id: 32, name: "Kids T-Shirt 1", price: "₹299", category: "T-Shirt", img: tshirt1 },
  { id: 33, name: "Kids T-Shirt 2", price: "₹299", category: "T-Shirt", img: tshirt2 },
  { id: 34, name: "Kids T-Shirt 3", price: "₹299", category: "T-Shirt", img: tshirt3 },
  { id: 35, name: "Kids T-Shirt 4", price: "₹299", category: "T-Shirt", img: tshirt4 },
  { id: 36, name: "Kids T-Shirt 5", price: "₹299", category: "T-Shirt", img: tshirt5 },
  { id: 37, name: "Kids T-Shirt 6", price: "₹299", category: "T-Shirt", img: tshirt6 },
  { id: 38, name: "Kids T-Shirt 7", price: "₹299", category: "T-Shirt", img: tshirt7 },
  { id: 39, name: "Kids T-Shirt 8", price: "₹299", category: "T-Shirt", img: tshirt8 },
  { id: 40, name: "Kids T-Shirt 9", price: "₹299", category: "T-Shirt", img: tshirt9 },
];

// CATEGORY LIST
const categories = ["All", ...new Set(products.map((p) => p.category))];

export default function KidsStyle() {
  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search);
  const urlCategory = query.get("category")?.trim();

  const [selectedCategory, setSelectedCategory] = useState(urlCategory || "All");
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (urlCategory) {
      setSelectedCategory(urlCategory);
    }
  }, [urlCategory]);

  const filtered =
    selectedCategory === "All"
      ? products
      : products.filter(
          (p) =>
            p.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  const handleCategory = (cat) => {
    setSelectedCategory(cat);
    setSelectedItem(null);
    navigate(`/kidsstyle${cat !== "All" ? `?category=${cat}` : ""}`);
  };

  const handleWhatsApp = (item) => {
    const phone = "919876543210";
    const message = `Hi, I want to buy:\n${item.name} - ${item.price}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`);
  };

  // 🔥 ===== DETAIL PAGE (SAME AS WOMEN) =====
  if (selectedItem) {
    return (
      <div className="bg-white min-h-screen pt-24 px-6 max-w-6xl mx-auto">

        {/* BACK */}
        <button
          onClick={() => setSelectedItem(null)}
          className="mb-6 text-sm underline"
        >
          ← Back
        </button>

        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT IMAGE */}
          <div className="p-4 bg-gray-100 flex flex-col items-center justify-center rounded-xl">
            <img
              src={selectedItem.img}
              className="w-full max-h-[400px] object-contain rounded-xl"
              alt={selectedItem.name}
            />

            <div className="flex gap-2 mt-4">
              <img src={selectedItem.img} className="w-16 h-16 object-cover rounded border" />
              <img src={selectedItem.img} className="w-16 h-16 object-cover rounded border" />
              <img src={selectedItem.img} className="w-16 h-16 object-cover rounded border" />
            </div>
          </div>

          {/* RIGHT DETAILS */}
          <div className="flex flex-col justify-center">

            <h2 className="text-2xl font-semibold mb-2">{selectedItem.name}</h2>
            <p className="text-xl font-bold mb-2">{selectedItem.price}</p>
            <p className="text-gray-500 mb-4">Premium quality product</p>

            {/* SIZE */}
            <p className="mb-2 font-medium">Select Size</p>
            <div className="flex gap-3 mb-6">
              {["S", "M", "L"].map((size) => (
                <button
                  key={size}
                  className="w-10 h-10 border rounded-full hover:bg-black hover:text-white transition"
                >
                  {size}
                </button>
              ))}
            </div>

            {/* BUTTON */}
            <button
              onClick={() => handleWhatsApp(selectedItem)}
              className="bg-green-500 text-white py-3 rounded-lg text-lg font-medium hover:bg-green-600 transition"
            >
              Order on WhatsApp
            </button>

            {/* FEATURES */}
            <div className="mt-6 text-sm text-gray-600 space-y-2">
              <p>🚚 Free delivery above ₹999</p>
              <p>🔁 Easy 7-day returns</p>
              <p>✔ Premium quality guaranteed</p>
            </div>

          </div>

        </div>
      </div>
    );
  }

  // 🔥 ===== NORMAL GRID (SAME AS BEFORE) =====
  return (
    <div className="bg-white min-h-screen pt-24">

      <h1 className="text-3xl font-bold text-center mb-8">
        Kids Collection {selectedCategory !== "All" && `- ${selectedCategory}`}
      </h1>

      <div className="flex justify-center gap-3 flex-wrap mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategory(cat)}
            className={`px-4 py-1 rounded-full border text-sm transition ${
              selectedCategory === cat
                ? "bg-black text-white"
                : "hover:bg-black hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="group cursor-pointer"
            onClick={() => setSelectedItem(item)}
          >
            <div className="relative overflow-hidden rounded-xl">

              <img
                src={item.img}
                className="w-full h-64 object-cover transition duration-700 group-hover:scale-110 group-hover:brightness-90"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition"></div>

              <div className="absolute bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition text-white">
                <p>{item.name}</p>
                <p>{item.price}</p>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}