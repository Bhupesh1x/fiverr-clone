import React from "react";
import SearchImg from "../../Assets/img/search.png";
import ManImg from "../../Assets/img/man.png";

function Featured() {
  return (
    <div className="bg-[#013914] text-white">
      <div className="container py-0 flex items-center gap-8">
        <div className="w-[70%]">
          <h1 className="text-5xl font-bold">
            Find the perfect <span className="font-thin italic">freelance</span>{" "}
            services for your business
          </h1>
          <div className="flex items-center my-8">
            <div className=" bg-white flex items-center py-2 px-3 rounded-l-sm w-full">
              <img
                src={SearchImg}
                alt="search"
                className="h-4 w-5 object-contain"
              />
              <input
                type="text"
                placeholder="Search here"
                className="flex-1 outline-none text-black pl-2 capitalize"
              />
            </div>
            <button className="bg-green-500 py-[0.52rem] hover:opacity-70 px-4">
              Search
            </button>
          </div>
          <div className="flex items-center gap-3">
            <p className="font-semibold">Popular :</p>
            <p className="border border-white py-1 px-2 rounded-full text-xs">
              Web Design
            </p>
            <p className="border border-white py-1 px-2 rounded-full text-xs">
              Wordpress
            </p>
            <p className="border border-white py-1 px-2 rounded-full text-xs">
              Ai Services
            </p>
          </div>
        </div>
        <div>
          <img src={ManImg} alt="man" className="h-full" />
        </div>
      </div>
    </div>
  );
}

export default Featured;
