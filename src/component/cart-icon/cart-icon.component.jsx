import React from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import  './cart-icon.styles.scss'

import { connect } from 'react-redux'
import { toggleCardHidden } from "../../redux/cart/cart.action";

const CartIcon = ({ toggleCardHidden, cartCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCardHidden}>
      <ShoppingIcon className="shopping-icon" />
      <div className="item-count">{cartCount}</div>
    </div>
  )
}

const mapStateToProps = ({cart: {cartItems}}) => ({
  cartCount: cartItems.reduce((accQty, cartItem) => accQty + cartItem.quantity ,0),
})

const mapDispatchToProps = dispatch => ({
  toggleCardHidden: () => dispatch(toggleCardHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
