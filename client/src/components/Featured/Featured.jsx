import React, { useState } from "react";
import SearchImg from "../../Assets/img/search.png";
import ManImg from "../../Assets/img/man.png";
import { useNavigate } from "react-router-dom";

function Featured() {
  const [input, setInput] = useState("");
  const navigate = useNavigate("");

  function handleSubmit() {
    navigate(`/categories?search=${input}`);
  }

  return (
    <div className="bg-[#013914] text-white">
      <div className="container py-0 flex items-center gap-8">
        <div className="w-[100%] md:w-[70%]">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
            Find the perfect <span className="font-thin italic">freelance</span>{" "}
            services for your business
          </h1>
          <div className="flex items-center my-4 lg:my-8">
            <div className=" bg-white flex items-center py-2 px-3 rounded-l-sm w-full">
              <img
                src={SearchImg}
                alt="search"
                className="h-4 w-5 object-contain"
                loading="lazy"
              />
              <input
                type="text"
                placeholder="Search here"
                className="flex-1 outline-none text-black pl-2 capitalize"
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <button
              onClick={handleSubmit}
              className="bg-green-500 py-[0.52rem] hover:opacity-70 px-4"
            >
              Search
            </button>
          </div>
          <div className="flex items-center gap-3 my-4 lg:my-0">
            <p className="font-semibold">Popular :</p>
            <p className="border border-white py-1 px-2 rounded-full text-xs">
              Web Design
            </p>
            <p className="border border-white py-1 px-2 rounded-full text-xs">
              Wordpress
            </p>
            <p className="border border-white py-1 px-2 rounded-full text-xs hidden lg:inline-flex">
              Ai Services
            </p>
          </div>
        </div>
        <div className="hidden md:block">
          <img src={ManImg} alt="man" className="h-full" loading="lazy" />
        </div>
      </div>
    </div>
  );
}

export default Featured;
