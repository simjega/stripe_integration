
# use fastapi
from fastapi import FastAPI
# handle CORS
from fastapi.middleware.cors import CORSMiddleware
# use pydantic for data validation
from pydantic import BaseModel

import stripe

# Initialize the FastAPI app
app = FastAPI()



# Set your Stripe API key
import os
# fail if STRIPE_API_KEY is not set
assert os.environ.get("STRIPE_API_KEY"), "STRIPE_API_KEY is not set"
stripe.api_key = os.environ.get("STRIPE_API_KEY")

# Set up CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["POST"],
    allow_headers=["*"],
)

class CreateCheckoutSessionResponse(BaseModel):
  clientSecret: str

# Create checkout session
@app.post("/create-checkout-session")
async def create_checkout_session():
    checkout_session = stripe.checkout.Session.create(
        line_items=[
            {
                "price": "price_1OczCNFYOTL4vEtphlbSvPYm",
                "quantity": 1
            }
        ],
        mode="payment",
        ui_mode="embedded",
        return_url="http://localhost:5173/success?sessionId={CHECKOUT_SESSION_ID}",
    )
    return CreateCheckoutSessionResponse(clientSecret=checkout_session.client_secret)

class SessionStatusResponse(BaseModel):
  status: str
  customerEmail: str

@app.get('/session-status', response_model=SessionStatusResponse)
def session_status(session_id):
  session = stripe.checkout.Session.retrieve(session_id)

  return SessionStatusResponse(
    status=session.status,
    customerEmail=session.customer_details.email,
  )


if __name__ == "__main__":
    # run in dev mode
    import uvicorn
    uvicorn.run("api:app", host="localhost", port=8000, reload=True)

