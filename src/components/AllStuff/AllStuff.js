import React from 'react';

import allStuffRequest from '../../firebaseRequests/allstuff';
import AllStuffItem from '../AllStuffItem/AllStuffItem';
import authRequests from '../../firebaseRequests/auth';
import './AllStuff.scss';

class AllStuff extends React.Component {
  state = {
    allStuff: [],
    savedItem: {
      uid: '',
      id: '',
    },
  }

  saveItem = (itemID) => {
    const newSavedItem = {...this.state.savedItem};
    newSavedItem.uid = authRequests.getUid();
    newSavedItem.id = itemID;
    this.setState({savedItem: newSavedItem});
    allStuffRequest
      .saveItem(newSavedItem)
      .then(() => {
        console.error('SUCCESS!');
      })
      .catch((err) => {
        console.error('error posting saved item', err);
      });
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
          saveItem={this.saveItem}
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
