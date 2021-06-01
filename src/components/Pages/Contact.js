import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Button } from 'semantic-ui-react';

export default function Contact() {
  const data = {
    equipo: [
      '4KpS17pxcuJ2HTfFZlE9',
      '6H0QCmHsKMxv6C2Hk5dN',
      'AWZEV4Twaeqb5vKZzStn',
    ],
  };

  const makePayment = (token) => {
    const body = {
      token,
      data,
    };

    const headers = {
      'Content-Type': 'application/json',
    };

    // https://giant-ensambles.herokuapp.com/payment

    return fetch(`https://giant-ensambles.herokuapp.com/payment`, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log('RESPONSE ', response);
        const { status } = response;
        console.log('STATUS ', status);
      })
      .catch((err) => console.log(err));
  };

  return (
    <StripeCheckout
      stripeKey='pk_test_51IujvAIqOpiH1XDDENLMzBB13hlBmoIdSsfU9fRAqGl3vbRtXRSp6wUzSCbtzot9CLdrEpRUwzJueomQQrutCaX00008spOYCP'
      token={makePayment}
      name='Dame dineros'
      //  amount={product.price * 100}
      currency='MXN'
      shippingAddress
      bitcoin
    >
      <Button>Dame muchos dineros</Button>
    </StripeCheckout>
  );
}
