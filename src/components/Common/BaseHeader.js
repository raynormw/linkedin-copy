import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import BaseButton from 'components/Common/BaseButton';

class BaseHeader extends Component {
  state = {
    urls: [
      { text: "Home", link: "/", className: "fa fa-home fa-2x", linkClass: "nav-url-active"},
      { text: "My Network", link: "/", className: "nav-item text-center lh-8"},
      { text: "Jobs", link: "/", className: "nav-item text-center lh-8"},
      { text: "Messaging", link: "/", className: "nav-item text-center lh-8"},
      { text: "Notifications", link: "/", className: "nav-item text-center lh-8"},
    ]
  }

  render() {
    return (
      <nav className="navbar fixed-top base-header pl-5 pr-5">
        <form className="form-inline ml-4">
          <BaseButton to="/" type="button" className="btn btn-primary icon-li">
            <i class="fa fa-linkedin fa-2x"></i>
          </BaseButton>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" />
            <div className="input-group-prepend">
              <button type="button" className="btn btn-outline-info">Primary</button>
            </div>
          </div>
        </form>
        <ul className="nav mr-2">
          <li className="nav-item text-center lh-8">
            <Link to="/" type="button" className="nav-url-active">
              <i className="fa fa-home fa-2x" aria-hidden="true"></i>
              <p className="mb-0"><small>Home</small></p>
            </Link>
          </li>
          <li className="nav-item text-center lh-8">
            <i className="fa fa-home fa-2x" aria-hidden="true"></i>
            <p className="mb-0"><small>Home</small></p>
          </li>
          <li className="nav-item text-center lh-8">
            <Link to="/" type="button" className="nav-url">
              <i className="fa fa-home fa-2x" aria-hidden="true"></i>
              <p className="mb-0"><small>Home</small></p>
            </Link>
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
