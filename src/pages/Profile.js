import React, { Component } from 'react';

import BaseHeader from 'components/Common/Header/BaseHeader';
import BaseFooter from 'components/Common/Footer/BaseFooter';
import BaseButton from 'components/Common/BaseButton';

class Profile extends Component {
  render() {
    return (
      <div className="App">
        <BaseHeader />
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
