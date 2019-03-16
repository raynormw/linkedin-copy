import React from 'react';
import BaseButton from 'components/Common/BaseButton';

const NoMatch = ({ location }) => {
  return (
    <div className="container">
    <h2 className="title">404</h2>
    <h3 className="subtitle">Uh oh, there is nothing here..</h3>
    <BaseButton to="/" type="button" className="btn btn-outline-primary">
      Back to Home
    </BaseButton>
  </div>
  );
}

export default NoMatch;
