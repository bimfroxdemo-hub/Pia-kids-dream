import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  Sparkles,
  HeartHandshake,
  PartyPopper,
  Crown,
} from "lucide-react";

import img1 from "../assets/momduo/momduo1.jpeg";
import img2 from "../assets/momduo/momduo2.jpeg";
import img3 from "../assets/momduo/momduo3.jpeg";
import img4 from "../assets/momduo/momduo4.jpeg";
import img5 from "../assets/momduo/momduo5.jpeg";
import img6 from "../assets/momduo/momduo6.jpeg";
import img7 from "../assets/momduo/momduo7.jpeg";
import img8 from "../assets/momduo/momduo8.jpeg";
import img9 from "../assets/momduo/momduo9.jpeg";
export default function MomDaughterDuo() {
  const [selected, setSelected] = useState(null);

  const products = [
    { img: img1, name: "Celestial Stripe Duo Dress Set" },
    { img: img2, name: "Elegant Party Duo" },
    { img: img3, name: "Casual Matching Set" },
    { img: img4, name: "Traditional Duo" },
    { img: img5, name: "Festive Duo"},
    { img: img6, name: "Summer Duo"},
    {img:img7, name:"Traditional duo"},
    {img:img8, name:"Traditional duo"},
    {img:img9, name:"Traditional duo"}
  ];

  const whatsappOrder = (item) => {
    const msg = `Hi, I want to order ${item.name} - ${item.price}`;
    window.open(
      `https://wa.me/919054981808?text=${encodeURIComponent(msg)}`
    );
  };

  return (
    <>
      <Helmet>
        <title>Mom & Daughter Duo Collection</title>
      </Helmet>

      <div className=" min-h-screen">

        <section className="relative min-h-[420px] md:min-h-[500px] bg-[#faf8ff] overflow-hidden flex items-center justify-center pt-[120px] md:pt-24">

          {/* TOP LEFT FLOWER */}
          {/* TOP LEFT FLOWER */}
          {/* TOP LEFT DECORATIVE FLOWER */}
          {/* TOP LEFT DECORATIVE FLOWER */}
          <div className="absolute -top-6 -left-6 md:top-6 md:left-6 opacity-60">

            <div className="relative w-36 h-36 md:w-56 md:h-56">

              {/* Petals */}
              <div className="absolute w-20 h-32 md:w-32 md:h-44 bg-purple-300 rounded-full left-8 md:left-16 top-0"></div>

              <div className="absolute w-20 h-32 md:w-32 md:h-44 bg-purple-300 rounded-full left-8 md:left-16 bottom-0"></div>

              <div className="absolute w-32 h-20 md:w-44 md:h-32 bg-purple-300 rounded-full left-0 top-8 md:top-16"></div>

              <div className="absolute w-32 h-20 md:w-44 md:h-32 bg-purple-300 rounded-full right-0 top-8 md:top-16"></div>

              {/* Center */}
              <div className="absolute w-14 h-14 md:w-24 md:h-24 bg-purple-500 rounded-full left-11 md:left-16 top-11 md:top-16"></div>

            </div>

          </div>
          {/* TOP RIGHT LEAVES */}
          <div className="absolute right-0 top-4 md:right-10 md:top-10 opacity-50 md:opacity-60">

            <div className="relative scale-75 md:scale-100">

              <div className="w-24 h-44 bg-purple-300 rounded-[100%_0] rotate-45"></div>

              <div className="w-20 h-36 bg-purple-400 rounded-[100%_0] rotate-12 absolute top-10 left-8"></div>

              <div className="w-16 h-28 bg-purple-300 rounded-[100%_0] -rotate-12 absolute top-24 left-16"></div>

            </div>

          </div>
          {/* BOTTOM LEFT */}
          <div className="absolute bottom-0 left-0 md:left-20 opacity-10 md:opacity-15 scale-75 md:scale-100">

            <div className="w-20 h-32 bg-purple-200 rounded-[100%_0] rotate-[140deg]"></div>

          </div>

          {/* BOTTOM RIGHT */}
          <div className="absolute bottom-0 right-0 md:right-20 opacity-10 md:opacity-15 scale-75 md:scale-100">

            <div className="w-20 h-32 bg-purple-200 rounded-[100%_0] rotate-[-140deg]"></div>

          </div>

          {/* CONTENT */}
          <div className="relative z-10 text-center px-5 max-w-3xl mt-2 md:mt-0">

            <p className="uppercase tracking-[4px] md:tracking-[6px] text-purple-500 text-[10px] md:text-xs mb-4">
              Mom & Daughter Collection
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 leading-tight">
              Matching
              <span className="block text-purple-600">
                Moments
              </span>
            </h1>

            <p className="mt-4 text-gray-500 text-sm md:text-base leading-6 md:leading-7 max-w-xl mx-auto px-2">
              Beautiful matching outfits designed for mothers and daughters,
              creating memorable moments with elegance and comfort.
            </p>

          </div>

        </section>
        {/*  feature  */}

        {/* GALLERY */}


        {/* PRODUCT GRID */}
        <section className="max-w-7xl mx-auto px-4 pb-24">


<div className="
grid
grid-cols-2
md:grid-cols-3
gap-5
md:gap-10
">


{products.map((item,index)=>(


<motion.div

key={index}

whileHover={{y:-8}}

className="
group
cursor-pointer
"

onClick={()=>setSelected(item)}

>



<div className="
relative
overflow-hidden
bg-[#f8f3ff]
shadow-md
">


<img

src={item.img}

alt={item.name}

className="
w-full
h-[220px]
sm:h-[350px]
md:h-[520px]
object-cover
transition
duration-700
group-hover:scale-110
"

/>



{/* hover button */}

<div className="
absolute
inset-0
bg-black/20
opacity-0
group-hover:opacity-100
transition
flex
items-center
justify-center
">


<div className="
bg-white
text-purple-700
px-5
py-2
text-sm
shadow-xl
">

View

</div>


</div>


</div>





<div className="
mt-5
text-center
">


<h3 className="
text-sm
md:text-lg
font-semibold
text-[#28004d]
">

{item.name}

</h3>


<div className="
w-16
h-[2px]
bg-purple-500
mx-auto
my-2
">


</div>


<p className="
text-purple-600
font-medium
">

{item.price}

</p>


</div>



</motion.div>


))}



</div>


</section>

        {/* POPUP */}
        <AnimatePresence>

{selected && (

<motion.div

className="
fixed
inset-0
bg-black/60
backdrop-blur-sm
flex
items-center
justify-center
p-4
z-50
"

initial={{opacity:0}}

animate={{opacity:1}}

exit={{opacity:0}}

>


<motion.div

initial={{scale:.85}}

animate={{scale:1}}

exit={{scale:.85}}

className="
bg-white
max-w-5xl
w-full
grid
md:grid-cols-2
overflow-hidden
shadow-2xl
"


>


{/* image */}

<div className="
bg-[#f7f1ff]
">


<img

src={selected.img}

className="
w-full
h-[350px]
md:h-[650px]
object-cover
"

/>


</div>





{/* details */}


<div className="
p-6
md:p-12
flex
flex-col
justify-center
">


<p className="
uppercase
tracking-[5px]
text-xs
text-purple-600
">

Premium Collection

</p>



<h2 className="
text-3xl
md:text-5xl
font-bold
text-[#25004c]
mt-4
">

{selected.name}

</h2>



<p className="
text-2xl
text-purple-600
mt-4
">

{selected.price}

</p>




<p className="
mt-6
text-gray-500
leading-7
">

Beautifully designed outfit with premium
fabric, elegant finish and perfect comfort.

</p>




<button

onClick={()=>whatsappOrder(selected)}

className="
mt-8
bg-purple-700
text-white
py-3
hover:bg-purple-900
transition
"

>

Order via WhatsApp

</button>




<button

onClick={()=>setSelected(null)}

className="
mt-3
border
border-purple-600
text-purple-700
py-3
"

>

Close

</button>



</div>


</motion.div>


</motion.div>


)}

</AnimatePresence>
      </div>
    </>
  );
}