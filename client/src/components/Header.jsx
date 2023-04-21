import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isActive, setIsActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const currUser = {
    isSeller: true,
    id: 1,
    name: "Bhupesh",
  };

  const menuLinks = useMemo(() => {
    return [
      {
        id: 1,
        link: "/gigs",
        name: "Gigs",
      },
      {
        id: 2,
        link: "/addnewgigs",
        name: "Add New Gigs",
      },
      {
        id: 3,
        link: "/myorders",
        name: "Orders",
      },
      {
        id: 4,
        link: "/messages",
        name: "Messages",
      },
    ];
  }, []);

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
              <p className="font-semibold cursor-pointer">Sign in</p>
            )}
            {!currUser.isSeller && (
              <p className="font-semibold cursor-pointer">Became a seller</p>
            )}
            {!currUser ? (
              <button
                className={`border px-3 py-1 rounded-md hover:bg-green-700 transition ${
                  !isActive ? "border-white" : "border-black"
                }`}
              >
                Join
              </button>
            ) : (
              <div
                className="flex items-center gap-3 relative cursor-pointer transition-all duration-700 ease-in select-none border-l border-green-600 pl-2"
                onClick={handleToogleMenu}
              >
                <img
                  src="https://c8.alamy.com/comp/2BHM1DG/a-young-boy-six-years-of-age-looks-intently-at-a-google-nest-mini-smart-speaker-on-a-table-as-he-awaits-its-response-2BHM1DG.jpg"
                  alt=""
                  className="h-8 w-8 rounded-full object-cover "
                />
                <p className="font-semibold">{currUser.name}</p>

                {isMenuOpen && (
                  <div className="absolute top-10 right-0 bg-[#42614d] rounded-md py-2 px-3 text-white flex flex-col gap-2 w-[10rem] shadow-md transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1)">
                    {menuLinks.map((menuLink) => (
                      <Link to={menuLink.link} key={menuLink.id}>
                        <p className="menuLinks">{menuLink.name}</p>
                      </Link>
                    ))}
                    <p className="menuLinks">Logout</p>
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
