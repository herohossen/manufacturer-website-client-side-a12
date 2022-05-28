import React from "react";
import img from "../../assets/images/download.png";

const NotFound = () => {
  return (
    <div
      class="hero min-h-screen"
      style={{
        backgroundImage: `url(${img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          {/* <button class="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </div>
  );
};

export default NotFound;
