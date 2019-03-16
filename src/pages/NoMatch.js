import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = ({ location }) => {
  return (
    <div className="container">
    <h2 className="title">404</h2>
    <h3 className="subtitle">Uh oh, there is nothing here..</h3>
    <Link to="/">
      <button className="btn btn-outline-primary">
        Back to Home
      </button>
    </Link>
  </div>
  );
}

export default NoMatch;
