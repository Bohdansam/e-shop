import React from "react";
import AnimatedDiv from "../AnimatedDiv";

const BigSummerSale = () => {
  return (
    <AnimatedDiv>
    <div className="w-full relative min-h-[200px] sm:min-h-[300px] md:min-h-[500px]">
      {/* Background image */}
      <img
        src="https://i.imgur.com/o2Q5pY8.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 py-6 h-full">
        <h1 className="text-2xl sm:text-4xl md:text-5xl mt-20 font-light drop-shadow">
          Big Summer <span className="font-bold">Sale</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-200 mt-2 sm:mt-4 max-w-[90%] sm:max-w-sm md:max-w-md drop-shadow">
          Commodo fames vitae vitae leo mauris in. Eu consequat.
        </p>
        <button className="mt-3 sm:mt-6 px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base border border-white rounded-md hover:bg-white hover:text-black transition">
          Shop Now
        </button>
      </div>
    </div>
    </AnimatedDiv>
  );
};

export default BigSummerSale;