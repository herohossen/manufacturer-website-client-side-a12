import React from "react";
import Banner from "./Banner";
import BusinessSection from "./BusinessSection";

import Reviews from "./Reviews";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Tools></Tools>
      <BusinessSection></BusinessSection>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
