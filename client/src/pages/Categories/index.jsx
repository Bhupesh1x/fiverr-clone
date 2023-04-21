import React, { useEffect, useState } from "react";
import CategoriesCard from "../../components/CategoriesCard/CategoriesCard";
import DownImg from "../../Assets/img/down.png";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/service";
import { useLocation } from "react-router-dom";

function Categories() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [sortBy, setSortBy] = useState("sales");

  function reSort(type) {
    setSortBy(type);
    setIsMenuOpen(false);
  }

  const { search } = useLocation();

  const {
    isLoading,
    error,
    data: gigs,
    refetch,
  } = useQuery({
    queryKey: ["gigs"],
    queryFn: () =>
      newRequest.get(`/gigs${search}&sort=${sortBy}`).then((res) => {
        return res.data;
      }),
  });

  useEffect(() => {
    refetch();
  }, [sortBy]);

  return (
    <div className="container">
      <h1 className="text-2xl font-bold">Ai Artists</h1>
      <p className="text-gray-400 text-base py-3">
        Explore the boundries of art and technology with Fiverr's Ai Artists
      </p>
      <div className="flex">
        <div className="flex items-center justify-end w-full relative">
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
              <p className="menuLinks" onClick={() => reSort("createdAt")}>
                Newest
              </p>
              <p className="menuLinks" onClick={() => reSort("sales")}>
                Best Selling
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center justify-between flex-wrap gap-2">
        {isLoading
          ? "Loading"
          : error
          ? "Something went wrong!"
          : gigs?.map((gig) => <CategoriesCard key={gig._id} gig={gig} />)}
      </div>
    </div>
  );
}

export default Categories;
