import React from 'react';

import ImageRounded from 'components/Common/ImageRounded';

const ProfileCard = () => {
  return (
    <div className="column-1">
      <div className="card text-center">
        <div className="img-profile">
          &nbsp;
        </div>
        <div className="card-body pb-0">
          <ImageRounded
            className="rounded-circle avatar-profile"
            src="http://i.pravatar.cc/64"
            alt="avatar"
            width="64"
            height="64"
          />
          <h5>Christian Hanggara</h5>
          <p className="text-muted">Tech Enthusiast</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item px-2">
            <p>80</p>
            <p className="text-muted">Who's viewed your profile</p>
            <p className="border-top">1,133</p>
            <p className="text-muted">Connections</p>
            <p>Manage your network</p>
          </li>
          <li className="list-group-item px-2 text-muted">
            Access exclusive tools & insights
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProfileCard;
