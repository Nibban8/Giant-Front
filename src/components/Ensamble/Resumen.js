import React, { useContext } from 'react';
import { Button, Label, Table } from 'semantic-ui-react';
import StripeCheckout from 'react-stripe-checkout';
import logo from '../Navbar/giant.png';

import history from '../../history';

import html2pdf from 'html2pdf.js';
import { EnsambleContext } from './EnsambleContext';

//import { loadStripe } from '@stripe/stripe-js';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// const stripePromise = loadStripe(
//   'pk_test_51IujvAIqOpiH1XDDENLMzBB13hlBmoIdSsfU9fRAqGl3vbRtXRSp6wUzSCbtzot9CLdrEpRUwzJueomQQrutCaX00008spOYCP'
// );

export default function Resumen() {
  const { ensamble } = useContext(EnsambleContext);
  let precioTotal = 0;

  const getPDF = () => {
    const table = document.getElementById('tabla');
    html2pdf().from(table).save();
  };

  const getDate = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    return today;
  };

  const makePayment = (token) => {
    let data = {
      equipo: [],
    };

    Object.values(ensamble).forEach((part) => {
      if (part.id) {
        data.equipo.push(part.id);
      }
    });

    const body = {
      token,
      data,
    };

    const headers = {
      'Content-Type': 'application/json',
    };

    // https://giant-ensambles.herokuapp.com/payment

    return fetch(`http://localhost:5000/payment`, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log('RESPONSE ', response);
        const { status } = response;
        console.log('STATUS ', status);
        history.push('/finalizada');
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {(precioTotal = 0)}
      <div id='tabla'>
        <img alt='logo' src={logo} />
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Concepto</Table.HeaderCell>
              <Table.HeaderCell>Unidades</Table.HeaderCell>
              <Table.HeaderCell>Costo</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {Object.entries(ensamble).map((e) => {
              if (e[1] !== '') {
                precioTotal += parseInt(e[1].precio);
                return (
                  <Table.Row>
                    <Table.Cell>{e[1].nombre}</Table.Cell>
                    <Table.Cell>1</Table.Cell>
                    <Table.Cell>${e[1].precio}</Table.Cell>
                  </Table.Row>
                );
              }
              return null;
            })}
            <Table.Row>
              <Table.Cell></Table.Cell>
              <Table.Cell>Costo total</Table.Cell>
              <Table.Cell>${precioTotal}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <Label color='blue' style={{ float: 'right' }}>
          Cotización hecha el dia: {getDate()}
        </Label>
      </div>
      <div style={{ paddingTop: '10px' }}>
        <Button size='large' primary onClick={getPDF}>
          Descargar PDF
        </Button>

        <StripeCheckout
          stripeKey='pk_test_51IujvAIqOpiH1XDDENLMzBB13hlBmoIdSsfU9fRAqGl3vbRtXRSp6wUzSCbtzot9CLdrEpRUwzJueomQQrutCaX00008spOYCP'
          token={makePayment}
          name='Ensamble a tu medida'
          amount={precioTotal * 100}
          currency='MXN'
          shippingAddress
          bitcoin
        >
          <Button size='large' secondary>
            Pagar
          </Button>
        </StripeCheckout>
      </div>
    </>
  );
}
