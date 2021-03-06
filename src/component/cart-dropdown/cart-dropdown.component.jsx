import React from 'react'
import CustomButton from '../custom-button/custom-button.component'

import './cart-dropdown.styles.scss'
import CartIem from '../cart-item/cart-item.component'

import { connect } from 'react-redux'

const CartDropdown = ({cartItems}) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.map(item => 
            <CartIem key={item.key} item={item} />
          )
        }
        <CustomButton>Go To Checkout</CustomButton>
      </div>
    </div>
  )
}

const mapStateToProps = ({cart: {cartItems}}) => ({
  cartItems,
})

export default connect(mapStateToProps)(CartDropdown)
