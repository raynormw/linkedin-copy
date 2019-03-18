import React, { Component } from 'react';

import ListItem from 'components/Common/Footer/ListItem';

class BaseFooter extends Component {
  state = {
    list1: [
      "About",
      "Careers",
      "Advertising",
      "Mobile"
    ]
  };

  render() {
    let list1 = this.state.list1.map((item, index) => {
      return (
        <ListItem key={index} text={item} />
      )
    });

    return (
      <div className="base-footer">
        <p className="font-weight-bold fs-18">
          Linked
          <i className="fa fa-linkedin icon-footer"></i>
        </p>
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col">
                {list1}
              </div>
              <div className="col"></div>
              <div className="col"></div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    );
  }
}

export default BaseFooter;
