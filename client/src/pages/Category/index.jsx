import React from "react";
import StarImg from "../../Assets/img/star.png";
import ClockImg from "../../Assets/img/clock.png";
import GreenCheckImg from "../../Assets/img/greencheck.png";
import RecycleImg from "../../Assets/img/recycle.png";
import { Slider } from "infinite-react-carousel/lib";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import newRequest from "../../utils/service";
import { avatarImg } from "../../utils/data";
import Reviews from "../../components/Review/Reviews";

function Category() {
  const { id } = useParams();

  const {
    isLoading,
    error,
    data: gig,
  } = useQuery({
    queryKey: [`gig/${id}`],
    queryFn: () =>
      newRequest.get(`/gigs/single/${id}`).then((res) => {
        return res.data;
      }),
  });

  const userId = gig?.userId;

  const {
    isLoading: isLoadingUser,
    error: errorUser,
    data: user,
  } = useQuery({
    queryKey: [`user/${userId}`],
    queryFn: () =>
      newRequest.get(`/users/user/${userId}`).then((res) => {
        return res.data;
      }),
    enabled: !!userId,
  });

  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : error ? (
        "Something went workong"
      ) : (
        <div className="container flex gap-6">
          <div className="w-[65%]">
            <h1 className="text-3xl font-bold">{gig.title}</h1>
            {isLoadingUser ? (
              "Loading..."
            ) : errorUser ? (
              "Something went wrong"
            ) : (
              <div className="flex items-center gap-2 my-4">
                <img
                  src={user.img ?? avatarImg}
                  alt=""
                  className="h-8 w-8 object-cover rounded-full"
                />
                <span className="text-gray-500">{user.username}</span>
                {!isNaN(gig.totalStars / gig.starNumber) && (
                  <div className="flex items-center gap-2">
                    {Array(Math.round(gig.totalStars / gig.starNumber))
                      ?.fill()
                      ?.map((item, i) => (
                        <StarImages key={i} />
                      ))}
                    <span className="text-gray-500">
                      {Math.round(gig.totalStars / gig.starNumber)}
                    </span>
                  </div>
                )}
              </div>
            )}

            <Slider slidesToShow={1} arrowsScroll={1}>
              {gig.images.map((image, i) => (
                <img src={image} key={i} alt="" className="rounded-md" />
              ))}

              <img
                src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="rounded-md"
              />
              <img
                src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="rounded-md"
              />
            </Slider>

            {/* About The Category */}
            <AboutTheCategory gig={gig} />

            {/* About The Seller */}
            {isLoadingUser ? (
              "Loading..."
            ) : errorUser ? (
              "Something went wrong"
            ) : (
              <AboutTheSeller gig={gig} user={user} />
            )}

            {/* Reviews */}
            <h2 className="text-2xl font-bold">Reviews</h2>
            <Reviews gig={gig} />
          </div>

          {/* Right */}
          <div className="w-[35%]">
            <RightModel gig={gig} />
          </div>
        </div>
      )}
    </>
  );
}

export default Category;

export function StarImages() {
  return <img src={StarImg} alt="" className="h-4 w-4 object-contain" />;
}

function AboutTheSeller({ gig, user }) {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold">About the Seller</h2>

      <div className="my-3 flex items-center gap-4">
        <img
          src={user.img ?? avatarImg}
          alt=""
          className=" h-24 w-24 object-cover rounded-full"
        />
        <div className="flex flex-col gap-1 text-center">
          <p className="text-gray-500 font-semibold">{user.username}</p>
          {!isNaN(gig.totalStars / gig.starNumber) && (
            <div className="flex items-center gap-2">
              {Array(Math.round(gig.totalStars / gig.starNumber))
                ?.fill()
                ?.map((item, i) => (
                  <StarImages key={i} />
                ))}
              <span className="text-gray-500">
                {Math.round(gig.totalStars / gig.starNumber)}
              </span>
            </div>
          )}
          <button className="border border-gray-200 text-gray-500 px-3 py-1 rounded-md hover:bg-gray-100">
            Contact Me
          </button>
        </div>
      </div>
      <div className="my-6 border border-gray-200 shadow-sm px-6 py-3 rounded-md">
        <div className="flex items-center justify-between my-8">
          <div>
            <p className="text-gray-400">From</p>
            <p>{user.country}</p>
          </div>
          <div className="text-right">
            <p className="text-gray-400 text-end">Member Since</p>
            <p>Aug 2022</p>
          </div>
        </div>
        <div className="flex items-center justify-between my-8">
          <div>
            <p className="text-gray-400">Avg response time</p>
            <p>4 Hours</p>
          </div>
          <div className="text-right">
            <p className="text-gray-400">Last Delivery</p>
            <p>1 day</p>
          </div>
        </div>
        <div className="my-8">
          <p className="text-gray-400">Languages</p>
          <p>English</p>
        </div>
        <hr />
        <p className="mt-4 text-sm text-gray-400 text-center">
          My name is Anna, I enjoy creating AI generated art in my spare time. I
          have a lot of experience using the AI program and that means I know
          what to prompt the AI with to get a great and incredibly detailed
          result.
        </p>
      </div>
    </div>
  );
}

function AboutTheCategory({ gig }) {
  return (
    <>
      <h2 className="mt-6 text-2xl font-bold">About this Gig</h2>
      <p className="mt-2 text-sm tracking-wide text-gray-500">{gig.desc}</p>
    </>
  );
}

function RightModel({ gig }) {
  return (
    <div className="border border-gray-200 rounded-md shadow-sm py-3 px-6 sticky top-[7rem]">
      <div className="flex items-center justify-between">
        <p className="font-bold">{gig?.shortTitle}</p>
        <p className="text-xl text-gray-400 font-bold">$ {gig?.price}</p>
      </div>

      <p className="my-4 text-xs text-gray-400 tracking-wide">
        {gig?.shortDesc}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 my-3">
          <img src={ClockImg} alt="" className="h-5 w-5 object-contain" />
          <span className="text-sm font-semibold">
            {gig.deliveryTime} Days Delivery
          </span>
        </div>
        <div className="flex items-center gap-2 my-2">
          <img src={RecycleImg} alt="" className="h-5 w-5 object-contain" />
          <span className="text-sm font-semibold">
            {gig.revisionNumber} Revisions
          </span>
        </div>
      </div>
      {gig.features.map((feature, i) => (
        <div key={i} className="flex items-center my-3 gap-2.5">
          <img src={GreenCheckImg} alt="" className="h-4 w-4 object-contain" />
          <span className="text-sm text-gray-400 font-semibold">{feature}</span>
        </div>
      ))}
      <button className="bg-green-600 py-1.5 rounded-sm hover:bg-green-700 px-4 w-full text-white font-semibold">
        Continue
      </button>
    </div>
  );
}
