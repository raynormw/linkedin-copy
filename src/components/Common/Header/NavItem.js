import React from 'react';

import BaseButton from 'components/Common/BaseButton';

const NavItem = (props) => {
  return (
    <li className="nav-item text-center lh-8">
      <BaseButton to={props.url} type="button" className={props.linkClass}>
        <i className={props.className} aria-hidden="true"></i>
        <p className="mb-0"><small>{props.text}</small></p>
      </BaseButton>
    </li>
  );
}

export default NavItem;
