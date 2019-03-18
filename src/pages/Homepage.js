import React, { Component } from 'react';

import BaseHeader from 'components/Common/Header/BaseHeader';
import BaseFooter from 'components/Common/Footer/BaseFooter';
import ProfileCard from 'components/Homepage/ProfileCard';
import ShareCard from 'components/Homepage/ShareCard';
import FeedCard from 'components/Homepage/FeedCard';
import RecommendCard from 'components/Homepage/RecommendCard';

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
            <FeedCard />
          </div>
          <div className="column-3">
            <RecommendCard />
          </div>
        </div>
        <BaseFooter />
      </div>
    );
  }
}

export default Homepage;
