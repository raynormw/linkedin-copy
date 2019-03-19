import React, { Component } from 'react';

import BaseHeader from 'components/Common/Header/BaseHeader';
import BaseFooter from 'components/Common/Footer/BaseFooter';
import BaseButton from 'components/Common/BaseButton';
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
        <header className="App-header">
          <p>
            This is Profile
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <br/>
          <button type="button" className="btn btn-primary">
            <i className="fa fa-address-book mr-2"></i>
            Primary
          </button>
          <br/><br/>
          <button type="button" className="btn btn-warning rounded-0">Warning</button><br/><br/>
          <button type="button" className="btn btn-success">Success</button><br/><br/>
          <BaseButton to="/" type="button" className="btn btn-outline-primary">
            <i className="fa fa-address-book mr-2"></i>
            Go to Home
          </BaseButton>
        </header>
        <BaseFooter />
      </div>
    );
  }
}

export default Profile;
