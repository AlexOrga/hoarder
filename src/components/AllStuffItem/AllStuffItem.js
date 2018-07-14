import React from 'react';

import './AllStuffItem.css';

class AllStuffItem extends React.Component {
  render () {
    const {details} = this.props;
    return (
      <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
          <img src={details.itemImage} alt="..." />
          <div className="caption">
            <h3>{details.itemName}</h3>
            <p>{details.itemDescription}</p>
            <p><a href="" className="btn btn-primary" role="button">Save To My Stuff</a></p>
          </div>
        </div>
      </div>
    );
  }
}

export default AllStuffItem;
