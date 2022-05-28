import React from 'react';
import client1 from '../../assets/images/client/client1.png';
import client2 from '../../assets/images/client/client2.png';
import client3 from '../../assets/images/client/client3.jpg';

const Client = () => {
  return (
    <div>
      <h1 className=" uppercase text-error text-xl pl-5 font-bold">
        Biggest Client
      </h1>
      <div className="stats shadow w-full mb-20">
        <div className="stat">
          <div className="stat-figure text-primary">
            <div className="avatar">
              <div className="w-16 rounded-full">
                <img src={client1} alt="" />
              </div>
            </div>
          </div>

          <div className="stat-value text-success">Round</div>
          <div className="stat-desc">21% increase of purchase</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar">
              <div className="w-16 rounded-full">
                <img src={client2} alt="" />
              </div>
            </div>
          </div>

          <div className="stat-value text-primary">IXI</div>
          <div className="stat-desc">18% increase of purchase</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar">
              <div className="w-16 rounded-full">
                <img src={client3} alt="" />
              </div>
            </div>
          </div>
          <div className="stat-value">DX</div>

          <div className="stat-desc text-secondary">
            31% increase of purchase
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
