import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Review from './Review';

const Reviews = () => {
  const {
    isLoading,
    error,
    data: reviews,
    refetch,
  } = useQuery('reviews', () =>
    fetch(`http://localhost:8888/reviews`).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <section className="my-28">
      <div className="flex justify-between">
        <div>
          <h4 className="text-xl text-primary font-bold pl-3">Reviews</h4>
          <h2 className="text-3xl pl-3">What Our Customers Say</h2>
        </div>
        {/* <div>
            <img src={quote} className="w-24 lg:w-48" alt="" />
        </div> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews?.slice(-3)?.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
