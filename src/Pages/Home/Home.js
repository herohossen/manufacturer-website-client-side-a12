import React from "react";
import Banner from "./Banner";
import BusinessSection from "./BusinessSection";
import Parts from "./Parts";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Parts></Parts>
      <BusinessSection></BusinessSection>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
