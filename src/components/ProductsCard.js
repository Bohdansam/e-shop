import React from "react";
import { motion } from "framer-motion";

const products = [
  {
    title: "Popular Products",
    description:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    image: "https://i.imgur.com/dW8vws9.png", 
  },
  {
    title: "Ipad Pro",
    description:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    image: "https://i.imgur.com/1s8J3aO.png", 
    bg: "bg-[#F9F9F9]",
  },
  {
    title: "Samsung Galaxy",
    description:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    image: "https://i.imgur.com/elwEIaZ.png", 
    bg: "bg-[#EAEAEA]",
  },
  {
    title: "Macbook Pro",
    description:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    image: "https://i.imgur.com/YlbDnLg.png", 
    bg: "bg-[#2C2C2C]",
    textColor: "text-white",
  }
];

export default function ProductCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
      {products.map((product, index) => (
        <motion.div
          key={index}
          className={`p-6 ${product.bg} ${product.textColor} flex flex-col items-center justify-between h-full ${product.border}`}
          whileHover={{ scale: 1.03 }}
        >
          <img src={product.image} alt={product.title} className="h-[640px] object-contain mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-center ">{product.title}</h3>
          <p className="text-sm mb-4 text-center text-[#909090]">{product.description}</p>
          <button
  className={`px-6 py-2 border border-black rounded-md transition duration-300
    ${product.textColor === "text-white" ? "text-white border-white hover:bg-white hover:text-black" : "text-black hover:bg-black hover:text-white"}
  `}
>
  Shop Now
</button>

        </motion.div>
      ))}
    </div>
  );
}