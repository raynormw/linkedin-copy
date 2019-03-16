import React from 'react';
import { Link } from 'react-router-dom';

const BaseButton = (props) => {
  if(props.to) {
    return (
      <Link to={props.to} type={props.type} className={props.className}>
        {props.children}
      </Link>
    );
  }

  return (
    <button type={props.type} className={props.className}>
      {props.children}
    </button>
  );
}

export default BaseButton;
