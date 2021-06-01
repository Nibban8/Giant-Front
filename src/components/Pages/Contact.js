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

    return fetch(`http://localhost:5000/payment`, {
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

// import React, { Component } from 'react';

// import StripeCheckout from 'react-stripe-checkout';

// import { loadStripe } from '@stripe/stripe-js';
// // Make sure to call `loadStripe` outside of a component’s render to avoid
// // recreating the `Stripe` object on every render.
// const stripePromise = loadStripe(
//   'pk_test_51IujvAIqOpiH1XDDENLMzBB13hlBmoIdSsfU9fRAqGl3vbRtXRSp6wUzSCbtzot9CLdrEpRUwzJueomQQrutCaX00008spOYCP'
// );

// export default class Contact extends Component {
//   render() {
//     return (
//       <div>
//         <button onClick={handleClick}>Dame dineros</button>
//       </div>
//     );
//   }
// }

// const handleClick = async (event) => {
//   // Get Stripe.js instance
//   const stripe = await stripePromise;

//   // datos

//   const data = {
//     equipo: [
//       '4KpS17pxcuJ2HTfFZlE9',
//       '6H0QCmHsKMxv6C2Hk5dN',
//       'AWZEV4Twaeqb5vKZzStn',
//     ],
//   };

//   // Call your backend to create the Checkout Session
//   const response = await fetch('http://localhost:5000/checkout', {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

//   const session = await response.json();

//   // When the customer clicks on the button, redirect them to Checkout.
//   const result = await stripe.redirectToCheckout({
//     sessionId: session.id,
//   });

//   if (result.error) {
//     // If `redirectToCheckout` fails due to a browser or network
//     // error, display the localized error message to your customer
//     // using `result.error.message`.
//   }
// };
