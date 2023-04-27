import React from "react";

function TrustedBy() {
  return (
    <div className="bg-gray-200 h-[6rem] flex items-center gap-8 justify-center w-full overflow-hidden">
      <p className="text-[#C2C2C2] font-semibold">Trusted By:</p>
      <img
        src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook2x.188a797.png"
        alt=""
        className="h-12 object-contain"
        loading="lazy"
      />
      <img
        src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google2x.06d74c8.png"
        alt=""
        className="h-12 object-contain"
        loading="lazy"
      />
      <img
        src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix2x.887e47e.png"
        alt=""
        className="h-12 object-contain"
        loading="lazy"
      />
      <img
        src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg2x.6dc32e4.png"
        alt=""
        className="h-12 object-contain"
        loading="lazy"
      />
      <img
        src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal2x.22728be.png"
        alt=""
        className="h-12 object-contain"
        loading="lazy"
      />
    </div>
  );
}

export default TrustedBy;
