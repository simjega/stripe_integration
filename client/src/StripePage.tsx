import { useEffect, useState } from 'react'
import './App.css'

import { loadStripe } from '@stripe/stripe-js'
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';
import { DefaultService, OpenAPI } from './server';

OpenAPI.BASE = 'http://localhost:8000';

const stripePromise = loadStripe('pk_test_51MXUceFYOTL4vEtpRx1AgYBFlvrBJKNphLl4fB9lWHJofaDyjxCYmU3A3e9qeh5dD4wRDSZ2c6aVDTN5WAVWEFx500lAZZYSSR')

function StripePage() {
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    // Create a Checkout Session as soon as the page loads
    DefaultService.createCheckoutSessionCreateCheckoutSessionPost().then((data) => {
        setClientSecret(data.clientSecret);
        console.log("clientSecret: ", clientSecret)
      });
  }, []);

  const options = {clientSecret};

  return (
    <>
    <div id="checkout">
      {clientSecret && (
        <EmbeddedCheckoutProvider
          stripe={stripePromise}
          options={options}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      )}
    </div>
    </>
  )
}

export default StripePage
