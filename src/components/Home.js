import React, { Component } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <h3>
        Welcome To <span> Interview</span>-Questions.com
      </h3>
      <div className="box">
        <div className="box-items">
          <h1>Pick subject</h1>
          <div className="buttons">
            <Link to="/node">
              <button>Node.js</button>
            </Link>
            <Link to="/react">
              <button>React.js</button>
            </Link>
            <Link to="/devlopers">
              <button>For Devlopers</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
