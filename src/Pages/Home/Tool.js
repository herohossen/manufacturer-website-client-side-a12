import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
  const { _id, name, img, price, ratings, description, stock, quantity } = tool;
  const navigate = useNavigate();
  const handleBuyNowById = (id) => {
    navigate(`/purchase/${id}`);
  };
  return (
    <div className="card card-normal lg:max-w-lg bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Tool: {name}</h2>
        <p>
          Price Per Unit: $<b>{price}</b>
        </p>
        <p>Description: {description?.slice(0, 200)}...</p>
        <p>Ratings: ({ratings})</p>
        <p>
          Available Quantity: <b>{stock}</b> Unit
        </p>
        <p>
          Minimum Order Quantity: <b>{quantity}</b> Unit
        </p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleBuyNowById(_id)}
            className="btn btn-primary"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tool;