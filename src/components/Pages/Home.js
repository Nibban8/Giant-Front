import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Header,Grid,Button,Icon} from "semantic-ui-react"
import './styles.css';


export default class Home extends Component {
  render() {
    return (
      <>
      <Grid verticalAlign='bottom' columns={2}>
          <Header
            as='h1'
            id='Titulo'
          >
            Ensambles a tu medida
          </Header>
          <Header
            as='h2'
            inverted
            id='subTitulo'
            
          >
            Arma tu PC al instante y recibe una cotización completamente
            <Header  style={{fontSize:'3rem'}} inverted id='gratis'>GRATIS</Header>
          </Header>
          <Button as={Link} primary size='huge' to={'/cotizar'} id='boton'>
            PROBAR AHORA
            <Icon className='right arrow' />
          </Button>
      </Grid>
      </>
    );
  }
}
