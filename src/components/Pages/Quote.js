import React, { Component, Fragment } from 'react';
import Steps from '../Steps/Steps';
import Pdf from '../Pdf/Pdf';

export default class Quote extends Component {
  render() {
    return (
      <Fragment>
        <Steps />
        <Pdf />
      </Fragment>  
    );
  }
}
