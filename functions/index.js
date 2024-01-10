const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51OPMDvFSE4NUJxA9HaGwMrUpQuM5LaZXFeyzgx2o1GTFZK5ryXDSKNwwm9MNm7EX2lgqD3mMpSxXHhCBYv2ggt1L00r8EZsZH1"
);
// ...






// const { onRequest } = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");
// http://127.0.0.1:5001/fir-d42bc/us-central1/api

const app = express();
app.use(cors({origin:true}));
app.use(express.json())

app.get("/", (request, response) => response.status(200).send("hello world"));


app.post('/payments/create', async (request, response) => {
  const total = request.query.total;
  console.log("payment requested recieved for this amount >>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
exports.api = functions.https.onRequest(app);
//http://127.0.0.1:5001/fir-d42bc/us-central1/api
