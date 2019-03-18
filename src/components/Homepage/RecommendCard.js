import React, { Component } from 'react';

import ImageRounded from 'components/Common/ImageRounded';
import BaseButton from 'components/Common/BaseButton';

class RecommendCard extends Component {
  state = {
    lists: [
      { name: "Max Levchin", title: "Co-Founder & CEO at Affirm, Inc" },
      { name: "Shopee", title: "Company - Internet" },
      { name: "Software Engineering", title: "Topic" }
    ]
  };

  render() {
    let lists = this.state.lists.map((list, index) => {
      return (
        <div className="row align-items-center my-2 pl-1">
          <div className="col-md-3 pr-1">
            <ImageRounded
              className="rounded-circle"
              src="http://i.pravatar.cc/48"
              alt="avatar-feed"
              width="48"
              height="48"
            />
          </div>
          <div className="col-md-5 p-0">
            <p className="font-weight-bold mb-0">{list.name}</p>
            <p className="text-muted mb-0">{list.title}</p>
          </div>
          <div className="col-md-4 pl-1">
            <BaseButton
              to="/"
              type="button"
              className="btn btn-outline-dark rounded-0 py-1 fs-12"
            >
              <i className="fa fa-plus mr-2"></i>
              Follow
            </BaseButton>
          </div>
        </div>
      );
    });

    return (
      <div className="card rounded-0 shadow">
        <div className="card-body p-2">
          <div className="d-flex justify-content-between align-items-center">
            <p className="fs-14 mb-0 pl-1">
              Add to your feed
            </p>
            <i className="fa fa-info-circle fa-lg" aria-hidden="true"></i>
          </div>
          {lists}
          <a href="/" className="pl-1">View all recommendations</a>
        </div>
      </div>
    );
  }
}

export default RecommendCard;
