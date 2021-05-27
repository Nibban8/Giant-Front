import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header, Grid, Icon } from 'semantic-ui-react';
import './styles.css';
import checkmark from '../../img/checkmark.png';

export default class Finalizada extends Component {
  render() {
    return (
      <>
        <Grid columns={2} divided centered>
          <Grid.Row>
            <Header as='h1' id='Encabezado'>
              Muchas gracias por tu compra, en breve recibiras un correo
              electronico con la cotizacion☻
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
          <Grid.Row>
            <img src={checkmark} alt='checkmark' />
          </Grid.Row>

          <Grid.Row>
            <p id='mensaje_correo'>
              No recibiste el correo?
              <Link style={{ textDecoration: 'underline' }} to='/'>
                Haz click aqui!
              </Link>
            </p>
          </Grid.Row>
        </Grid>
      </>
    );
  }
}
