import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>Course Administration</h1>
    <p>React, Redux and React Router for ultra-responsive web apps.</p>
    <Link to="about" className="btn btn-outline-secondary btn-large">Learn more</Link>
  </div>
);

export default HomePage;