// ==========================
// IMPORTS
// ==========================

const weddingImages = import.meta.glob(
  "../assets/weddingimg/*.{jpg,jpeg,png,JPG,PNG,JPEG}",
  {
    eager: true,
    import: "default",
  }
);

const westernImages = import.meta.glob(
  "../assets/westernimg/*.{jpg,jpeg,png,JPG,PNG,JPEG}",
  {
    eager: true,
    import: "default",
  }
);

const summerImages = import.meta.glob(
  "../assets/summerimg/*.{jpg,jpeg,png,JPG,PNG,JPEG}",
  {
    eager: true,
    import: "default",
  }
);

const navratriImages = import.meta.glob(
  "../assets/navratriimg/*.{jpg,jpeg,png,JPG,PNG,JPEG}",
  {
    eager: true,
    import: "default",
  }
);
const birthdayImages = import.meta.glob(
  "../assets/birthdayimg/*.{jpg,jpeg,png,JPG,PNG,JPEG}",
  {
    eager: true,
    import: "default",
  }
);

// ==========================
// HELPERS
// ==========================

const sortImages = (imgs) =>
  Object.entries(imgs)
    .sort(([a], [b]) => {
      const numA = parseInt(a.match(/\d+/)?.[0] || 0);
      const numB = parseInt(b.match(/\d+/)?.[0] || 0);
      return numA - numB;
    })
    .map(([, value]) => value);

// ==========================
// IMAGE ARRAYS
// ==========================

const wedding = sortImages(weddingImages);
const western = sortImages(westernImages);
const summer = sortImages(summerImages);
const navratri = sortImages(navratriImages);
const birthday = sortImages(birthdayImages);
// ==========================
// PRODUCTS DATA
// ==========================

const productsData = {

  //=================================wedding collection=========================================================
  Wedding: [
    {
      id: 1,
      title: "Blossom Fairy Cape Gown",
      price: "₹4,999",

      front: wedding[1],

      images: [
        wedding[1],
        wedding[0],
        wedding[2],
        wedding[3],
      ],

      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],

      productName: "Blossom Fairy Cape Gown",

      details:
        "A dreamy pastel fairy gown adorned with handcrafted 3D floral appliqués, delicate bead detailing, and a flowing cape. Designed to make every little princess shine at birthdays, photoshoots, and special celebrations.",

      specs: [
        "Colour: Lavender, Pastel Pink, Sky Blue, Lemon Yellow & Mint Green",
        "Fabric: Soft Net, Tulle & Satin Lining",
        "Style: 3D Floral Embellished Princess Gown with Attached Cape",
        "Vibe: Whimsical, Fairy-Tale & Magical",
      ],
    },

    {
      id: 2,
      title: "Royal Bloom Lehenga Set",
      price: "₹5,499",

      front: wedding[5],

      images: [
        wedding[4],
        wedding[5],
      ],

      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],

      details:
        "A charming festive lehenga set featuring intricate floral woven motifs, elegant gold detailing, and a statement bow-back blouse. Designed for little princesses to shine at weddings, celebrations, and special occasions.",

      specs: [
        "Colour: Rani Pink, Plum Purple & Gold",
        "Fabric: Premium Brocade Silk with Soft Lining",
        "Style: Floral Woven Lehenga with Sleeveless Blouse & Statement Bow Back",
        "Vibe: Royal, Festive & Elegant ✨👑",
      ],
    },
    {
      id: 3,
      title: "Lilac Grace Sharara Set",
      price: "₹4,999",

      front: wedding[7],

      images: [
        wedding[7],
        wedding[6],

      ],

      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],

      details:
        "A graceful lilac ethnic set featuring delicate embellishments, a stylish sleeveless crop top, and a flowy sharara silhouette. Perfect for festive celebrations, family gatherings, and elegant occasion wear.",

      specs: [
        "Colour: Dusty Lilac / Lavender Mauve",
        "Fabric: Premium Gaji Silk Blend with Soft Lining",
        "Style: Embellished Crop Top with Flared Sharara Set",
        "Vibe: Elegant, Sophisticated & Graceful ✨💜",
      ],
    },
    {
      id: 4,
      title: "Pink Petal Tutu Set",
      price: "₹3,200",

      front: wedding[8],

      images: [
        wedding[8],
        wedding[9],


      ],

      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],

      details:
        "A charming baby pink tutu set designed to make every little girl feel like a princess. Featuring a stylish crop top paired with a voluminous layered tulle skirt, this outfit is perfect for birthdays, celebrations, photoshoots, and special occasions.",

      specs: [
        "Colour: Baby Pink",
        "Fabric: Soft Net Tulle with Satin Lining",
        "Style: Crop Top with Layered Tutu Skirt Set",
        "Vibe: Sweet, Playful & Princess-Inspired ✨💖",
      ],
    },
    {
      id: 5,
      title: "Pearl Drape Sharara Set",
      price: "₹4,300",

      front: wedding[11],

      images: [
        wedding[11],
        wedding[10],
        wedding[12],
        wedding[13],
        wedding[14],

      ],

      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],

      details:
        "An elegant ivory sharara set adorned with delicate pearl embellishments and graceful drape detailing. Designed to bring timeless charm and sophistication, this outfit is perfect for weddings, festive occasions, family functions, and celebrations.",

      specs: [
        "Colour: Ivory White / Pearl White",
        "Fabric: Premium Georgette with Soft Satin Lining",
        "Style: Pearl Embellished Kurti with Flared Sharara & Drape Dupatta",
        "Vibe: Elegant, Royal & Timeless ✨🤍",
      ],
    },
    {
      id: 6,
      title: "Midnight Sparkle Gown",
      price: "₹5,000",

      front: wedding[15],

      images: [
        wedding[15],
        wedding[16],
        wedding[17],
        wedding[18],
      ],

      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],

      details:
        "A statement party gown crafted to make every little princess shine. Featuring dazzling gold sequin embellishments on the bodice and a flowy layered silhouette, this elegant gown is perfect for weddings, receptions, birthdays, and grand celebrations.",

      specs: [
        "Colour: Deep Wine / Burgundy with Gold Accents",
        "Fabric: Soft Organza with Satin Lining",
        "Style: Sleeveless Embellished Party Gown with Flared Skirt",
        "Vibe: Royal, Glamorous & Party-Ready ✨👑",
      ],
    },
   {
  id: 7,

  title: "Pink Embroidered Kids Lehenga Choli",

  price: "₹4,800",

  front: wedding[19],

  images: [
    wedding[19],
    wedding[20],
  ],

  sizes: [
    "0-6 months",
    "6-12 months",
    "1-2 years",
    "2-3 years",
    "3-4 years",
    "4-5 years",
    "5-6 years",
    "6-7 years",
    "7-8 years",
    "9-10 years",
    "11-12 years",
    "Customize size"
  ],

  details:

    "A charming pink ethnic lehenga choli designed for little girls. Featuring beautiful floral embroidery on the blouse, full sleeves with detailing, a matching flared lehenga skirt and a cute traditional look. Perfect for weddings, birthday parties, festive occasions and special celebrations.",


  specs: [

    "Colour: Bright Pink",

    "Fabric: Premium Net with Soft Inner Lining",

    "Style: Kids Lehenga Choli Set",

    "Design: Floral Embroidery with Flared Lehenga",

    "Sleeves: Full Sleeves with Embroidery Work",

    "Occasion: Wedding, Birthday, Festival & Party Wear",

    "Vibe: Cute, Traditional & Princess Look ✨👑"

  ],
},
    {
      id: 8,

      title: "Black Royal Kids Lehenga",

      price: "₹5,500",


      front: wedding[21],


      images: [
        wedding[21],
        wedding[22],
        wedding[23],
      ],


      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],



      details:

        "A stylish black ethnic lehenga set designed for little girls. Featuring beautiful golden embroidery work on the blouse, elegant flared skirt and premium festive look. Perfect for weddings, receptions, festivals and special occasions.",



      specs: [

        "Colour: Black with Golden Embroidery",

        "Fabric: Premium Fabric with Soft Lining",

        "Style: Kids Ethnic Lehenga Choli",

        "Design: Embroidered Crop Top with Flared Lehenga",

        "Occasion: Wedding, Festival & Party Wear",

        "Vibe: Royal, Elegant & Traditional ✨👑"

      ],
    },
    {
      id: 9,

      title: "Navy Charm Sharara Set",

      price: "₹3,500",


      front: wedding[24],


      images: [
        wedding[24],
        wedding[25],
      ],


      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],



      details:

        "A cute and stylish navy blue sharara set designed for little girls. Featuring a beautiful top with golden detailing and comfortable flared sharara pants, this outfit is perfect for festivals, birthdays, weddings and special occasions.",



      specs: [

        "Colour: Navy Blue & Pink",

        "Fabric: Soft Cotton Blend",

        "Style: Kids Sharara Set",

        "Design: Golden Detailing with Elegant Work",

        "Occasion: Casual, Party Wear & Festive Wear",

        "Vibe: Cute, Traditional & Comfortable ✨👑"

      ],
    },
    {
  id: 10,

  title: "Orange White Layered Anarkali Frock",

  price: "₹3,600",

  front: wedding[27],

  images: [
    wedding[27],
    wedding[26],
    wedding[28],
  ],

  sizes: [
    "0-6 months",
    "6-12 months",
    "1-2 years",
    "2-3 years",
    "3-4 years",
    "4-5 years",
    "5-6 years",
    "6-7 years",
    "7-8 years",
    "9-10 years",
    "11-12 years",
    "Customize size"
  ],

  details:

    "A pretty white and orange layered Anarkali frock designed for little girls. Featuring a beautiful orange embroidered yoke, puff sleeves, delicate detailing and a flowy multi-layer flare for a graceful festive look. Perfect for birthdays, weddings, festivals and special occasions.",


  specs: [

    "Colour: White & Orange",

    "Fabric: Premium Soft Fabric with Lining",

    "Style: Kids Anarkali Frock Dress",

    "Design: Embroidered Orange Yoke with Layered Flare",

    "Sleeves: Puff Sleeves with Detailing",

    "Occasion: Birthday, Wedding, Festival & Party Wear",

    "Vibe: Elegant, Cute & Traditional ✨👑"

  ],
},
    {
      id: 11,

      title: "Yellow Floral Princess Lehenga",

      price: "₹13,500",


      front: wedding[29],


      images: [
        wedding[29],
        wedding[31],
        wedding[32],
      ],


      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],


      details:

        "A beautiful yellow ethnic outfit for little girls featuring floral embroidery, elegant flare and a soft dupatta style. This charming dress is perfect for weddings, festivals, family functions and festive celebrations.",


      specs: [

        "Colour: Yellow with Floral Work",

        "Fabric: Premium Soft Fabric with Lining",

        "Style: Kids Lehenga Choli / Ethnic Dress",

        "Design: Floral Embroidery with Dupatta",

        "Occasion: Wedding, Festival & Party Wear",

        "Vibe: Bright, Traditional & Princess Look ✨👑"

      ],
    },
    {
  id: 12,

  title: "Ivory Layered Sharara Set",

  price: "₹4,500",

  front: wedding[33],

  images: [
    wedding[33],
    wedding[34],
  ],

  sizes: [
    "0-6 months",
    "6-12 months",
    "1-2 years",
    "2-3 years",
    "3-4 years",
    "4-5 years",
    "5-6 years",
    "6-7 years",
    "7-8 years",
    "9-10 years",
    "11-12 years",
    "Customize size"
  ],

  details:

    "A stylish ivory sharara set designed for little girls. Featuring a beautifully embroidered crop top, layered sharara pants with elegant flare and a matching dupatta drape. This graceful outfit gives a modern ethnic princess look, perfect for weddings, festivals and special occasions.",


  specs: [

    "Colour: Ivory / Beige",

    "Fabric: Premium Soft Fabric with Lining",

    "Style: Kids Sharara Set",

    "Design: Embroidered Top with Layered Sharara & Dupatta",

    "Occasion: Wedding, Festival, Birthday & Party Wear",

    "Vibe: Elegant, Modern & Princess Style ✨👑"

  ],
}
  ],


  //=================================western coolection=========================================================
  Western: [

    {
      id: 1,
      title: "Blossom Breeze High-Low Dress",
      price: "₹4,000",

      front: western[1],

      images: [
        western[1],
        western[2],
        western[0],
      ],

      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],

      details:
        "A graceful floral dress designed with a delicate printed bodice and a flowy high-low ruffle skirt. Perfect for birthdays, garden parties, vacations, and special occasions, this outfit brings effortless elegance and charm to every little fashionista.",

      specs: [
        "Colour: Mint Blue, Soft Pink, Lavender & Ivory White",
        "Fabric: Premium Satin Blend with Soft Crepe/Georgette Skirt",
        "Style: Floral Printed Spaghetti-Strap High-Low Dress with Cascading Ruffles",
        "Vibe: Fresh, Elegant & Fairy-Tale Inspired ✨🌸",
      ],
    },


    {
      id: 2,
      title: "Daisy Charm Co-Ord Set",
      price: "₹3,400",

      front: western[28],

      images: [
        western[28],
        western[27],
        western[29],
      ],

      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],

      details:
        "A chic and playful co-ord set featuring a scalloped-edge crop top and a matching A-line skirt adorned with delicate floral accents. Designed for stylish little trendsetters, this outfit is perfect for brunches, vacations, birthdays, and casual celebrations.",

      specs: [
        "Colour: Sage Green & Ivory White",
        "Fabric: Premium Cotton Blend",
        "Style: Scalloped Crop Top with Floral Appliqué A-Line Skirt",
        "Vibe: Fresh, Elegant & Playful ✨🌼",
      ],
    },

    {
      id: 3,
      title: "Cotton Candy Scallop Dress",
      price: "₹3,300",

      front: western[31],

      images: [
        western[30],
        western[31],
        western[32],
      ],

      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],

      details:
        "A sweet and sophisticated dress featuring a statement scalloped bib collar, contrast detailing, and a timeless A-line silhouette. Perfect for brunches, birthdays, playdates, and special outings, this dress blends comfort with effortless elegance.",

      specs: [
        "Colour: Blush Pink & Ivory White",
        "Fabric: Premium Cotton Blend",
        "Style: Sleeveless A-Line Dress with Scalloped Collar & Contrast Pocket Details",
        "Vibe: Cute, Elegant & Vintage-Inspired ✨🌸",
      ],
    },
    {
      id: 4,
      title: "Peach Blossom Elegance Set",
      price: "₹3,800",

      front: western[34],

      images: [
        western[33],
        western[34],
        western[35],

      ],
      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],

      details:
        "A graceful peach and ivory co-ord set featuring a statement layered-detail top and a chic A-line skirt with a delicate bow accent. Perfect for special occasions, celebrations, and picture-perfect moments.",

      specs: [
        "Colour: Soft Peach & Ivory White",
        "Fabric: Premium Organza Blend with Soft Lining",
        "Style: Layered Full-Sleeve Top with A-Line Skirt",
        "Vibe: Elegant, Princess-Inspired & Sophisticated ✨🎀🤍",
      ],
    },
    {
      id: 5,
      title: "Bluebell Denim Elegance Set",
      price: "₹3,500",

      front: western[37],

      images: [
        western[37],
        western[38],
        western[36],

      ],

      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],

      details:
        "A chic two-piece ensemble featuring a soft sky-blue puff sleeve shirt paired with a stylish denim mermaid skirt. Designed for little trendsetters, this outfit blends classic elegance with modern fashion, making it perfect for parties, photoshoots, and special outings.",

      specs: [
        "Colour: Sky Blue & Denim Blue",
        "Fabric: Premium Cotton Blend & Soft Denim",
        "Style: Puff Sleeve Shirt with Mermaid Flare Skirt Set",
        "Vibe: Trendy, Elegant & Fashion-Forward ✨💙",
      ],
    },
    {
      id: 6,
      title: "Candy Blossom Co-ord Set",
      price: "₹3,000",

      front: western[40],

      images: [
        western[40],
        western[39],
        western[41],
      ],

      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],

      details:
        "A charming pastel-inspired co-ord set designed to bring sweetness and style together. Featuring a sleeveless crossover crop top with delicate floral accents and a matching flared skirt with a statement bow, this outfit is perfect for birthdays, celebrations, and dreamy photoshoots.",

      specs: [
        "Colour: Pastel Pink, Mint Green & Soft Yellow",
        "Fabric: Premium Satin Blend",
        "Style: Sleeveless Crop Top with Flared Skirt Co-ord Set",
        "Vibe: Sweet, Playful & Princess-Inspired ✨🎀🌸",
      ],
    },
    {
      id: 7,
      title: "Mint Pearl Party Dress",
      price: "₹3,700",

      front: western[4],

      images: [
        western[6],
        western[4],
        western[3],
        western[5],

      ],

      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],

      details:
        "A graceful strapless party dress crafted in a dreamy mint hue with a subtle shimmer finish. Adorned with cute teddy embellishments on the neckline and a statement bow at the back, this elegant outfit is perfect for birthdays, celebrations, and special occasions.",

      specs: [
        "Colour: Mint Green",
        "Fabric: Premium Organza Shimmer with Soft Lining",
        "Style: Strapless A-Line Party Dress with Back Bow",
        "Vibe: Elegant, Charming & Princess-Inspired ✨🎀🌿",
      ],
    },
    {
      id: 8,
      title: "Black Swan High-Low Co-Ord Set",
      price: "₹3,500",

      front: western[43],

      images: [
        western[43],
        western[42],
        western[44],
      ],

      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],

      details:
        "A stylish fusion outfit featuring a beautifully embroidered white crop top paired with a dramatic black high-low skirt. Designed to make every little girl shine, this trendy co-ord set is perfect for parties, fashion events, birthdays, and special occasions.",

      specs: [
        "Colour: White & Black",
        "Fabric: Premium Cotton Blend Top with Soft Flowing Crepe Skirt",
        "Style: Embroidered Crop Top with High-Low Skirt",
        "Vibe: Trendy, Elegant & Fashion-Forward ✨🖤🤍",
      ],
    },

    {
      id: 9,
      title: "Blossom Charm Co-Ord Set",
      price: "₹3,400",

      front: western[8],

      images: [
        western[8],
        western[7],
        western[9],
      ],

      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],

      details:
        "A stylish white co-ord set featuring delicate 3D floral detailing and wide-leg pants. Designed for little fashionistas who love comfort with a touch of elegance.",

      specs: [
        "Colour: Classic White",
        "Fabric: Premium Cotton Blend",
        "Style: Floral Embellished Crop Top with Wide-Leg Pants",
        "Vibe: Elegant, Modern & Graceful ✨🤍🌼",
      ],
    },
    {
      id: 10,
      title: "Butterfly Bloom Co-Ord Set",
      price: "₹2,600",

      front: western[11],

      images: [
        western[10],
        western[11],
        western[12],
      ],

      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],

      details:
        "A trendy olive green co-ord set featuring beautiful butterfly appliqué detailing on the top and matching belted shorts. Perfect for summer outings, birthdays, vacations, and stylish everyday wear.",

      specs: [
        "Colour: Olive Green & Ivory",
        "Fabric: Premium Cotton Linen Blend",
        "Style: Butterfly Appliqué Co-Ord Set with Belted Shorts",
        "Vibe: Playful, Chic & Nature-Inspired 🦋✨💚",
      ],
    },
    {
      id: 11,
      title: "Elegant Petal Collar Skirt Set",
      price: "₹3,800",

      front: western[22],

      images: [
        western[22],
        western[21],
        western[23],
      ],

      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],

      details:
        "A charming beige co-ord set featuring a statement petal collar top paired with a beautifully detailed skirt. Perfect for birthdays, family gatherings, and stylish day outings.",

      specs: [
        "Colour: Soft Beige",
        "Fabric: Premium Cotton Blend",
        "Style: Petal Collar Top with Embellished A-Line Skirt",
        "Vibe: Elegant, Sophisticated & Timeless ✨🤍🌸",
      ],
    },
    {
      id: 12,
      title: "Snow Pearl Scallop Romper",
      price: "₹2,900",

      front: western[25],

      images: [
        western[25],
        western[24],
        western[26],
      ],

      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],

      details:
        "A graceful white romper featuring delicate scallop detailing and a chic neck-tie design. Perfect for birthday parties, special occasions, and elegant summer styling.",

      specs: [
        "Colour: Pure White",
        "Fabric: Premium Cotton Blend",
        "Style: Scallop Detail Halter Romper",
        "Vibe: Classy, Minimal & Princess-Inspired ✨🤍🎀",
      ],
    },
    {
      id: 13,
      title: "Champagne Grace Three-Piece Set",
      price: "₹3,000",

      front: western[51],

      images: [
        western[51],
        western[13],
      ],

      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],

      details:
        "A sophisticated champagne-toned co-ord set featuring a stylish crop top, elegant skirt, and delicate embroidered shrug. Designed for festive occasions, birthdays, and special celebrations with a graceful princess-inspired look.",

      specs: [
        "Colour: Champagne Beige",
        "Fabric: Satin Blend with Embroidered Cotton Shrug",
        "Style: 3-Piece Crop Top, Skirt & Long Shrug Set",
        "Vibe: Elegant, Festive & Royal Princess ✨👑🤍",
      ],
    },
    {
      id: 14,
      title: "Mauve Petal Ruffle Dress",
      price: "₹3,500",

      front: western[45],

      images: [
        western[45],
        western[46],
        western[47],

      ],

      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],

      details:
        "A dreamy mauve party dress adorned with cascading ruffle layers and a graceful halter neckline. Designed to create a fairy-tale look for birthdays, photoshoots, and special celebrations.",

      specs: [
        "Colour: Dusty Mauve Pink",
        "Fabric: Soft Chiffon with Premium Lining",
        "Style: Halter Neck Layered Ruffle Dress",
        "Vibe: Fairy Princess, Elegant & Whimsical ✨🌸👑",
      ],
    },
    {
      id: 15,
      title: "Ruby Pleated Grace Dress",
      price: "₹4,000",

      front: western[48],

      images: [
        western[49],
        western[48],
        western[50],
      ],

      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],

      details:
        "A stunning ruby red pleated dress designed with a graceful halter neckline and flowy silhouette. Perfect for festive occasions, parties, and special celebrations, offering effortless elegance and charm.",

      specs: [
        "Colour: Ruby Red",
        "Fabric: Soft Chiffon with Premium Lining",
        "Style: Halter Neck Pleated Maxi Dress",
        "Vibe: Elegant, Festive & Princess Chic ❤️✨👑",
      ],
    },
    {
      id: 16,
      title: "Berry Blossom Co-Ord Set",
      price: "₹2,700",

      front: western[15],

      images: [
        western[15],
        western[16],
        western[14],
      ],

      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],

      details:
        "A vibrant berry pink co-ord set featuring a chic crop top, stylish jacket, and embellished skirt with floral grape-inspired detailing. Designed to make every little fashionista stand out at parties and special occasions.",

      specs: [
        "Colour: Berry Pink",
        "Fabric: Premium Crepe Blend",
        "Style: 3-Piece Co-Ord Set with Jacket & Skirt",
        "Vibe: Bold, Trendy & Fashion-Forward 💖✨🍇",
      ],
    },
    {
      id: 17,
      title: "Midnight Bloom Statement Dress",
      price: "₹3,600",

      front: western[18],

      images: [
        western[18],
        western[19],
        western[17],
        western[20],
      ],
      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],

      details:
        "A stunning ivory party dress adorned with an oversized navy floral bow design, creating a bold and elegant fashion statement. Perfect for birthdays, weddings, and special celebrations where your little one deserves to shine.",

      specs: [
        "Colour: Ivory White & Midnight Navy",
        "Fabric: Premium Organza & Satin Blend",
        "Style: Designer Party Dress",
        "Vibe: Elegant, Luxe & Princess-Inspired ✨💙🤍",
      ],
    },
  ],

  //=================================summer collection=========================================================
  Summer: [
    {
      id: 1,
      title: "Olive Blossom Layered",
      price: "₹2,499",

      front: summer[1],

      images: [
        summer[1],
        summer[0],
        summer[2],
        summer[3],
      ],

      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],

      details:
        "A charming olive-green layered dress featuring delicate ruffle detailing and soft contrast accents. Designed for comfort and elegance, making it perfect for festive gatherings, photoshoots, and special occasions.",

      specs: [
        "Colour: Olive Green & Ivory White",
        "Fabric: Premium Cotton Blend",
        "Style: Layered A-Line Dress",
        "Vibe: Nature-Inspired, Elegant & Playful 🌿✨",
      ],
    },

    {
      id: 2,
      title: "Colorblock Ruffle Dress",
      price: "₹2,499",
      front: summer[5],
      images: [
        summer[5],
        summer[4],
        summer[6],
        summer[7],
        summer[8],
        summer[9]
      ],
      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],

      productName: "Colorblock Ruffle Dress",

      details:
        "This Fuchsia Pink & Lime Green Colorblock Dress brings bold summer energy with a playful ruffle collar, contrast colorblock hem, and a breezy sleeveless silhouette. Crafted in soft cotton for all-day comfort, it's perfect for birthdays, playdates, and sunny outings.",

      specs: [
        "Colour: Fuchsia Pink with Lime Green accents",
        "Fabric: 100% Pure Cotton",
        "Style: Sleeveless A-line dress with ruffle collar & colorblock design",
        "Vibe: Bold, bright, and full of sunshine"
      ]
    },
    {
      id: 3,
      title: "Teal Frill Top & Shorts ",
      price: "₹1,999",
      front: summer[11],
      images: [summer[11], summer[10], summer[12]],
      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],

      productName: "Teal Frill Top & Shorts Set",

      details:
        "Teal sleeveless V-neck top with frill hem and soft cotton shorts. Light, comfy and perfect for summer days.",

      specs: [
        "Colour: Teal & Off-White",
        "Fabric: 100% Cotton",
        "Style: Sleeveless top + shorts",
        "Vibe: Breezy & summer-ready ☀️"
      ]
    },
    {
      id: 4,
      title: "Lavender Colorblock Frill ",
      price: "₹2,299",
      front: summer[16],
      images: [
        summer[16],
        summer[15],
        summer[17],
        summer[18],


      ],
      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],

      productName: "Lavender & Beige Colorblock Frill Hem Dress",

      details:
        "Lavender sleeveless cotton A-line dress with beige frill hem and colorblock design. Soft, comfy and perfect for summer outings and parties.",

      specs: [
        "Colour: Lavender & Beige",
        "Fabric: 100% Cotton",
        "Style: Sleeveless A-line dress with frill hem",
        "Vibe: Soft, chic & sunny ☀️"
      ]
    },
    {
      id: 5,
      title: "Emerald Green Ruffle Dress",
      price: "₹2,299",
      front: summer[21],
      images: [
        summer[21],
        summer[22],
        summer[23],

      ],
      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],

      productName: "Emerald Green Ruffle Collar Dress",

      details:
        "Emerald green cotton A-line dress with white ruffle collar and full sleeves. Soft, flowy and perfect for festive and summer occasions.",

      specs: [
        "Colour: Emerald Green & White",
        "Fabric: 100% Cotton",
        "Style: Full sleeve A-line dress with ruffle collar",
        "Vibe: Sweet, classic & elegant 🌿"
      ]
    },
    {
      id: 6,
      title: "Royal Purple Pleated Dress",
      price: "₹2,299",
      front: summer[24],
      images: [
        summer[24],
        summer[25],
        summer[26],
        summer[27]
      ],
      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],

      productName: "Royal Purple Pleated Cotton Dress",

      details:
        "Royal purple sleeveless cotton A-line dress with pleated skirt and round neck. Soft, comfy and perfect for summer occasions.",

      specs: [
        "Colour: Royal Purple",
        "Fabric: 100% Cotton",
        "Style: Sleeveless A-line dress with pleated skirt",
        "Vibe: Bold, playful & summer-ready ☀️"
      ]
    },
    {
      id: 7,
      title: "Fuchsia Green Peter Pan Dress",
      price: "₹2,299",
      front: summer[30],

      images: [
        summer[30],
        summer[29],
        summer[31],
      ],
      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],

      productName: "Fuchsia & Forest Green Peter Pan Collar Dress",

      details:
        "Fuchsia and forest green colorblock cotton dress with white Peter Pan collar and full sleeves. Soft, stylish and perfect for festive or casual wear.",

      specs: [
        "Colour: Fuchsia Pink, Forest Green & White",
        "Fabric: 100% Cotton",
        "Style: Full sleeve A-line dress with Peter Pan collar",
        "Vibe: Bold, classic & playful 🌸"
      ]
    },
    {
      id: 8,
      title: "Ruby Pleated Charm Dress",
      price: "₹2,299",

      front: summer[34],

      images: [
        summer[34],
        summer[33],
        summer[35],
      ],

      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],

      details:
        "A timeless ruby pink dress featuring elegant pleated detailing and delicate contrast lace accents. Crafted for all-day comfort and graceful style, it's a perfect pick for festive occasions, family gatherings, and special celebrations.",

      specs: [
        "Colour: Ruby Pink / Deep Fuchsia",
        "Fabric: Soft Cotton Blend",
        "Style: Pleated A-Line Dress",
        "Vibe: Classic, Graceful & Festive ✨💖",
      ],
    },
    {
      id: 9,
      title: "Midnight Bloom Co-Ord Set",
      price: "₹2,299",

      front: summer[36],

      images: [
        summer[36],
        summer[37],
        summer[38],
      ],

      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],

      details:
        "A trendy navy blue co-ord set featuring a beautifully printed floral waistcoat paired with matching shorts. Designed for comfort and effortless style, this versatile outfit is perfect for casual outings, vacations, and special daytime occasions.",

      specs: [
        "Colour: Midnight Blue / Slate Navy",
        "Fabric: Premium Cotton Blend",
        "Style: Floral Waistcoat & Shorts Co-Ord Set",
        "Vibe: Smart, Stylish & Playful ✨💙",
      ],
    },
  ],


  //=================================navratri coolection=========================================================
  "Navratri Collection": [
    {
      id: 1,
      title: "Rangriti Mirror Charm Lehenga Set",
      price: "₹3,200",

      front: navratri[1],

      images: [
        navratri[1],
        navratri[0],
        navratri[2],
      ],

      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],

      details:
        "A stunning ethnic lehenga set featuring a beautifully embroidered mirror-work blouse paired with a unique dual-tone black and ivory flared skirt. Designed with traditional craftsmanship and contemporary elegance, it's a perfect choice for Navratri, festive celebrations, and cultural events.",

      specs: [
        "Colour: Ivory White & Classic Black",
        "Fabric: Premium Cotton Blend",
        "Style: Mirror Work Lehenga Choli Set",
        "Vibe: Traditional, Vibrant & Festive ✨🖤🤍",
      ],
    },

    {
      id: 2,
      title: "Pista Mirror Glow Lehenga Set",
      price: "₹3,500",

      front: navratri[27],

      images: [
        navratri[27],
        navratri[29],
        navratri[28],
        navratri[30],
      ],

      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],

      details:
        "A graceful pista green lehenga set adorned with vibrant mirror-work embroidery and traditional coin detailing. Designed to capture the spirit of festive celebrations, this outfit blends ethnic charm with playful elegance for your little princess.",

      specs: [
        "Colour: Pista Green / Sage Green",
        "Fabric: Soft Georgette Blend",
        "Style: Mirror Work Lehenga Choli Set",
        "Vibe: Traditional, Royal & Festive ✨💚",
      ],
    },

    {
      id: 3,
      title: "Little Kutch Heritage Co-Ord Set",
      price: "₹3,800",
      front: navratri[32],
      images: [navratri[32], navratri[31], navratri[33],],
      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],
    },
    {
      id: 4,
      title: "Rang Tarang Festive Lehenga Set",
      price: "₹3,700",

      front: navratri[4],

      images: [
        navratri[4],
        navratri[3],
        navratri[6],
        navratri[5],
      ],

      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],

      details:
        "A charming girls' ethnic outfit designed with intricate multicolour embroidery and delicate shell detailing, paired with a gracefully flared lehenga for an elegant festive look. Perfect for Navratri, family gatherings, and special occasions, this outfit adds a graceful and stylish touch to every little fashionista's wardrobe.",

      specs: [
        "Colour: Ivory green",
        "Fabric: Premium Cotton Blend",
        "Style: Embroidered Lehenga Choli Set",
        "Vibe: Elegant, Traditional & Festive ✨🤍🌈",
      ],
    },
    {
      id: 5,
      title: "Shwetika Heritage Lehenga Set",
      price: "₹4,000",

      front: navratri[7],

      images: [
        navratri[8],
        navratri[7],
        navratri[9],
        navratri[10],
      ],

      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],

      details:
        "A charming girls' ethnic outfit designed with intricate multicolour embroidery and delicate shell detailing, paired with a gracefully flared lehenga for an elegant festive look. Perfect for Navratri, family gatherings, and special occasions, this outfit adds a graceful and stylish touch to every little fashionista's wardrobe.",

      specs: [
        "Colour: Ivory White",
        "Fabric: Premium Cotton Blend",
        "Style: Embroidered Lehenga Choli Set",
        "Vibe: Elegant, Traditional & Festive ✨🤍🌈",
      ],
    },
    {
      id: 6,
      title: "Crimson Grace Sharara Set",
      price: "₹3,200",

      front: navratri[11],

      images: [
        navratri[11],
        navratri[12],
        navratri[13],
      ],

      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],

      details:
        "A charming girls' ethnic outfit designed with elegant golden embellishments and a beautifully flared sharara silhouette. Perfect for birthdays, family gatherings, festive celebrations, and special occasions, this outfit adds a graceful and stylish touch to every little fashionista's wardrobe.",

      specs: [
        "Colour: Crimson Red",
        "Fabric: Premium Cotton Blend",
        "Style: Embellished Kurti Sharara Set",
        "Vibe: Elegant, Royal & Festive ✨❤️👑",
      ],
    },
    {
      id: 7,
      title: "Sky Blossom Tiered Gown Set",
      price: "₹4,200",

      front: navratri[14],

      images: [
        navratri[14],
        navratri[15],
        navratri[16],
      ],

      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],

      details:
        "A dreamy and elegant girls' outfit featuring delicate floral embroidery, playful bead accents, and a beautifully layered flared silhouette. Crafted to make every little princess shine, this charming ensemble is perfect for birthdays, festive celebrations, family gatherings, and special occasions with a touch of grace and whimsy.",

      specs: [
        "Colour: Powder Blue",
        "Fabric: Premium Georgette Blend",
        "Style: Embroidered Layered Gown Set",
        "Vibe: Graceful, Dreamy & Princess-Inspired ✨💙👑",
      ],
    },
    {
      id: 8,
      title: "Blooming Twilight Palazzo Set",
      price: "₹3,000",

      front: navratri[17],

      images: [
        navratri[17],
        navratri[18],
        navratri[19],
        navratri[20],
      ],

      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],

      details:
        "A graceful girls' ethnic ensemble featuring a beautifully embroidered floral top paired with shimmering wide-leg palazzo pants. Adorned with delicate tassel detailing and elegant embellishments, this outfit brings together charm and sophistication, making it perfect for festive celebrations, weddings, birthdays, and special occasions.",

      specs: [
        "Colour: Ivory White & Deep Plum",
        "Fabric: Premium Georgette Blend",
        "Style: Floral Embroidered Top with Flared Palazzo Set",
        "Vibe: Chic, Elegant & Festive ✨💜🌸👑",
      ],
    },
    {
      id: 9,
      title: "Mint Petal Heritage Gown",
      price: "₹4,000",

      front: navratri[21],

      images: [
        navratri[21],
        navratri[22],
        navratri[23],
      ],
      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],

      details:
        "A delightful girls' ethnic gown adorned with vibrant floral motifs, intricate mirror-inspired accents, and elegant tassel details. Featuring a beautifully flared silhouette and artistic panel design, this outfit blends traditional charm with contemporary grace, making it perfect for festive celebrations, weddings, birthdays, and special occasions.",

      specs: [
        "Colour: Mint Green & Soft Beige",
        "Fabric: Premium Cotton Silk Blend",
        "Style: Embroidered Flared Ethnic Gown",
        "Vibe: Fresh, Graceful & Festive ✨🌿🌸👑",
      ],
    }
  ],
  // ==============================================birthday collection======================================================

  "Birthday Collection": [
    {
      id: 1,
      title: "Sapphire Grace High-Low Dress",
      price: "₹4,100",

      front: birthday[0],

      images: [
        birthday[0],
        birthday[1],
      ],
      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],

      details:
        "A gorgeous girls' party dress in a striking royal blue shade. It features a stylish one-shoulder pleated bodice accented with a sparkling silver waistband, leading into a voluminous high-low tulle skirt. Beautifully detailed with tiered ruffles and delicate pearls at the hem, this enchanting gown is perfect for birthdays, evening parties, and festive celebrations.",

      specs: [
        "Colour: Royal Blue",
        "Fabric: Premium Tulle & Soft Satin",
        "Style: One-Shoulder High-Low Ruffled Gown",
        "Vibe: Dreamy, Princess & Magical ✨💙👑",
      ],
    },
    {
      id: 2,
      title: "Angelic White & Fuchsia Ruffled Gown",
      price: "₹4,000",

      front: birthday[23],

      images: [
        birthday[23],
        birthday[24],
      ],
      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],

      details:
        "A breathtaking girls' party frock featuring a clean, elegant white one-shoulder bodice and a voluminous tulle skirt. The highlight of this outfit is the striking dual-layer of heavy, fluffy fuchsia pink ruffles at the hem that gives it a beautiful, dramatic bounce. Perfect for birthdays, themed parties, and festive celebrations, this dress will make your little princess look like a real-life doll.",

      specs: [
        "Colour: Pure White & Fuchsia Pink",
        "Fabric: High-Quality Tulle & Comfortable Satin",
        "Style: Asymmetrical One-Shoulder Ruffled Dress",
        "Vibe: Doll-like, Festive & Magical ✨💖👑",
      ],
    },
    {
      id: 3,
      title: "Sunshine Glow Layered Lehenga Set",
      price: "₹4,200",

      front: birthday[25],

      images: [
        birthday[25],
        birthday[26],
      ],

      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],

      details:
        "A vibrant and cheerful girls' ethnic co-ord set in a bright sunshine yellow hue. It features a stylish strapless crop top adorned with delicate silver embellishments, beautifully paired with a voluminous, multi-layered tulle skirt with a playful asymmetrical hem. Perfect for Haldi ceremonies, festive occasions, and daytime celebrations, this outfit brings a burst of joy and modern traditional charm to your little one's look.",

      specs: [
        "Colour: Sunshine Yellow",
        "Fabric: Premium Tulle & Comfortable Inner Lining",
        "Style: Strapless Embellished Top with Asymmetrical Layered Skirt",
        "Vibe: Cheerful, Vibrant & Festive ✨💛🌼",
      ],
    },
    {
      id: 4,
      title: "Enchanted Pearl Pastel Gown",
      price: "₹5,000",

      front: birthday[28],

      images: [
        birthday[27],
        birthday[28],
      ],

      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],

      details:
        "A mesmerizing girls' fairytale party gown featuring a stunning blend of pastel hues. The bodice showcases a lavender panel detailed with vertical rows of delicate pearls, framed by a sheer mint-blue neckline. Flowing into a voluminous mint-blue tulle skirt scattered with subtle pearl embellishments, this floor-length dress is perfect for birthdays, weddings, and premium festive celebrations.",

      specs: [
        "Colour: Mint Blue & Pastel Lavender",
        "Fabric: Premium Tulle, Sheer Net & Comfortable Satin",
        "Style: Pearl-Embellished Floor-Length Princess Gown",
        "Vibe: Fairytale, Regal & Magical ✨💜🩵👑",
      ],
    },
    {
      id: 5,
      title: "Rainbow Dreams Tiered Tulle Dress",
      price: "₹5,000",

      front: birthday[29],

      images: [
        birthday[30],
        birthday[29],
      ],

      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],

      details:
        "A vibrant and whimsical girls' party frock featuring a spectacular multi-colored rainbow design. The dress showcases a beautifully pleated tulle bodice with vertical color panels, accented by a charming braided waistband. It cascades into a multi-tiered skirt with layers of fluffy tulle that create an enchanting, voluminous bounce. Perfect for birthdays, rainbow-themed parties, and festive celebrations.",

      specs: [
        "Colour: Multi-colour Rainbow (Pink, Yellow, Blue, Sage Green & Purple)",
        "Fabric: Premium Soft Tulle & Breathable Lining",
        "Style: Multi-Tiered Ruffled Rainbow Frock",
        "Vibe: Playful, Whimsical & Magical ✨🌈💖👑",
      ],
    },
    {
      id: 6,
      title: "Blush Shimmer Princess Dress",
      price: "₹3,100",

      front: birthday[31],

      images: [
        birthday[31],
        birthday[32],
      ],

      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],

      details:
        "A charming and elegant girls' party frock in a soft blush pink hue. It features a classic wide neckline, a smooth fitted bodice, and dramatic voluminous puff shoulders that extend into elegant sleeves. Crafted from premium fabric with a subtle metallic sheen, the dress flows into a beautifully structured flared skirt that catches the light gracefully. Perfect for birthdays, daytime gatherings, and premium festive celebrations.",

      specs: [
        "Colour: Blush Pink / Pastel Pink",
        "Fabric: Premium Shimmer Organza & Soft Breathable Lining",
        "Style: Statement Puff-Sleeve Flared Party Dress",
        "Vibe: Elegant, Classy & Princess-like ✨🌸👑",
      ],
    },
    {
      id: 7,
      title: "Amber Glow Pearl Ruffled Dress",
      price: "₹4,000",

      front: birthday[3],

      images: [
        birthday[3],
        birthday[4],
        birthday[2],
      ],

      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],

      details:
        "A striking and vibrant girls' party frock in a bold tangerine orange shade. The dress features a magnificent ultra-fluffy ruffled tulle bodice that makes a dramatic statement, flowing into a voluminous mesh skirt delicately scattered with beautiful white pearls. Perfect for birthdays, festive celebrations, and special daytime events.",

      specs: [
        "Colour: Vibrant Orange / Tangerine",
        "Fabric: Premium Tulle & Comfortable Breathable Lining",
        "Style: Heavy Ruffled Bodice Pearl-Detailed Frock",
        "Vibe: Bold, Cheerful & Playful ✨🧡👑",
      ],
    },
    {
      id: 8,
      title: "Midnight Diva Sequin Gown",
      price: "₹3,200",
      front: birthday[5],
      images: [birthday[5], birthday[6]],
      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],
    },
    {
      id: 9,
      title: "Royal Sapphire Embroidered Frock",
      price: "₹5,500",

      front: birthday[9],

      images: [
        birthday[9],
        birthday[10],
        birthday[11],
        birthday[12],
      ],

      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],

      details:
        "A classic and sophisticated girls' party dress crafted from rich navy blue satin. It features a clean round neckline and full sleeves, beautifully enhanced by intricate golden and red floral embroidery cascading across the bodice and structured pleated skirt. A vibrant red satin belt with an embellished bow cinches the waist to add a striking contrast. Perfect for birthdays, festive celebrations, and premium family gatherings.",

      specs: [
        "Colour: Royal Navy Blue & Radiant Red",
        "Fabric: Premium Sheen Satin & Comfortable Lining",
        "Style: Full-Sleeve Embroidered A-Line Frock with Bow Belt",
        "Vibe: Royal, Timeless & Festive ✨💙❤️👑",
      ],
    },
    {
      id: 10,
      title: "Blush Pearl Shimmer Gown",
      price: "₹6,000",

      front: birthday[13],

      images: [
        birthday[13],
        birthday[14],
      ],

      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],

      details:
        "A breathtaking and elegant girls' party gown in a sophisticated dusty rose hue. This fairytale ensemble features a pleated one-shoulder bodice delicately outlined with fine pearl detailing and accented by a slender shimmering waistband. The voluminous tulle skirt flows gracefully with an enchanting glittery sheen, finished with an extra-fluffy ruffled border at the hem for a dramatic flair. Perfect for milestone birthdays, weddings, and premium celebrations.",

      specs: [
        "Colour: Dusty Rose / Blush Pink",
        "Fabric: Premium Shimmer Tulle & Soft Satin Lining",
        "Style: One-Shoulder Pearl-Accented Ruffled Gown",
        "Vibe: Fairytale, Elegant & Princess-like ✨🌸👑",
      ],
    }, {
      id: 11,
      title: "Champagne Gold Mermaid Lehenga Set",
      price: "₹5,500",

      front: birthday[15],

      images: [
        birthday[15],
        birthday[16],
      ],

      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],

      details:
        "A spectacular girls' ethnic co-ord set in a gorgeous champagne gold hue. This premium ensemble features a stylish one-shoulder crop top heavily embellished with intricate floral patches and delicate embroidery. It is paired with a matching fitted skirt that flows into a voluminous mermaid-style flared bottom with draped ruffles. Ideal for grand weddings, reception parties, and premium festive occasions.",

      specs: [
        "Colour: Champagne Gold / Ivory Cream",
        "Fabric: Premium Textured Organza & Embroidered Silk Blend",
        "Style: One-Shoulder Crop Top with Mermaid-Cut Lehenga Skirt",
        "Vibe: Luxury, Royal & Haute-Couture ✨💛👑",
      ],
    },
    {
      id: 12,
      title: "Tangerine Blossom Fairytale Gown",
      price: "₹8,600",

      front: birthday[17],

      images: [
        birthday[17],
        birthday[18],
      ],

      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],

      details:
        "A breathtakingly beautiful girls' floor-length gown in a vibrant tangerine orange shade. This premium masterpiece showcases a classic square neckline with floral accents on the shoulder straps, leading into a heavily structured flared skirt. The highlight is a cascade of multi-colored 3D floral appliqués and delicate pearls flowing down the front, beautifully cinched with a floral waistband. Perfect for milestone birthdays, weddings, and premium festive events.",

      specs: [
        "Colour: Vibrant Tangerine Orange",
        "Fabric: Premium Structured Satin & Comfortable Breathable Lining",
        "Style: 3D Floral Appliqué Floor-Length Ball Gown",
        "Vibe: Whimsical, Luxurious & Fairytale ✨🧡🌸👑",
      ],
    },
    {
      id: 13,
      title: "Royal Purple Blossom & Butterfly Ball Gown",
      price: "₹8,600",

      front: birthday[19],

      images: [
        birthday[19],
        birthday[20],
        birthday[21],
        birthday[22],
      ],

      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],

      details:
        "A breathtaking and premium girls' floor-length ball gown in a rich royal purple shade. This exquisite masterpiece showcases statement butterfly-shaped appliqués on the shoulder straps, leading into a heavily structured pleated skirt. The gown is adorned with a whimsical trail of multi-colored 3D floral appliqués, intricate vine detailing, and scattered golden beads that catch the light elegantly. Perfect for milestone birthdays, grand weddings, and premium festive events.",

      specs: [
        "Colour: Royal Purple / Deep Violet",
        "Fabric: Premium Structured Satin & Soft Breathable Lining",
        "Style: 3D Floral & Butterfly Appliqué Paneled Ball Gown",
        "Vibe: Fairytale, Majestic & Luxurious ✨💜🦋🌸👑",
      ],
    },
    {
      id: 14,
      title: "Angelic Blush Tiered Tulle Gown",
      price: "₹4,700",

      front: birthday[7],

      images: [
        birthday[7],
        birthday[8],
      ],

      sizes: [
        "0-6 months",
        "6-12 months",
        "1-2 years",
        "2-3 years",
        "3-4 years",
        "4-5 years",
        "5-6 years",
        "6-7 years",
        "7-8 years",
        "9-10 years",
        "11-12 years",
        "Customize size"
      ],

      details:
        "A dreamily soft and enchanting girls' floor-length party gown in a delicate blush pink hue. It features a gracefully rounded neckline and an exquisitely hand-embroidered bodice adorned with pastel floral patterns and subtle beadwork. The dress has ruffled tulle cap sleeves and flows into a multi-layered tiered tulle skirt that creates a fairytale silhouette. Ideal for birthdays, weddings, fairy-themed parties, and special family gatherings.",

      specs: [
        "Colour: Baby Pink / Blush Pink",
        "Fabric: Premium Soft Tulle & Breathable Comfort Lining",
        "Style: Hand-Embroidered Bodice Tiered Tulle Gown with Ruffled Sleeves",
        "Vibe: Whimsical, Angelic & Dreamy ✨🌸👑",
      ],
    }
  ]


};

export default productsData;