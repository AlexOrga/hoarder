import React from 'react';

import authRequests from '../../firebaseRequests/auth';
import MyStuffRequest from '../../firebaseRequests/mystuff';
import AllStuffRequest from '../../firebaseRequests/allstuff';
import AllStuffItem from '../AllStuffItem/AllStuffItem';
import './MyStuff.scss';

class MyStuff extends React.Component {
  state = {
    allStuff: [],
    myStuff: [],
  }

  componentDidMount () {
    MyStuffRequest
      .getRequest(authRequests.getUid())
      .then((myStuff) => {
        this.setState({myStuff: myStuff});
        AllStuffRequest
          .getRequest()
          .then(allStuff => {
            this.setState({allStuff: allStuff});
          })
          .catch(err => {
            console.error('error retrieving all stuff for my stuff', err);
          });
      })
      .catch((err) => {
        console.error('Error retrieving my stuff', err);
      });
  }
  render () {
    const myStuffComponent = this.state.myStuff.map(item => {
      return (
        <AllStuffItem
          key={item.id}
          details={item}
        />
      );
    });
    return (
      <div>
        {myStuffComponent}
      </div>
    );
  }
}

export default MyStuff;
