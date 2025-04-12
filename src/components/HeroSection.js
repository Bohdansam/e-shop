import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-[#211C24] text-white h-[650px] px-6 flex items-end pt-6">
      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-12">
        {/* Левая часть — текст */}
        <div className="flex flex-col justify-center text-center md:text-left h-full">
          <h4 className="text-gray-400 text-lg font-semibold mb-2">Pro.Beyond.</h4>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light">
            IPhone 14 <span className="font-bold">Pro</span>
          </h1>
          <p className="text-gray-400 mt-4 text-base sm:text-lg">
            Created to change everything for the better. For everyone.
          </p>
          <button className="mt-6 px-6 py-2 border border-white rounded hover:bg-white hover:text-black transition duration-300 w-fit mx-auto md:mx-0">
            Shop Now
          </button>
        </div>

        {/* Правая часть — изображение */}
        <div className="relative h-full flex justify-center md:justify-end items-end">
          <img
            src="https://i.imgur.com/lBFopal.png"
            alt="iPhone 14 Pro"
            className="w-[250px] sm:w-[250px] md:w-[320px] lg:w-[370px]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection