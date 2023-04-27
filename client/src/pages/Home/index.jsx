import React, { useEffect } from "react";
import Featured from "../../components/Featured/Featured";
import TrustedBy from "../../components/TrustedBy/TrustedBy";
import Slide from "../../components/Slide/Slide";
import { summaryInfo } from "../../utils/data";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import Video from "../../Assets/img/video.mp4";
import CheckImg from "../../Assets/img/check.png";
import { projects } from "../../utils/data";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/service";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const isMobile = window.innerWidth < 768;

function Home() {
  const navigate = useNavigate();
  const {
    isLoading,
    error,
    data: category,
  } = useQuery({
    queryKey: ["category"],
    queryFn: () =>
      newRequest.get(`/category`).then((res) => {
        return res.data;
      }),
  });

  useEffect(() => {
    if (error?.response?.status === 407) {
      async function logout() {
        try {
          await newRequest.get("/users/logout");
          localStorage.clear("currentFiverrUser");

          navigate("/login");
        } catch (err) {
          toast.error(err.response.data);
        }
      }
      logout();
    }
  }, [error, navigate]);

  return (
    <>
      <Featured />
      <TrustedBy />
      {isLoading ? (
        "Loading..."
      ) : error ? (
        "something went wrong!"
      ) : category.length > 0 ? (
        <Slide arrowsScroll={isMobile ? 1 : 4} slideToShow={isMobile ? 1 : 4}>
          {category?.map((card) => (
            <CategoryCard
              key={card._id}
              title={card.title}
              desc={card.desc}
              img={card.img}
              cat={card.cat}
            />
          ))}
        </Slide>
      ) : null}

      <Features />
      <Explore />

      <Slide arrowsScroll={isMobile ? 1 : 4} slideToShow={isMobile ? 1 : 4}>
        {projects?.map((card) => (
          <ProjectCard
            key={card.id}
            pp={card.pp}
            cat={card.cat}
            img={card.img}
            username={card.username}
          />
        ))}
      </Slide>
    </>
  );
}

export default Home;

function Features() {
  return (
    <div className="py-10 my-8 bg-green-50">
      <div className="container flex items-center gap-[3rem]">
        <div className="flex-1">
          <p className="text-2xl lg:text-3xl font-bold mb-2 text-center lg:text-left">
            A whole world of freelance at your fingertips
          </p>
          {summaryInfo?.map((summary) => (
            <div className="py-2.5" key={summary.id}>
              <div className="flex items-center gap-3">
                <img
                  src={CheckImg}
                  alt=""
                  className="h-5 w-5 object-contain"
                  loading="lazy"
                />
                <p className="font-semibold">{summary.title}</p>
              </div>
              <p className="mt-2 text-gray-500 tracking-wide">{summary.desc}</p>
            </div>
          ))}
        </div>
        <video
          src={Video}
          controls
          className="h-[15rem] hidden lg:inline-flex"
        ></video>
      </div>
    </div>
  );
}

function Explore() {
  return (
    <div className=" bg-[#0d084d] text-white py-10 my-8">
      <div className="container flex items-center gap-[1rem]">
        <div className="w-[100%] lg:w-[50%]">
          <h1 className="text-3xl font-bold text-center lg:text-left">
            Fiverr <i>business</i>
          </h1>
          <h1 className="text-4xl font-bold my-6 text-center lg:text-left">
            A business solution designed for <i>teams</i>
          </h1>
          <p className="my-5 text-gray-400 font-bold">
            Upgrade to a curated experience packed with tools and benefits,
            dedicated to businesses
          </p>

          <div className="flex items-center gap-2 my-4 text-gray-500">
            <img
              src={CheckImg}
              alt=""
              className="h-5 w-5 object-contain"
              loading="lazy"
            />
            <p>Connect to freelancers with proven business experience</p>
          </div>

          <div className="flex items-center gap-2 my-4 text-gray-500">
            <img
              src={CheckImg}
              alt=""
              className="h-5 w-5 object-contain"
              loading="lazy"
            />
            <p>
              Get matched with the perfect talent by a customer success manager
            </p>
          </div>

          <div className="flex items-center gap-2 my-4 text-gray-500">
            <img
              src={CheckImg}
              alt=""
              className="h-5 w-5 object-contain"
              loading="lazy"
            />
            <p>
              Manage teamwork and boost productivity with one powerful workspace
            </p>
          </div>

          <button className="bg-green-600 px-3 py-1.5 mt-3 hover:bg-green-700 rounded-sm font-semibold">
            Explore Fiverr Business
          </button>
        </div>
        <div className="hidden lg:block lg:w-[50%]">
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
            alt=""
            className="w-[100%]"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
