import React, { useContext } from 'react';
import { Button, Label, Table } from 'semantic-ui-react';
import logo from '../Navbar/giant.png';

import html2pdf from 'html2pdf.js';
import { EnsambleContext } from './EnsambleContext';

import { loadStripe } from '@stripe/stripe-js';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  'pk_test_51IujvAIqOpiH1XDDENLMzBB13hlBmoIdSsfU9fRAqGl3vbRtXRSp6wUzSCbtzot9CLdrEpRUwzJueomQQrutCaX00008spOYCP'
);

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

  const handlePay = async (event) => {
    const stripe = await stripePromise;

    let items = [];

    let data = {
      equipo: [],
    };

    Object.values(ensamble).forEach((part) => {
      if (part.id) {
        //items.push(part.precio);
        data.equipo.push(part.id);
      }
    });

    // Call your backend to create the Checkout Session
    const response = await fetch('http://localhost:5000/checkout', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const session = await response.json();

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
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

        <Button size='large' secondary onClick={handlePay}>
          Pagar
        </Button>
      </div>
    </>
  );
}
