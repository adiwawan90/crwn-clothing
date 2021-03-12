import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const stripePrice = price * 100;
  const publishKey = 'pk_test_51ITxWgIVSnUSgDxaQ6Z75g4QAUM0p1YlhU58VyYBZa3w9zOqP1Ei8ZAQvJhZhQsNzFoXvrh8BDiZwx1iFMBc2dbp00lxdQIYxl';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful!')
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing"
      image="https://svgshare.com/i/CUz.svg"
      billingAddress
      shippingAddress
      description={`Your Total is ${price}`}
      amount={stripePrice}
      panelLabel={'Pay Now'}
      token={onToken}
      stripeKey={publishKey}
    />
  )
}

export default StripeCheckoutButton;
