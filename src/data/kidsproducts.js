const kidsImages = import.meta.glob(
  "../assets/kidscollection/*.{jpg,jpeg,png,JPG,PNG,JPEG}",
  {
    eager: true,
    import: "default",
  }
);

// ==========================
// NATURAL SORT (SAFE ORDER)
// ==========================

const sortImages = (imgs) =>
  Object.entries(imgs)
    .sort(([a], [b]) => {
      const numA = Number(a.match(/\d+/)?.[0] || 0);
      const numB = Number(b.match(/\d+/)?.[0] || 0);
      return numA - numB;
    })
    .map(([, value]) => value);

// ==========================
// IMAGE ARRAY
// ==========================

const kids = sortImages(kidsImages);

// safe helper (prevents undefined crash)
const safe = (i) => kids[i] || kids[0];

// ==========================
// PRODUCTS DATA
// ==========================

const kidsProducts = {
  Kids: [
  
    {
      id: 2,
      name: "Casual Girls Outfit",
      price: "₹1,999",
      category: "girls",
      description:
        "Comfortable cotton outfit for daily wear.",
      front: safe(5),
      images: [safe(5), safe(4), safe(6), safe(7)],
      sizes: ["18", "20", "22", "24"],
    },

    {
      id: 3,
      name: "Party Wear Kids Dress",
      price: "₹2,499",
      category: "girls",
      description:
        "Elegant party wear dress for special occasions.",
      front: safe(9),
      images: [ safe(9), safe(8), safe(10)],
      sizes: ["20", "22", "24", "26"],
    },
     {
      id: 4,
      name: "Party Wear Kids Dress",
      price: "₹2,499",
      category: "girls",
      description:
        "Elegant party wear dress for special occasions.",
      front: safe(12),
      images: [ safe(11), safe(12)],
      sizes: ["20", "22", "24", "26"],
    },
     {
      id: 5,
      name: "Party Wear Kids Dress",
      price: "₹3,000",
      category: "girls",
      description:
        "Elegant party wear dress for special occasions.",
      front: safe(14),
      images: [ safe(14), safe(13), safe(15) ],
      sizes: ["20", "22", "24", "26"],
    },
     {
      id: 6,
      name: "Party Wear Kids Dress",
      price: "₹3,500",
      category: "girls",
      description:
        "Elegant party wear dress for special occasions.",
      front: safe(17),
      images: [ safe(17), safe(16), safe(18) ],
      sizes: ["20", "22", "24", "26"],
    },
     {
      id: 7,
      name: "Party Wear Kids Dress",
      price: "₹2,500",
      category: "girls",
      description:
        "Elegant party wear dress for special occasions.",
      front: safe(20),
      images: [ safe(20), safe(19), safe(21) ],
      sizes: ["20", "22", "24", "26"],
    },
     {
      id: 8,
      name: "Party Wear Kids Dress",
      price: "₹2,499",
      category: "girls",
      description:
        "Elegant party wear dress for special occasions.",
      front: safe(23),
      images: [ safe(23), safe(22), safe(24) ],
      sizes: ["20", "22", "24", "26"],
    },
     {
      id: 9,
      name: "Party Wear Kids Dress",
      price: "₹3,800",
      category: "girls",
      description:
        "Elegant party wear dress for special occasions.",
      front: safe(26),
      images: [ safe(26), safe(25), safe(27), safe(28) ],
      sizes: ["20", "22", "24", "26"],
    },
    {
      id: 10,
      name: "Party Wear Kids Dress",
      price: "₹3,000",
      category: "girls",
      description:
        "Elegant party wear dress for special occasions.",
      front: safe(30),
      images: [ safe(30), safe(29), safe(31) ],
      sizes: ["20", "22", "24", "26"],
    },
     {
      id: 11,
      name: "Party Wear Kids Dress",
      price: "₹2,499",
      category: "girls",
      description:
        "Elegant party wear dress for special occasions.",
      front: safe(33),
      images: [ safe(33), safe(32), safe(34) ],
      sizes: ["20", "22", "24", "26"],
    },
     {
      id: 12,
      name: "Party Wear Kids Dress",
      price: "₹2,499",
      category: "girls",
      description:
        "Elegant party wear dress for special occasions.",
      front: safe(36),
      images: [ safe(36), safe(35), safe(37) ],
      sizes: ["20", "22", "24", "26"],
    },
     {
      id: 13,
      name: "Party Wear Kids Dress",
      price: "₹2,499",
      category: "girls",
      description:
        "Elegant party wear dress for special occasions.",
      front: safe(39),
      images: [ safe(39), safe(38), safe(40) ],
      sizes: ["20", "22", "24", "26"],
    },
     {
      id: 14,
      name: "Party Wear Kids Dress",
      price: "₹3,200",
      category: "girls",
      description:
        "Elegant party wear dress for special occasions.",
      front: safe(42),
      images: [ safe(42), safe(41), safe(43) ],
      sizes: ["20", "22", "24", "26"],
    },
      {
      id: 15,
      name: "Party Wear Kids Dress",
      price: "₹3,000",
      category: "girls",
      description:
        "Elegant party wear dress for special occasions.",
      front: safe(45),
      images: [ safe(45), safe(44), safe(46) ],
      sizes: ["20", "22", "24", "26"],
    },
    {
      id: 16,
      name: "Party Wear Kids Dress",
      price: "₹2,499",
      category: "girls",    
      description:
        "Elegant party wear dress for special occasions.",
      front: safe(48),
      images: [ safe(48), safe(47), safe(49) ],
      sizes: ["20", "22", "24", "26"],
    },
    {
      id: 17,
      name: "Party Wear Kids Dress",
      price: "₹2,499",
      category: "boys",
      description:
        "Elegant party wear dress for special occasions.",
      front: safe(51),
      images: [ safe(51), safe(50), safe(52) ],
      sizes: ["20", "22", "24", "26"],
    },
      {
      id: 18,
      name: "Party Wear Kids Dress",
      price: "₹2,499",
      category: "boys",
      description:
        "Elegant party wear dress for special occasions.",    
      front: safe(54),
      images: [ safe(54), safe(53), safe(55) ],
      sizes: ["20", "22", "24", "26"],
      },
      {
      id: 19,
      name: "Party Wear Kids Dress",
      price: "₹2,499",
      category: "boys",
      description:
        "Elegant party wear dress for special occasions.",
      front: safe(57),
      images: [ safe(57), safe(56), safe(58) ],
      sizes: ["20", "22", "24", "26"],
      },
      {
      id: 20,
      name: "Party Wear Kids Dress",
      price: "₹2,499",
      category: "boys",
      description:
        "Elegant party wear dress for special occasions.",
      front: safe(60),
      images: [ safe(60), safe(59), safe(61) ],
      sizes: ["20", "22", "24", "26"],
      }
  ],
};

export default kidsProducts;