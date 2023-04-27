import React from "react";

function ProjectCard({ pp, cat, img, username }) {
  return (
    <div className="w-full h-[18rem] md:w-[15rem]  text-black mx-5 flex flex-col  justify-center my-6">
      <img
        src={img}
        alt="img"
        className="h-[70%] w-[100%] object-cover rounded-t-md"
        loading="lazy"
      />
      <div className="flex items-center py-2 px-3 gap-3 bg-gray-100 shadow-lg rounded-b-md ">
        <img
          src={pp}
          alt=""
          className="h-8 w-8 object-cover rounded-full"
          loading="lazy"
        />
        <div>
          <p className="text-sm font-semibold">{cat}</p>
          <p className="text-xs">{username}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
