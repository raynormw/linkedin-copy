import React, { Component } from 'react';

import BaseHeader from 'components/Common/Header/BaseHeader';
import BaseButton from 'components/Common/BaseButton';
import ImageRounded from 'components/Common/ImageRounded';
import ProfileCard from 'components/Homepage/ProfileCard';

class Homepage extends Component {
  render() {
    return (
      <div className="App">
        <BaseHeader />
        <div className="base-content">
          <ProfileCard />
          <div className="column-2 px-3">
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
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <ImageRounded
            src="http://i.pravatar.cc/24"
            alt="avatar"
            width="24"
            height="24"
          />
          <br/>
          <BaseButton type="button" className="btn btn-primary">
            Primary
          </BaseButton>
          <br/><br/>
          <BaseButton type="button" className="btn btn-outline-primary rounded-pill">
            <i className="fa fa-times mr-2"></i>
            Rounded
          </BaseButton>
          <br/><br/>
          <button type="button" className="btn btn-warning rounded-0">
            <i className="fa fa-times"></i>
            Warning
          </button>
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
