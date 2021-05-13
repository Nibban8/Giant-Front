import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Header,Grid,Button,Icon} from "semantic-ui-react"

export default class Home extends Component {
  
  render() {
    return (
      <>
      <Grid  columns={2}>
        <Grid.Column>
          <Header
            as='h1'
            inverted
            style={{
              fontFamily:'Press Start 2P',
              fontWeight: 400,
              fontSize:'6rem',
              marginBottom: 0,
            }}
          >
            Ensambles a tu medida
          </Header>
          <Header
            as='h2'
            inverted
            style={{
              fontSize:'3rem',
              fontWeight: 'normal',
            }}
          >Arma tu PC al instante y recibe una cotización completamente
            <Header  style={{fontSize:'3rem'}} inverted color="teal">GRATIS</Header>
          </Header>
          <Button as={Link} primary size='huge' to={'/cotizar'}>
            PROBAR AHORA
            <Icon className='right arrow' />
          </Button>
        </Grid.Column>
      </Grid>
      </>
    );
  }
}
