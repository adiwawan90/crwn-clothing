import React from 'react'
import './checkout.styles.scss';

// adding selectors & connect from redux
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../component/checkout-item/checkout-item.component';
import CheckoutButton from '../../component/stripe-button/stripe-button.component';
import StripeCheckoutButton from '../../component/stripe-button/stripe-button.component';

const CheckoutPage = ({ cartItems, cartTotal }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      Checkout Page
      {
        cartItems.map(cartItem => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))
      }
      <div className="total">
        <span>TOTAL: $ {cartTotal}</span>
      </div>
      <div className="test-warning">
        *please using testing card number
        <br/>
        4242 4242 4242 4242 exp: 01/22 / 123
      </div>
      <StripeCheckoutButton price={cartTotal} />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)
