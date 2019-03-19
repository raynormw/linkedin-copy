import React, { Component } from 'react';

import ImageRounded from 'components/Common/ImageRounded';
import BaseButton from 'components/Common/BaseButton';

class ProfileSection extends Component {
  state = {
    buttons: [
      { label: "Connect", className: "btn btn-primary rounded-0 fs-12 py-1 mr-1" },
      { label: "InMail", className: "btn btn-outline-primary rounded-0 fs-12 py-1 mr-1 w-75px" },
      { label: "More...", className: "btn btn-outline-secondary rounded-0 fs-12 py-1 w-75px" }
    ],
    icons: [
      { text: "Binus International University", className: "fa fa-building-o fa-lg mr-2" },
      { text: "Universitas Bina Nusantara (Binus)", className: "fa fa-address-card-o fa-lg mr-2" },
      { text: "See contact info", className: "fa fa-address-book-o fa-lg mr-2" },
      { text: "500+ connections", className: "fa fa-users fa-lg mr-2" },
    ]
  };

  render() {
    let buttons = this.state.buttons.map((btn, index) => {
      return (
        <BaseButton
          key={index}
          to="/"
          type="button"
          className={btn.className}
        >
          {btn.label}
        </BaseButton>
      );
    });

    let icons = this.state.icons.map((icon, index) => {
      return (
        <p key={index} className="fs-14">
          <i className={icon.className} aria-hidden="true"></i>
          {icon.text}
        </p>
      )
    });

    return (
      <div className="profile-section card rounded-0 shadow">
        <div className="img-section">
          &nbsp;
        </div>
        <div className="card-body">
          <ImageRounded
            className="avatar-section rounded-circle shadow"
            src="http://i.pravatar.cc/128"
            alt="avatar"
            width="128"
            height="128"
          />
          <div className="d-flex justify-content-between border-bottom pb-3">
            <div>
              <h5>
                Christian Hanggara
                <span className="profile-con text-muted fs-12 ml-1">
                  &nbsp;2nd
                </span>
              </h5>
              <p className="fs-14 mb-0">Laboratory Coordinator</p>
              <p className="text-muted">Indonesia</p>
              {buttons}
            </div>
            <div>
              {icons}
            </div>
          </div>
          <div className="fs-14 mt-2">
            An experienced programmer in various fields of computer science including
            game development, web application, computational intelligence, interactive
            multimedia application, etc. A fast learner who can quickly adapt to the new
            concepts and technology. Have the ability to design a good system archite...
          </div>
        </div>
        <div className="border-top text-center fs-14 py-2">
          <a href="/">
            Show more
            <i className="fa fa-angle-down ml-2" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default ProfileSection;
