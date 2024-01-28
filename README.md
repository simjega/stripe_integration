Super simple stripe integration using Stripe checkout and embedded forms:
https://stripe.com/docs/payments/checkout

## setup (local)
0. Create Stripe Account and collect private / publishable api keys (test keys are fine)

1. Setup backend
```bash
  cd server
  poetry install
  STRIPE_API_KEY={YOUR_API_KEY_HERE} python server/api.py
```

2. Setup frontend
```bash
  cd client
  yarn install
  yarn run dev
  # click on the link in the terminal or open browser to http://localhost:5173
  # You should see a payment portal
```

3. Fill out fake payment info and press "pay". Here's Stripe page for test cards: https://stripe.com/docs/testing#cards

4. You should be redirected to a success page that displays the checkout session's id and some basic customer info. 

5. Check your Stripe dashboard to see the payment and customer info.
