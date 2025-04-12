import React from "react";

const categories = [
  { name: "Phones", img: "https://i.imgur.com/WJdzIgv.png" },
  { name: "Smart Watches", img: "https://i.imgur.com/Tl7lHhP.png" },
  { name: "Cameras", img: "https://i.imgur.com/Yb3jPKQ.png" },
  { name: "Headphones", img: "https://i.imgur.com/HgtVZWL.png" },
  { name: "Computers", img: "https://i.imgur.com/yBSlMPu.png" },
  { name: "Gaming", img: "https://i.imgur.com/PIvhYqP.png" },
];

const CategoryBrowser = () => {
  return (
    <div className="p-6 bg-white border border-black">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Browse By Category</h2>
        <div className="flex space-x-2">
          <button className="text-xl">&#x2039;</button>
          <button className="text-xl">&#x203A;</button>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-gray-100 rounded-lg hover:shadow"
          >
            <img
              src={cat.img}
              alt={cat.name}
              className="w-8 h-8 mb-2 object-contain"
            />
            <span className="text-sm font-medium text-gray-800">
              {cat.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryBrowser;
