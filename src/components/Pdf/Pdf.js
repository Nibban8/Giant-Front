import React, { Component } from 'react'
import { Segment,Placeholder, Grid } from 'semantic-ui-react'
import ViewSDKClient from './SettingPdf';
export default class Pdf extends Component {
  componentDidMount() {
    const viewSDKClient = new ViewSDKClient();
    viewSDKClient.ready().then(() => {
      /* Invoke file preview */
      viewSDKClient.previewFile("pdf-div", {
        /* Pass the embed mode option here */
        embedMode: "SIZED_CONTAINER"
      });
    });
  }
    render() {
      return (
        <Grid centered columns={2}>
        <Grid.Column>
          <Segment raised>
                <div id="pdf-div" style={{ height:'100vh' }}></div>          
            </Segment>
          </Grid.Column>
          </Grid>
        )
    }
}
