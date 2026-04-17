import { useState } from "react";

// IMAGES
import top1 from "../assets/SHOPIMG/TOPS/top1.jpg";
import top2 from "../assets/SHOPIMG/TOPS/top2.jpg";
import top3 from "../assets/SHOPIMG/TOPS/top3.jpg";
import top4 from "../assets/SHOPIMG/TOPS/top4.jpg";

export default function Explore() {
  const [category, setCategory] = useState("all");
  const [style, setStyle] = useState("all");
  const [age, setAge] = useState("all");
  const [price, setPrice] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [wishlist, setWishlist] = useState([]);

  const products = [
    { id: 1, name: "Casual Shirt", price: 999, image: top1, category: "men", style: "casual", age: "adult" },
    { id: 2, name: "Summer Dress", price: 1299, image: top2, category: "women", style: "summer", age: "adult" },
    { id: 3, name: "Party Wear", price: 1999, image: top3, category: "teen", style: "party", age: "teen" },
    { id: 4, name: "Kids T-shirt", price: 699, image: top4, category: "kids", style: "casual", age: "kids" },
    { id: 5, name: "Formal Shirt", price: 1499, image: top1, category: "men", style: "formal", age: "adult" },
    { id: 6, name: "Cocktail Dress", price: 2499, image: top2, category: "women", style: "party", age: "adult" },
  ];

  const filtered = products.filter(p =>
    (category === "all" || p.category === category) &&
    (style === "all" || p.style === style) &&
    (age === "all" || p.age === age) &&
    (price === "all" ||
      (price === "low" && p.price < 1000) ||
      (price === "mid" && p.price <= 1500) ||
      (price === "high" && p.price > 1500))
  );

  const toggleWishlist = (id) => {
    setWishlist(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const handleWhatsApp = (p) => {
    const phoneNumber = "91XXXXXXXXXX";
    const message = `🛍️ *New Order Request*\n\n📦 Product: ${p.name}\n💰 Price: ₹${p.price}\n\n👤 Name:\n📍 Address:\n\nPlease confirm 🙏`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-12">

      {/* 💎 FILTER BAR */}
      <div className="sticky top-20 z-30 bg-white/80 backdrop-blur-md border-b px-6 md:px-12 py-4">
        <div className="flex flex-wrap gap-4 justify-center">

          {/* CATEGORY */}
          <select value={category} onChange={(e) => setCategory(e.target.value)}
            className="px-5 py-2 text-sm rounded-full border border-gray-300 bg-white shadow-sm hover:shadow-md">
            <option value="all">All Categories</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
            <option value="teen">Teen</option>
          </select>

          {/* STYLE */}
          <select value={style} onChange={(e) => setStyle(e.target.value)}
            className="px-5 py-2 text-sm rounded-full border border-gray-300 bg-white shadow-sm hover:shadow-md">
            <option value="all">All Styles</option>
            <option value="casual">Casual</option>
            <option value="party">Party</option>
            <option value="summer">Summer</option>
            <option value="formal">Formal</option>
          </select>

          {/* AGE */}
          <select value={age} onChange={(e) => setAge(e.target.value)}
            className="px-5 py-2 text-sm rounded-full border border-gray-300 bg-white shadow-sm hover:shadow-md">
            <option value="all">All Ages</option>
            <option value="kids">Kids</option>
            <option value="teen">Teen</option>
            <option value="adult">Adult</option>
          </select>

          {/* PRICE */}
          <select value={price} onChange={(e) => setPrice(e.target.value)}
            className="px-5 py-2 text-sm rounded-full border border-gray-300 bg-white shadow-sm hover:shadow-md">
            <option value="all">All Prices</option>
            <option value="low">&lt;1000</option>
            <option value="mid">1000-1500</option>
            <option value="high">&gt;1500</option>
          </select>

        </div>
      </div>

      {/* 💎 PRODUCT GRID */}
      <div className="px-6 md:px-12 mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filtered.map(p => (
          <div key={p.id}
            className="relative group overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition duration-300">

            <img src={p.image} alt={p.name}
              className="w-full h-96 object-cover group-hover:scale-105 transition duration-500" />

            {/* ❤️ WISHLIST */}
            <button onClick={() => toggleWishlist(p.id)}
              className="absolute top-4 right-4 text-2xl z-10">
              {wishlist.includes(p.id) ? "❤️" : "🤍"}
            </button>

            {/* HOVER */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-6 text-white">

              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="text-lg">₹{p.price}</p>

              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => setSelectedProduct(p)}
                  className="flex-1 bg-white text-black py-2 rounded-full text-sm hover:bg-gray-200">
                  Quick View
                </button>

                <button
                  onClick={() => handleWhatsApp(p)}
                  className="flex-1 bg-yellow-500 text-white py-2 rounded-full text-sm hover:bg-yellow-600">
                  WhatsApp
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* 💎 MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4">
          <div className="bg-white p-6 rounded-3xl w-full max-w-md shadow-2xl animate-modalShow">

            <img src={selectedProduct.image}
              className="w-full h-72 object-cover rounded-2xl mb-4" />

            <h2 className="text-2xl font-bold mb-2">
              {selectedProduct.name}
            </h2>

            <p className="text-lg mb-6">
              ₹{selectedProduct.price}
            </p>

            <button
              onClick={() => handleWhatsApp(selectedProduct)}
              className="bg-yellow-500 text-white w-full py-2 rounded-full mb-2">
              Order on WhatsApp
            </button>

            <button
              onClick={() => setSelectedProduct(null)}
              className="w-full border py-2 rounded-full">
              Close
            </button>

          </div>

          <style>
            {`
              @keyframes modalShow {
                0% { opacity: 0; transform: scale(0.9); }
                100% { opacity: 1; transform: scale(1); }
              }
              .animate-modalShow {
                animation: modalShow 0.3s ease-out;
              }
            `}
          </style>
        </div>
      )}

    </div>
  );
}