import React from 'react';

import BaseButton from 'components/Common/BaseButton';

const ListItem = (props) => {
  return (
    <BaseButton type="button" to="/" className="list-footer">
      <p className="mb-0">{props.text}</p>
    </BaseButton>
  );
}

export default ListItem;
