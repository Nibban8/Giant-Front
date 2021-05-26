import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Header,Grid,Button,Icon, Segment, GridRow} from "semantic-ui-react"
import './styles.css';
import checkmark from '../../img/checkmark.png';

export default class Finalizada extends Component {
    render(){
  return (
    <>
    <Grid columns={2} divided centered >
      <Grid.Row>
     <Header
            as='h1'
            id='Encabezado'
          >
            Muchas gracias por tu compra, en breve recibiras un correo electronico con la cotizacion☻
            </Header>
            </Grid.Row>
            <p>
            <Icon color='teal' name='heart' size='big' />
            <Icon color='teal' name='heart' size='big' />
            <Icon color='teal' name='heart' size='big' />
            <Icon color='teal' name='heart' size='big' />
            <Icon color='teal' name='heart' size='big' />
            <Icon color='teal' name='heart' size='big' />
            <Icon color='teal' name='heart' size='big' />
            <Icon color='teal' name='heart' size='big' />
            <Icon color='teal' name='heart' size='big' />
            <Icon color='teal' name='heart' size='big' />
            <Icon color='teal' name='heart' size='big' />

         
            </p>
            <Grid.Row >
            <img src={checkmark}/>
            </Grid.Row>

            <Grid.Row>
              <p id='mensaje_correo'>No recibiste el correo? <a href='#' id='link'>Haz click aqui!</a></p>
            </Grid.Row>
      </Grid>       
          
      </>
  );
}
}
