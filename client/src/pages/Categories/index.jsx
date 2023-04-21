import React, { useState } from "react";
import CategoriesCard from "../../components/CategoriesCard/CategoriesCard";
import DownImg from "../../Assets/img/down.png";
import { categories } from "../../utils/data";

function Categories() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [sortBy, setSortBy] = useState("Best Selling");

  function reSort(type) {
    setSortBy(type);
    setIsMenuOpen(false);
  }

  return (
    <div className="container">
      <h1 className="text-2xl font-bold">Ai Artists</h1>
      <p className="text-gray-400 text-base py-3">
        Explore the boundries of art and technology with Fiverr's Ai Artists
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-gray-400 font-semibold">Budget :</span>
          <input
            type="number"
            placeholder="min"
            className="w-36 outline-none border border-gray-400 px-2 py-0.5 rounded-md"
          />
          <input
            type="number"
            placeholder="max"
            className="w-36 outline-none border border-gray-400 px-2 py-0.5 rounded-md"
          />
          <button className="bg-green-600 text-white text-sm font-semibold px-2 py-1 rounded-md hover:bg-green-700">
            Apply
          </button>
        </div>
        <div className="flex items-center relative">
          <span className="text-gray-400 font-semibold">Sort By:</span>
          <p className="ml-3 mr-1">{sortBy}</p>
          <img
            src={DownImg}
            alt=""
            className="h-4 w-4 object-contain cursor-pointer"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          />
          {isMenuOpen && (
            <div className="absolute top-8 right-0 bg-[#42614d] rounded-md py-2 px-3 text-white flex flex-col gap-2 w-[10rem] shadow-md transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1)">
              <p className="menuLinks" onClick={() => reSort("Newest")}>
                Newest
              </p>
              <p className="menuLinks" onClick={() => reSort("Best Selling")}>
                Best Selling
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center justify-between flex-wrap gap-2">
        {categories.map((category) => (
          <CategoriesCard
            key={category.id}
            desc={category.desc}
            img={category.img}
            pp={category.pp}
            username={category.username}
          />
        ))}
      </div>
    </div>
  );
}

export default Categories;
