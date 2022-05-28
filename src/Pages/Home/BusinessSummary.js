import React from 'react';
import worldmap from '../../assets/images/worldmap.png';
import { BiWorld } from 'react-icons/bi';
import { IoIosPeople } from 'react-icons/io';
import { VscFeedback } from 'react-icons/vsc';

const BusinessSummary = () => {
  return (
    <section
      className=" mt-20 pt-10"
      style={{
        backgroundImage: `url(${worldmap})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h1 className=" text-3xl text-center uppercase bg-gradient-to-r from-purple-400 to-pink-600 text-neutral">
        Millions Business Trust us
      </h1>
      <hr />
      <h3 className="text-sm text-center uppercase font-semibold">
        Try to understand users expectation
      </h3>
      <div className="stats shadow mt-10 w-full">
        <div className="stat">
          <div className="stat-figure text-primary">
            <BiWorld className=" text-4xl" />
          </div>
          <div className="stat-title">We Reach</div>
          <div className="stat-value text-primary">70+</div>
          <div className="stat-desc">Country in the world</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary w-8">
            <IoIosPeople className=" text-4xl" />
          </div>
          <div className="stat-title">We served</div>
          <div className="stat-value text-secondary">253+</div>
          <div className="stat-desc">Happy Clients</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <VscFeedback className=" text-4xl" />
          </div>
          <div className="stat-value">86%</div>
          <div className="stat-title">Customer Feedbacks</div>
          <div className="stat-desc text-secondary">68% are positive</div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSummary;
