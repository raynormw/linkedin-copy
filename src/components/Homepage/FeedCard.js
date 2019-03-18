import React from 'react';

import imgModal from 'assets/img/modalrakyat.jpeg';
import ImageRounded from 'components/Common/ImageRounded';
import BaseButton from 'components/Common/BaseButton';

const FeedCard = () => {
  return (
    <div className="card rounded-0 shadow">
      <div className="card-body py-3">
        <div className="row">
          <div className="col-md-2 pr-0">
            <ImageRounded
              className="rounded-circle"
              src="http://i.pravatar.cc/48"
              alt="avatar-feed"
              width="48"
              height="48"
            />
          </div>
          <div className="col-md-8 p-0">
            <p className="font-weight-bold mb-0">Wijardi Lorens</p>
            <p className="text-muted mb-0">Founder at OKTAGON</p>
            <p className="text-muted">1d</p>
          </div>
          <div className="col-md-2 dot-feed">
            <i className="fa fa-ellipsis-h fa-lg" aria-hidden="true"></i>
          </div>
        </div>
        <div className="card">
          <img src={imgModal} className="card-img-top" alt="feed" />
          <div className="card-body p-2">
            <p className="font-weight-bold fs-14 mb-0">Modal Rakyat has been certified with a full-scope ISO 27001 : 2013</p>
            <p className="text-muted mb-0">modalrakyat.id</p>
          </div>
        </div>
        <p className="text-muted border-bottom mt-2 mb-1 pb-2">9999 like</p>
        <div>
          <BaseButton to="/" type="button" className="text-muted feed-link">
            <i className="fa fa-thumbs-o-up fa-lg fa-flip-horizontal mr-2" aria-hidden="true"></i>
            <span className="fa-flip-horizontal">Like</span>
          </BaseButton>
          <BaseButton to="/" type="button" className="text-muted feed-link">
            <i className="fa fa-commenting-o fa-flip-horizontal fa-lg mr-2" aria-hidden="true"></i>
            <span className="fa-flip-horizontal">Comment</span>
          </BaseButton>
          <BaseButton to="/" type="button" className="text-muted feed-link">
            <i className="fa fa-share fa-lg mr-2" aria-hidden="true"></i>
            <span className="fa-flip-horizontal">Share</span>
          </BaseButton>
        </div>
      </div>
    </div>
  );
}

export default FeedCard;
