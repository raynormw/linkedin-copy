import React from 'react';

import BaseButton from 'components/Common/BaseButton';

const NavItem = (props) => {
  return (
    <li className="nav-item text-center lh-16 pt-1">
      <BaseButton to={props.link} type="button" className={props.linkClass}>
        <i className={props.className} aria-hidden="true"></i>
        <p className="mb-0"><small>{props.text}</small></p>
      </BaseButton>
    </li>
  );
}

export default NavItem;
