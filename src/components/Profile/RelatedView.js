import React, { Component } from 'react';

import ImageRounded from 'components/Common/ImageRounded';

class RelatedView extends Component {
  state = {
    lists: [
      { name: "Rinto Priambodo", con: " 2nd", title: "Software Development Manager" },
      { name: "Elysa Chen", con: " 2nd", title: "Computer Science Lecturer at Bina Nusantara University" },
      { name: "Alvin Tanjaya", con: " 1st", title: "Technology Specialist and Co-Founder of PT. Jakmall Digital Niaga (JAKMALL.COM)" },
      { name: "Derwin Suhartono", con: " 2nd", title: "Head of Computer Science Program at Bina Nusantara University" },
    ]
  };

  render() {
    let lists = this.state.lists.map((list, index) => {
      return (
        <div className="row mb-2">
          <div className="col-md-3">
            <ImageRounded
              className="rounded-circle"
              src="http://i.pravatar.cc/56"
              alt="avatar-feed"
              width="56"
              height="56"
            />
          </div>
          <div className="col-md-9 pl-0 pr-4">
            <p className="font-weight-bold fs-14 mb-0">
              {list.name}
              <span className="related-con text-muted fs-12 ml-1">
                {list.con}
              </span>
            </p>
            <p className="mb-0">{list.title}</p>
          </div>
        </div>
      );
    });

    return (
      <div className="related">
        <p className="fs-14">People Also Viewed</p>
        {lists}
      </div>
    );
  }
}

export default RelatedView;
