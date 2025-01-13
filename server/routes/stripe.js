import express from "express";
import dotenv from "dotenv";
import Stripe from "stripe";

dotenv.config();

const stripe = Stripe(process.env.STRIPE_KEY);

const router = express.Router();

router.post("/payment", (req, res) => {
  console.log("Payment request body:", req.body);
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

export { router as stripeRoute };
