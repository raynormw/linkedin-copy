import React from 'react';

const RecommendCard = () => {
  return (
    <div className="card rounded-0 shadow">
      <div className="card-body p-2">
        <div className="d-flex justify-content-between align-items-center">
          <p className="fs-14 mb-0">
            Add to your feed
          </p>
          <i className="fa fa-info-circle fa-lg" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
}

export default RecommendCard;
