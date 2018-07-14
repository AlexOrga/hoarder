import React from 'react';

import './AllStuffItem.css';

class AllStuffItem extends React.Component {
  saveItemEvent = () => {
    this.props.saveItem(this.props.details.id);
  }

  render () {
    const {details} = this.props;

    return (
      <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
          <img src={details.itemImage} alt="..." />
          <div className="caption">
            <h3>{details.itemName}</h3>
            <p>{details.itemDescription}</p>
            <button className="btn btn-primary" onClick={this.saveItemEvent}>Save To My Stuff</button>
          </div>
        </div>
      </div>
    );
  }
}

export default AllStuffItem;
