import React from 'react';

import BaseButton from 'components/Common/BaseButton';

const ShareCard = () => {
  return (
    <div className="card rounded-0 shadow">
      <div className="card-body pb-2">
        <p className="share-title">Share an article, photo, video or idea</p>
        <div className="row border-top mx-0">
          <div className="col-md-10 mt-2 p-0">
            <BaseButton
              type="button"
              className="btn btn-outline-dark rounded-pill fs-12 mr-1"
            >
              <i className="fa fa-pencil-square-o mr-2"></i>
              Write an article
            </BaseButton>
            <BaseButton
              type="button"
              className="btn btn-outline-dark rounded-pill fs-12 mr-1"
            >
              <i className="fa fa-camera mr-2"></i>
              Images
            </BaseButton>
            <BaseButton
              type="button"
              className="btn btn-outline-dark rounded-pill fs-12"
            >
              <i className="fa fa-video-camera mr-2"></i>
              Video
            </BaseButton>
          </div>
          <div className="col-md-2 pr-0">
            <BaseButton type="button" className="btn btn-primary btn-post">
              Post
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShareCard;
