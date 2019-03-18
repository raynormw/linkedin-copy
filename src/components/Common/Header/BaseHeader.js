import React, { Component } from 'react';

import BaseButton from 'components/Common/BaseButton';
import NavItem from 'components/Common/Header/NavItem';
import ImageRounded from 'components/Common/ImageRounded';

class BaseHeader extends Component {
  state = {
    items: [
      {
        text: "Home",
        link: "/",
        className: "fa fa-home fa-lg pt-1 pb-1",
        linkClass: "nav-url-active"
      },
      {
        text: "My Network",
        link: "/",
        className: "fa fa-users fa-lg pt-1 pb-1",
        linkClass: "nav-url"
      },
      {
        text: "Jobs",
        link: "/",
        className: "fa fa-briefcase fa-lg pt-1 pb-1",
        linkClass: "nav-url"
      },
      {
        text: "Messaging",
        link: "/",
        className: "fa fa-comments-o fa-lg pt-1 pb-1",
        linkClass: "nav-url"
      },
      {
        text: "Notifications",
        link: "/",
        className: "fa fa-bell-o fa-lg pt-1 pb-1",
        linkClass: "nav-url"
      },
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
          <li className="nav-item text-center lh-16 pt-1">
            <BaseButton to="/profile" type="button" className="nav-url">
              <ImageRounded
                className="rounded-circle"
                src="http://i.pravatar.cc/24"
                alt="avatar-header"
                width="24"
                height="24"
              />
              <p className="mb-0">
                <small>Me</small>
                <i className="fa fa-caret-down align-bottom ml-1 lh-12" aria-hidden="true"></i>
              </p>
            </BaseButton>
          </li>
          <li className="nav-item nav-work text-center lh-16 pt-1">
            <BaseButton to="/" type="button" className="nav-url">
              <i className="fa fa-th fa-lg pt-1 pb-1" aria-hidden="true"></i>
              <p className="mb-0">
                <small>Work</small>
                <i className="fa fa-caret-down align-bottom ml-1 lh-12" aria-hidden="true"></i>
              </p>
            </BaseButton>
          </li>
          <li className="text-center lh-12 nav-premi">
            <a href="/">Free Upgrade to Premium</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default BaseHeader;
