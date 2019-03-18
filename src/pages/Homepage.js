import React, { Component } from 'react';

import BaseHeader from 'components/Common/Header/BaseHeader';
import ProfileCard from 'components/Homepage/ProfileCard';
import ShareCard from 'components/Homepage/ShareCard';

class Homepage extends Component {
  render() {
    return (
      <div className="App">
        <BaseHeader />
        <div className="base-content">
          <div className="column-1">
            <ProfileCard />
          </div>
          <div className="column-2 px-3">
            <ShareCard />
            <div className="sort-homepage">
              <hr/>
              <span className="text-muted mr-1">Sort by:</span>
              Top
              <i className="fa fa-caret-down text-muted fa-lg ml-1" aria-hidden="true"></i>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className="column-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
