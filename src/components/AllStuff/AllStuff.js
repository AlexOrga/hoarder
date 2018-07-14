import React from 'react';

import allStuffRequest from '../../firebaseRequests/allstuff';
import AllStuffItem from '../AllStuffItem/AllStuffItem';
import './AllStuff.scss';

class AllStuff extends React.Component {
  state = {
    allStuff: [],
  }

  componentDidMount () {
    allStuffRequest
      .getRequest()
      .then((allStuff) => {
        this.setState({allStuff: allStuff});
      })
      .catch((err) => {
        console.error('Error retrieving all stuff', err);
      });
  }

  render () {
    const allStuffComponents = this.state.allStuff.map((item) => {
      return (
        <AllStuffItem
          key={item.id}
          details={item}
        />
      );
    });
    return (
      <div>
        {allStuffComponents}
      </div>
    );
  }
}

export default AllStuff;
