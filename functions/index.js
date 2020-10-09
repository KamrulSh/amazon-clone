const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const { request, response } = require('express');
const stripe = require('stripe')('sk_test_51HYZkVJdVG5aoyFy0t5JgS5kfHgWpjkh4bdSsWFDIQxc85Ol3CJu2Kjc2aE4dBlt6DwD2y0tHuwo71c6Sok7Wk7P00zPqqD9zo');

// API

// -- App config
const app = express();

// -- Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// -- API routes
app.get('/', (request, response) => response.status(200).send("Hello world"))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log("Payment received amount: ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
    });

    // OK- created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// -- Listen command
exports.api = functions.https.onRequest(app)

// example endpoint
// http://localhost:5001/clone-react-d7b9d/us-central1/api