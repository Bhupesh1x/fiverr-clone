import React from "react";
import StarImg from "../../Assets/img/star.png";
import HeartImg from "../../Assets/img/heart.png";
import { useNavigate } from "react-router-dom";
import newRequest from "../../utils/service";
import { useQuery } from "@tanstack/react-query";
import { avatarImg } from "../../utils/data";

function CategoriesCard({ img, gig }) {
  const navigate = useNavigate();

  const { data: user } = useQuery({
    queryKey: [gig.userId],
    queryFn: () =>
      newRequest.get(`/users/user/${gig.userId}`).then((res) => {
        return res.data;
      }),
  });

  return (
    <div
      className="w-[46%] md:w-[25%] my-4 cursor-pointer"
      onClick={() => navigate(`/category/${gig?._id}`)}
    >
      <img
        src={gig?.coverImg}
        alt=""
        className="h-[50%] w-[100%] object-cover rounded-t-md"
        loading="lazy"
      />

      <div className="bg-gray-50 rounded-b-md shadow-lg">
        <div className="py-2 px-3">
          <div className="flex items-center gap-2 ">
            <img
              src={user?.img ?? avatarImg}
              alt=""
              className="h-8 w-8 object-cover rounded-full"
              loading="lazy"
            />
            <p className="">{user?.username}</p>
          </div>
          <p className="py-2 text-sm text-gray-700">{gig?.title}</p>
          <p className="py-2 text-xs text-gray-500">{gig?.desc}</p>
          <div className="flex items-center gap-3">
            <img
              src={StarImg}
              alt=""
              className="h-4 w-4 object-contain"
              loading="lazy"
            />
            <span className="text-sm">
              {!isNaN(gig?.totalStars / gig?.starNumber) &&
                Math.round(gig?.totalStars / gig?.starNumber)}
            </span>
          </div>
        </div>
        <hr />
        <div className="py-2 px-3 flex items-center justify-between">
          <img
            src={HeartImg}
            alt=""
            className="h-4 w-4 object-contain"
            loading="lazy"
          />
          <div className="text-right">
            <p className="text-base text-gray-400">Starting At</p>
            <p className="text-xl text-gray-500">$ {gig?.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriesCard;
