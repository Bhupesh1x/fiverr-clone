import React from "react";
import StarImg from "../../Assets/img/star.png";
import HeartImg from "../../Assets/img/heart.png";
import { useNavigate } from "react-router-dom";

function CategoriesCard({ img, pp, username, desc }) {
  const navigate = useNavigate();
  return (
    <div
      className="w-[46%] md:w-[25%] my-4 cursor-pointer"
      onClick={() => navigate("/category/123")}
    >
      <img
        src={img}
        alt=""
        className="h-[50%] w-[100%] object-cover rounded-t-md"
      />

      <div className="bg-gray-50 rounded-b-md shadow-lg">
        <div className="py-2 px-3">
          <div className="flex items-center gap-2 ">
            <img
              src={pp}
              alt=""
              className="h-8 w-8 object-cover rounded-full"
            />
            <p className="">{username}</p>
          </div>
          <p className="py-2 text-xs text-gray-500">{desc}</p>
          <div className="flex items-center gap-3">
            <img src={StarImg} alt="" className="h-4 w-4 object-contain" />
            <span className="text-sm">5</span>
          </div>
        </div>
        <hr />
        <div className="py-2 px-3 flex items-center justify-between">
          <img src={HeartImg} alt="" className="h-4 w-4 object-contain" />
          <div className="text-right">
            <p className="text-base text-gray-400">Starting At</p>
            <p className="text-xl text-gray-500">$ 112</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriesCard;
