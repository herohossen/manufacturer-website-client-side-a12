import React from "react";
import Banner from "./Banner";
import BusinessSection from "./BusinessSection";
import Client from "./Client";

import Reviews from "./Reviews";
import Subscribe from "./Subscribe";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Tools></Tools>
      <BusinessSection></BusinessSection>
      <Reviews></Reviews>
      <Client></Client>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;
