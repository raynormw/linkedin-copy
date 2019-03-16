import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import BaseButton from '../components/Common/BaseButton';

class Homepage extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-light bg-light">
          <form className="form-inline">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" />
              <div className="input-group-prepend">
                <button type="button" className="btn btn-outline-info">Primary</button>
              </div>
            </div>
          </form>
        </nav>
        <header className="App-header">
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
        </header>
      </div>
    );
  }
}

export default Homepage;
