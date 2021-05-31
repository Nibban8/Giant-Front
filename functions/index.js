const functions = require("firebase-functions");
const firebase = require("firebase");

var firebaseConfig = {
  apiKey: "AIzaSyCnDNExUxaOHJDkJCbU0x_KjxJCDbmPuuQ",
  authDomain: "giant-1d6c6.firebaseapp.com",
  projectId: "giant-1d6c6",
  storageBucket: "giant-1d6c6.appspot.com",
  messagingSenderId: "419535352577",
  appId: "1:419535352577:web:1a338cd78eb42e52ec2100",
};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
const db = fb.firestore();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const admin = require("firebase-admin");
admin.initializeApp();

exports.createStripeCheckout = functions.https.onCall(async (req, res) => {
  //    Stripe init
  const stripe = require("stripe")(functions.config().stripe.secret_key);

  const {equipo} = req.body;

  let items = [];

  const querySnapshot = await db.collection("partes").get();
  const docs = [];
  querySnapshot.forEach((doc) => {
    docs.push({...doc.data(), id: doc.id, selected: false});
  });

  for (const parte of equipo) {
    const {nombre, precio} = docs.find((doc) => doc.id === parte);
    const item = {
      price_data: {
        currency: "mxn",
        product_data: {
          name: nombre,
        },
        unit_amount: parseFloat(precio) * 100,
      },
      quantity: 1,
    };
    items.push(item);
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: items,
    shipping_address_collection: {
      allowed_countries: ["MX"],
    },
    mode: "payment",
    success_url: "http://localhost:3000/finalizada",
    cancel_url: "https://example.com/cancel",
  });
  return {
    id: session.id,
  };
});
