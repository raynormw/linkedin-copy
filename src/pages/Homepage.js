import React, { Component } from 'react';

import BaseHeader from 'components/Common/Header/BaseHeader';
import BaseButton from 'components/Common/BaseButton';
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
        <div className="base-content">
          <BaseButton type="button" className="btn btn-outline-primary rounded-pill">
            <i className="fa fa-times mr-2"></i>
            Rounded
          </BaseButton>
          <br/><br/>
          <button type="button" className="btn btn-success">Success</button><br/><br/>
          <BaseButton to="/profile" type="button" className="btn btn-outline-primary">
            <i className="fa fa-times mr-2"></i>
            Go to Profile
          </BaseButton>
        </div>
      </div>
    );
  }
}

export default Homepage;

//http://static.licdn.com/sc/h/3chad3rzxalsf65nuo7hxciac
