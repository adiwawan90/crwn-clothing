import React from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import  './cart-icon.styles.scss'

import { connect } from 'react-redux'
import { toggleCardHidden } from "../../redux/cart/cart.action";

const CartIcon = ({ toggleCardHidden }) => {
  return (
    <div className="cart-icon" onClick={toggleCardHidden}>
      <ShoppingIcon className="shopping-icon" />
      <div className="item-count">0</div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleCardHidden: () => dispatch(toggleCardHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon)
