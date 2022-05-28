import React from 'react';
import { toast } from 'react-toastify';

const Subscribe = () => {
  const onSubmit = (e) => {
    if (e.target.email.value) {
      toast.success('Your email is send. We will contact you soon.');
      return false;
    }
  };
  return (
    <div className="alert shadow-lg mb-11">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-info flex-shrink-0 w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <div>
          <h3 className="font-bold uppercase">For any Information!</h3>
          <div className="text-xs">Subscribe us we will contact you.</div>
        </div>
      </div>
      <div className="flex-none">
        <form onSubmit={onSubmit} className="relative">
          <input
            type="text"
            name="email"
            placeholder="Your email"
            className="input input-bordered w-full pr-16"
            required
          />
          <input
            type="submit"
            value="Subscribe"
            className="btn btn-primary absolute top-0 right-0 rounded-l-none"
          />
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
