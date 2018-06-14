import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';

class BurguerBuilder extends Component{
  render() {
    return (
      <React.Fragment>
        <Burger/>
        <div>Build Controls</div>
      </React.Fragment>
    );
  }
}

export default BurguerBuilder;