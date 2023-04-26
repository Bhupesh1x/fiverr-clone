import React, { useEffect, useMemo, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import newRequest from "../utils/service";
import { avatarImg } from "../utils/data";

function Header() {
  const [isActive, setIsActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  function handleActive() {
    window.scrollY > 0 ? setIsActive(true) : setIsActive(false);
  }

  function handleToogleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleActive);

    return () => {
      window.removeEventListener("scroll", handleActive);
    };
  }, []);

  const currUser = JSON.parse(localStorage.getItem("currentFiverrUser"));

  const menuLinks = useMemo(() => {
    const data = [
      {
        id: 1,
        link: "/myorders",
        name: "Orders",
      },
      {
        id: 2,
        link: "/messages",
        name: "Messages",
      },
    ];

    currUser?.isSeller &&
      data.unshift(
        {
          id: 3,
          link: "/gigs",
          name: "Gigs",
        },
        {
          id: 4,
          link: "/addnewgigs",
          name: "Add New Gigs",
        }
      );

    return data;
  }, [currUser]);

  async function handleLogout(e) {
    e.preventDefault();
    const notification = () => toast("Loging You Out...");
    try {
      await newRequest.get("/users/logout");
      toast.success("Logout Successfull", {
        id: notification,
      });
      localStorage.clear("currentFiverrUser");

      navigate("/");
    } catch (err) {
      toast.error(err.response.data, {
        id: notification,
      });
    }
  }

  return (
    <div className="transition-all duration-500 ease sticky top-0 z-50">
      <nav
        className={`${
          !isActive ? "bg-[#013914] text-white" : "bg-white text-black"
        }`}
      >
        <div className="flex items-center justify-between container">
          <Link to="/">
            <h1 className="text-xl font-bold cursor-pointer">
              Fiverr <span className="text-green-600">.</span>
            </h1>
          </Link>
          <div className="flex items-center space-x-4">
            <p className="font-semibold cursor-pointer">Fiverr Business</p>
            <p className="font-semibold cursor-pointer">Explore</p>
            <p className="font-semibold cursor-pointer">English</p>
            {!currUser && (
              <Link to="/login">
                {" "}
                <p className="font-semibold cursor-pointer">Sign in</p>
              </Link>
            )}
            {!currUser?.isSeller && (
              <p className="font-semibold cursor-pointer">Became a seller</p>
            )}
            {!currUser ? (
              <Link to="/register">
                <button
                  className={`border px-3 py-1 rounded-md hover:bg-green-700 transition ${
                    !isActive ? "border-white" : "border-black"
                  }`}
                >
                  Join
                </button>
              </Link>
            ) : (
              <div
                className="flex items-center gap-3 relative cursor-pointer transition-all duration-700 ease-in select-none border-l border-green-600 pl-2"
                onClick={handleToogleMenu}
              >
                <img
                  src={currUser.img ?? avatarImg}
                  alt=""
                  className="h-8 w-8 rounded-full object-cover "
                />
                <p
                  className={`font-semibold ${
                    isActive ? "text-black" : "text-white"
                  }`}
                >
                  {currUser?.username}
                </p>

                {isMenuOpen && (
                  <div className="absolute top-10 right-0 bg-[#42614d] rounded-md py-2 px-3 text-white flex flex-col gap-2 w-[10rem] shadow-md transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1)">
                    {menuLinks.map((menuLink) => (
                      <Link to={menuLink.link} key={menuLink.id}>
                        <p className="menuLinks">{menuLink.name}</p>
                      </Link>
                    ))}
                    <p className="menuLinks" onClick={handleLogout}>
                      Logout
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
      {isActive ? (
        <>
          <hr className="w-full border border-gray-200" />
          <HeaderMenu />
        </>
      ) : null}
    </div>
  );
}

export default Header;

function HeaderMenu() {
  return (
    <div className="bg-white text-black shadow-md">
      <div className="flex items-center cursor-pointer  max-w-6xl justify-between text-sm mx-auto px-4 py-1">
        <p>Graphics & Design</p>
        <p>Video & Animation</p>
        <p>Writing & Translation</p>
        <p>AI Services</p>
        <p>Digital Marketing</p>
        <p>Music & Audio</p>
        <p>Programming & Tech</p>
        <p>Business</p>
        <p>Lifestyle</p>
      </div>
    </div>
  );
}
