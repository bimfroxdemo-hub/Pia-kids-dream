import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import wedding from "../assets/weddingimg/5-frontimg.jpeg";
import western from "../assets/westernimg/21-img1.jpeg";
import navratri from "../assets/navratriimg/10-frontnavratri.jpeg";
import birthday from "../assets/birthdayimg/14-frontimg.jpeg";
import summer from "../assets/summerimg/summerfront3.jpg";


const slides = [

    {
        title: "WEDDING COLLECTION",
        text: "Elegance Personified Luxury Redefined",
        image: wedding,
        link: "/collections?category=Wedding"
    },
    {
        title: "WESTERN WEAR",
        text: "Modern Styles Crafted For You",
        image: western,
        link: "/collections?category=Western"
    },
    {
        title: "NAVRATRI COLLECTION",
        text: "Celebrate Every Step Beautifully",
        image: navratri,
        link: "/collections?category=Navratri"
    },

    {
        title: "BIRTHDAY COLLECTION",
        text: "Perfect Styles For Special Days",
        image: birthday,
        link: "/collections?category=Birthday"
    },

    {
        title: "SUMMER COLLECTION",
        text: "Fresh Looks For Every Summer Moment",
        image: summer,
        link: "/collections?category=Summer"
    }

];
export default function CollectionBanner() {
    const [active, setActive] = useState(0);
    useEffect(() => {

        const timer = setInterval(() => {

            setActive(prev =>
                (prev + 1) % slides.length
            )

        }, 3000);
        return () => clearInterval(timer);
    }, []);
    return (
        <section className="
bg-[#f7efff]
py-5
px-3
">
            <div className="
max-w-6xl
mx-auto

grid
grid-cols-2

bg-white
shadow-xl
overflow-hidden
items-stretch
">
                {/* TEXT SIDE */}
                <div className="
flex
flex-col
justify-center
items-center
text-center

p-4
sm:p-6
md:p-14

h-full

bg-gradient-to-br
from-[#fbf5ff]
to-[#ead4ff]

">
                    <AnimatePresence mode="wait">
                        <motion.div

                            key={active}

                            initial={{
                                opacity: 0,
                                y: 20
                            }}

                            animate={{
                                opacity: 1,
                                y: 0
                            }}

                            exit={{
                                opacity: 0
                            }}

                            transition={{
                                duration: .4
                            }}

                        >
                            <h1 className="
text-sm
sm:text-xl
md:text-5xl

font-serif
font-bold

text-[#4b0082]
">

                                {slides[active].title}

                            </h1>
                            <p className="
mt-2
sm:mt-4

text-[10px]
sm:text-xs
md:text-base

text-gray-600
">

                                {slides[active].text}

                            </p>
                            <Link to={slides[active].link}>
                                <button className="
mt-4
sm:mt-6

px-3
sm:px-6

py-2

bg-[#7e22ce]

text-white

text-[10px]
sm:text-sm

hover:bg-[#581c87]

transition

">

                                    SHOP NOW

                                </button>


                            </Link>


                        </motion.div>


                    </AnimatePresence>
                    {/* BUTTONS */}
                    <div className="
flex
gap-1
sm:gap-2

mt-5

flex-wrap
justify-center
">
                        {
                            slides.map((item, index) => (


                                <button

                                    key={index}

                                    onClick={() => setActive(index)}

                                    className={`

px-2
sm:px-4

py-1.5
sm:py-2

text-[8px]
sm:text-xs

border

transition


${active === index

                                            ?

                                            "bg-[#7e22ce] text-white border-purple-700"

                                            :

                                            "bg-white text-purple-700 border-purple-200"

                                        }

`}

                                >


                                    {
                                        item.title
                                            .replace(" COLLECTION", "")
                                            .replace(" WEAR", "")
                                    }


                                </button>


                            ))
                        }
                    </div>
                </div>
                {/* IMAGE SIDE */}


                <div className="

h-full

min-h-[260px]

sm:min-h-[350px]

md:min-h-[560px]

overflow-hidden

">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={active}
                            src={slides[active].image}
                            initial={{
                                opacity: 0,
                                scale: 1.05
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1
                            }}
                            exit={{
                                opacity: 0
                            }}
                            transition={{
                                duration: .5
                            }}
                            className="
w-full
h-full
object-cover
"
                        />
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}