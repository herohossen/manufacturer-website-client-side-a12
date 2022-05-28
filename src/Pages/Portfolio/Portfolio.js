import React from 'react';
import PageTitle from '../Shared/PageTitle';

const Portfolio = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <PageTitle title={'Protfolio'}></PageTitle>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-3xl font-bold uppercase">Md Delowar Hossen</h1>
          <p>
            <b>Email: </b>delowarhossen1224@gmail.com
          </p>
          <h3 className="text-xl font-bold uppercase mt-3">Skill</h3>
          <div className="divide divide-x-2"></div>
          <p className="">
            <b>Expertise: </b>JavaScript, ES6, React, HTML5, CSS3, Bootstrap-5.{' '}
            <br />
            <b>Comfortable: </b>MongoDB, Node.js, Express.js, Firebase, Axios,
            Redux. <br /> <b>Tools: </b>GitHub, VS Code, Chrome Dev Tools,
            Heroku, Netlify, Figma
          </p>
          <h3 className="text-xl font-bold uppercase mt-3">Education</h3>
          <p>
            Master of Business Administration (MBA) 2 year. <br /> Department of
            Finance
            <br /> Bangladesh University of Business and Technology (BUBT)
            <br />
            Session : 2020-2021
          </p>
          <h3 className="text-xl font-bold uppercase mt-3">
            Project Live Site Link
          </h3>
          <p>https://inventory-management-a11-1b6ab.web.app/</p>
          <p>https://digital-camera.netlify.app/</p>
          <p>https://book-shelf-a9.netlify.app/</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
