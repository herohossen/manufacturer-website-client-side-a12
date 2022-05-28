import React from "react";
import { toast } from "react-toastify";
import PageTitle from "../Shared/PageTitle";

const UserReview = () => {
  const handleReviewSubmit = (e) => {
    if (e.target.ratings.value > 5) {
      toast.error("Ratings can not be greater than 5");
      return false;
    } else if (e.target.ratings.value < 1) {
      toast.error("Ratings can not be less than 1");
      return false;
    }
    const displayName = e.target.name.value;
    const description = e.target.description.value;
    const ratings = parseInt(e.target.ratings.value);
    const img = e.target.image.value;
    const email = e.target.email.value;
    const review = {
      displayName,
      description,
      ratings,
      img,
      email,
    };
    console.log(review);
    fetch("http://localhost:8888/reviews", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log('Success:', data);
        e.target.reset();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <PageTitle title={"review"}></PageTitle>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-accent">Your Review!</h1>
          <p className="py-6 text-lg">
            Dear User, We provide the best service to our customers. We make the
            best product in the world. Also, we want to improve our product and
            service for our customers. Please give a review about our product
            and service, where we can improve our product and service. We will
            try our best to make our product more valuable for you. Thank you.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleReviewSubmit}>
              <div className="form-control">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-2">
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-2">
                <input
                  type="text"
                  name="ratings"
                  placeholder="Ratings"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-2">
                <input
                  type="text"
                  name="image"
                  placeholder="Images Link"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-2">
                <textarea
                  name="description"
                  placeholder="Review"
                  className="textarea textarea-bordered"
                  required
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <input type="submit" className="btn btn-accent" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReview;
