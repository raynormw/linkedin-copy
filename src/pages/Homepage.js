import React, { Component } from 'react';

import BaseHeader from 'components/Common/Header/BaseHeader';
import BaseButton from 'components/Common/BaseButton';
import ImageRounded from 'components/Common/ImageRounded';

class Homepage extends Component {
  render() {
    return (
      <div className="App">
        <BaseHeader />
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
            src="http://i.pravatar.cc/300"
            alt="avatar"
            width="300"
            height="300"
          />
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
        <div className="App-header">
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
          <br/>
          <BaseButton type="button" className="btn btn-primary">
            Primary
          </BaseButton>
          <br/><br/>
          <button type="button" className="btn btn-warning rounded-0">Warning</button><br/><br/>
          <button type="button" className="btn btn-success">Success</button><br/><br/>
          <BaseButton to="/profile" type="button" className="btn btn-outline-primary">
            Go to Profile
          </BaseButton>
        </div>
      </div>
    );
  }
}

export default Homepage;
