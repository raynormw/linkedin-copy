import React, { Component } from 'react';

import BaseHeader from 'components/Common/Header/BaseHeader';
import BaseFooter from 'components/Common/Footer/BaseFooter';
import ProfileSection from 'components/Profile/ProfileSection';
import RelatedView from 'components/Profile/RelatedView';


class Profile extends Component {
  render() {
    return (
      <div className="App">
        <BaseHeader />
        <div className="base-content">
          <div className="col-md-8 pl-0 pr-1">
            <ProfileSection />
          </div>
          <div className="col-md-4 px-3">
            <RelatedView />
          </div>
        </div>
        <BaseFooter />
      </div>
    );
  }
}

export default Profile;
