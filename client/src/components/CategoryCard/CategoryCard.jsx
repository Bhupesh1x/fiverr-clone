import React from "react";
import { Link } from "react-router-dom";

function CategoryCard({ title, desc, img, cat }) {
  return (
    <Link to={`/categories?cat=${cat}`} state={{ title, desc }}>
      <div className="h-[18rem] w-[15rem] rounded-md shadow-lg text-white mx-5 flex items-center justify-center my-6 relative">
        <img
          src={img}
          alt="img"
          className="h-[100%] w-[100%] object-cover rounded-md"
        />
        <div className="absolute top-5 left-6">
          <p className="font-semibold text-sm">{desc}</p>
          <p className="font-bold">{title}</p>
        </div>
      </div>
    </Link>
  );
}

export default CategoryCard;
