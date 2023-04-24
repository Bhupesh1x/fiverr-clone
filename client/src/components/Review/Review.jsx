import React from "react";
import DislikeImg from "../../Assets/img/dislike.png";
import LikeImg from "../../Assets/img/like.png";
import { StarImages } from "../../pages/Category";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/service";
import { avatarImg } from "../../utils/data";

function Review({ review }) {
  const {
    isLoading,
    error,
    data: user,
  } = useQuery({
    queryKey: [review?.userId],
    queryFn: () =>
      newRequest.get(`/users/user/${review?.userId}`).then((res) => {
        return res.data;
      }),
  });

  return (
    <>
      <div className="my-4 flex items-center gap-3">
        {isLoading ? (
          "Loading..."
        ) : error ? (
          "Something went wrong!"
        ) : (
          <>
            <img
              src={user.img ?? avatarImg}
              alt=""
              className="h-12 w-12 object-cover rounded-full"
            />
            <div className="">
              <p className="font-semibold text-gray-500">{user.username}</p>

              <span className="text-gray-500">{user.country}</span>
            </div>
          </>
        )}
      </div>
      <div className="flex items-center gap-2">
        {Array(review.star)
          ?.fill()
          ?.map((item, i) => (
            <StarImages key={i} />
          ))}
        <span className="text-gray-500">{review.star}</span>
      </div>

      <p className="mt-4 text-sm text-gray-600 font-semibold">{review.desc}</p>

      <div className="flex items-center gap-2 my-3">
        <p className="font-bold">Helpfull ?</p>

        <img src={LikeImg} alt="" className="h-4 w-4 object-contain" />
        <span>Yes</span>
        <img src={DislikeImg} alt="" className="h-4 w-4 object-contain" />
        <span>No</span>
      </div>
      <hr />
    </>
  );
}

export default Review;
