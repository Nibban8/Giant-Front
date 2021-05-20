import React, { Component, Fragment } from 'react';
import Steps from '../Steps/Steps';
import Pdf from '../Pdf/Pdf';
//import { Parts } from '.././Parts/Parts';
//import { Header, Grid, Button, Icon } from 'semantic-ui-react';

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
