import React from 'react';

const Review = ({ review }) => {
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl mt-5">
      <div className="card-body">
        <p>
          <b>Review: </b>
          {review?.description?.slice(0, 130)}...
        </p>
        <div className="flex items-center">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
              <img src={review.img} alt="" />
            </div>
          </div>
          <div>
            <h4 className="text-xl">{review?.displayName}</h4>
            <p>
              <b>Ratings:</b> ({review?.ratings})
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
