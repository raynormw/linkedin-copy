import React, { Component } from 'react';

class BaseHeader extends Component {
  render() {
    return (
      <nav className="navbar fixed-top base-header pl-5 pr-5">
        <form className="form-inline ml-4">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" />
            <div className="input-group-prepend">
              <button type="button" className="btn btn-outline-info">Primary</button>
            </div>
          </div>
        </form>
        <ul className="nav mr-2">
          <li className="nav-item">
            <a className="nav-link active" href="#">Active</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default BaseHeader;
