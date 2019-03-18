import React from 'react';

import ImageRounded from 'components/Common/ImageRounded';

const ProfileCard = () => {
  return (
    <div className="card text-center rounded-0 shadow">
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
          <p className="avatar-number mb-0">80</p>
          <p className="text-muted">Who's viewed your profile</p>
          <p className="avatar-number border-top pt-3 mb-0">1,133</p>
          <p className="text-muted mb-0">Connections</p>
          <p className="font-weight-bold mb-1">Manage your network</p>
        </li>
        <li className="list-group-item bg-light px-2">
          <p className="text-muted mb-0">Access exclusive tools & insights</p>
          <p className="font-weight-bold mb-0">
            Free Upgrade to Premium
          </p>
        </li>
      </ul>
    </div>
  );
}

export default ProfileCard;
