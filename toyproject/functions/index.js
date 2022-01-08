const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51KFDvHKb3wvxa1G6V0olyw6AWjg3JLVlY8goCRQNe8KrVtxZK2YfmSmmAHYWfrVar6f6UorZT2vstbmlBvBwPypk0072MTm9S1');
const app = express();

app.use(cors({ origin: true }));
app.use(express.json());


app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
  
    console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);
  
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // subunits of the currency
      currency: "usd",
    });
  
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
      });
    });
    
exports.api = functions.https.onRequest(app);

//http://localhost:5001/toyproject-87096/us-central1/api