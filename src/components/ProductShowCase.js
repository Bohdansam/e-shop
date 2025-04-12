import React from 'react';

const ProductShowcase = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white">
      {/* Playstation 5 */}
      <div className="col-span-2 flex items-center bg-gray-100 p-6 rounded-lg">
        <img
          src="https://i.imgur.com/cjdxIZN.png"
          alt="Playstation 5"
          className="w-1/2 max-h-48 object-contain"
        />
        <div className="ml-6">
          <h2 className="text-2xl font-semibold">Playstation 5</h2>
          <p className="text-sm text-gray-600 mt-2">
            Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.
          </p>
        </div>
      </div>
{/* Macbook Air */}
<div className="col-span-2 flex items-center bg-gray-50 p-6 rounded-lg justify-between">
  <div className="mr-6">
    <h2 className="text-3xl font-light">
      Macbook <span className="font-bold">Air</span>
    </h2>
    <p className="text-sm text-gray-600 mt-2">
      The new 15-inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.
    </p>
    <button className="mt-4 px-4 py-2 border border-black rounded hover:bg-black hover:text-white transition">
      Shop Now
    </button>
  </div>
  <img
    src="https://i.imgur.com/NT95wDa.png"
    alt="Macbook Air"
    className="w-2/3 max-h-[300px] object-contain"
  />
</div>

      {/* AirPods Max */}
      <div className="flex items-center bg-white p-6 rounded-lg">
        <img
          src="https://i.imgur.com/MktG16p.png"
          alt="AirPods Max"
          className="w-1/2 max-h-32 object-contain"
        />
        <div className="ml-4">
          <h3 className="text-lg font-semibold">
            Apple AirPods <span className="font-bold">Max</span>
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            Computational audio. Listen, it's powerful
          </p>
        </div>
      </div>

      {/* Apple Vision Pro */}
      <div className="flex items-center bg-black text-white p-6 rounded-lg">
        <img
          src="https://i.imgur.com/oVJwgcW.png"
          alt="Apple Vision Pro"
          className="w-1/2 max-h-32 object-contain"
        />
        <div className="ml-4">
          <h3 className="text-lg font-semibold">
            Apple <span className="font-bold">Vision Pro</span>
          </h3>
          <p className="text-sm mt-1">
            An immersive way to experience entertainment
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
