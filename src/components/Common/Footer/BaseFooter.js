import React, { Component } from 'react';

import ListItem from 'components/Common/Footer/ListItem';

class BaseFooter extends Component {
  state = {
    list1: [ "About", "Careers", "Advertising", "Mobile" ],
    list2: [ "Talent Solutions", "Marketing Solutions", "Sales Solutions", "Small Business" ],
    list3: [ "Community Guidelines", "Privacy & Terms", "Send feedback", "Safety Center" ],
  };

  render() {
    let list1 = this.state.list1.map((item, index) => {
      return (
        <ListItem key={index} text={item} />
      )
    });

    let list2 = this.state.list2.map((item, index) => {
      return (
        <ListItem key={index} text={item} />
      )
    });

    let list3 = this.state.list3.map((item, index) => {
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
              <div className="col-md-3">
                {list1}
              </div>
              <div className="col">
                {list2}
              </div>
              <div className="col-md-5">
                {list3}
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col-md-8">
                <div className="d-flex list-icon mb-4">
                  <i class="fa fa-question-circle-o fa-lg" aria-hidden="true"></i>
                  <div className="list-icon-text">
                    <p>Questions?</p>
                    <p className="text-muted fs-12 mb-0">Visit our Help Center.</p>
                  </div>
                </div>
                <div className="d-flex list-icon">
                  <i class="fa fa-cog fa-lg" aria-hidden="true"></i>
                  <div className="list-icon-text">
                    <p>Manage your account and privacy.</p>
                    <p className="text-muted fs-12 mb-0">Go to your Settings.</p>
                  </div>
                </div>
              </div>
              <div className="col"></div>
            </div>
          </div>
        </div>
        <p className="text-muted fs-14 mt-3">LinkedIn Corporation &copy; 2018</p>
      </div>
    );
  }
}

export default BaseFooter;
