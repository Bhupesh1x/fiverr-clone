import React from "react";
import TwitterImg from "../../Assets/img/twitter.png";
import FacebookImg from "../../Assets/img/facebook.png";
import LinkedinImg from "../../Assets/img/linkedin.png";
import PinterestImg from "../../Assets/img/pinterest.png";
import InstagramImg from "../../Assets/img/instagram.png";
import LanguageImg from "../../Assets/img/language.png";
import CoinImg from "../../Assets/img/coin.png";
import AccessibilityImg from "../../Assets/img/accessibility.png";
import { useLocation } from "react-router-dom";

function Footer() {
  const { pathname } = useLocation();
  return (
    <div
      className={`bg-gray-100 text-gray-400 py-3 ${
        pathname !== "/" && "sticky bottom-0 w-full z-60"
      }`}
    >
      <div className="container flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0">
        <div className="flex items-center gap-4">
          <h2>Fiverr</h2>
          <span>© Fiverr International Ltd. 2023</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3">
            <img
              src={TwitterImg}
              alt=""
              className="h-5 w-5 object-contain"
              loading="lazy"
            />
            <img
              src={FacebookImg}
              alt=""
              className="h-5 w-5 object-contain"
              loading="lazy"
            />
            <img
              src={LinkedinImg}
              alt=""
              className="h-5 w-5 object-contain"
              loading="lazy"
            />
            <img
              src={PinterestImg}
              alt=""
              className="h-5 w-5 object-contain"
              loading="lazy"
            />
            <img
              src={InstagramImg}
              alt=""
              className="h-5 w-5 object-contain"
              loading="lazy"
            />
          </div>
          <div className="flex items-center gap-1">
            <img
              src={LanguageImg}
              alt=""
              className="h-5 w-5 object-contain"
              loading="lazy"
            />
            <span className="text-sm">English</span>
          </div>
          <div className="flex items-center gap-1">
            <img
              src={CoinImg}
              alt=""
              className="h-5 w-5 object-contain"
              loading="lazy"
            />
            <span className="text-sm">USD</span>
          </div>
          <img
            src={AccessibilityImg}
            alt=""
            className="h-5 w-5 object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
