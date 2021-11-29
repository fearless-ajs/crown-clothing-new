import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HuczoI3O5RZUfSqWNriNnnNoplfnAetbM1fBmrliWguFV6PzvyiVdefHOzgnxOsEjl9aRLqHmdh0d8zCseIGZYB00QHGA4ycM';

    let onToken;
    onToken = token => {
        console.log(token);
        alert('Payment successful')
    }

    return (
      <StripeCheckout
          label='Pay Now'
          name='CRWN CLOTHING LTD'
          billingAddress
          shippingAddress
          image='https://svgshare.com/i/Cuz.svg'
          description={`Your total is $${price}`}
          amount={priceForStripe}
          panelLabel='Pay Now'
          token={onToken}
          stripeKey={publishableKey}
      />
    );
}

export default StripeCheckoutButton;