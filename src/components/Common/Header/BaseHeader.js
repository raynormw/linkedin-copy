import React, { Component } from 'react';

import BaseButton from 'components/Common/BaseButton';
import NavItem from 'components/Common/Header/NavItem';

class BaseHeader extends Component {
  state = {
    items: [
      { text: "Home", link: "/", className: "fa fa-home fa-2x", linkClass: "nav-url-active"},
      { text: "My Network", link: "/", className: "fa fa-home fa-2x", linkClass: "nav-url"},
      { text: "Jobs", link: "/", className: "fa fa-home fa-2x", linkClass: "nav-url"},
      { text: "Messaging", link: "/", className: "fa fa-home fa-2x", linkClass: "nav-url"},
      { text: "Notifications", link: "/", className: "fa fa-home fa-2x", linkClass: "nav-url"},
    ]
  }

  render() {
    let items = this.state.items.map((item, index) => {
      return (
        <NavItem
          key={index}
          text={item.text}
          link={item.link}
          className={item.className}
          linkClass={item.linkClass}
        />
      )
    });

    return (
      <nav className="navbar fixed-top base-header pl-5 pr-5">
        <form className="form-inline ml-4">
          <BaseButton to="/" type="button" className="btn btn-primary icon-li">
            <i className="fa fa-linkedin fa-2x"></i>
          </BaseButton>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" />
            <div className="input-group-prepend">
              <button type="button" className="btn btn-outline-info">Primary</button>
            </div>
          </div>
        </form>
        <ul className="nav mr-2">
          {items}
          <li className="nav-item text-center lh-8">
            <BaseButton to="/" type="button" className="nav-url">
              <i className="fa fa-home fa-2x" aria-hidden="true"></i>
              <p className="mb-0"><small>Navitestes</small></p>
            </BaseButton>
          </li>
          <li className="nav-item text-center lh-8">
            <BaseButton to="/" type="button" className="nav-url">
              <i className="fa fa-home fa-2x" aria-hidden="true"></i>
              <p className="mb-0"><small>Navitestes</small></p>
            </BaseButton>
          </li>
          <li className="nav-item text-center lh-8">
            <BaseButton to="/" type="button" className="nav-url">
              <i className="fa fa-home fa-2x" aria-hidden="true"></i>
              <p className="mb-0"><small>Navitestes</small></p>
            </BaseButton>
          </li>
        </ul>
      </nav>
    );
  }
}

export default BaseHeader;
