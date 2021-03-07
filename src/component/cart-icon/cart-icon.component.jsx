import React from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import  './cart-icon.styles.scss'

import { connect } from 'react-redux'
import { toggleCardHidden } from "../../redux/cart/cart.action";
// adding reselect to memoize data.
import { createStructuredSelector } from 'reselect'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

const CartIcon = ({ toggleCardHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCardHidden}>
      <ShoppingIcon className="shopping-icon" />
      <div className="item-count">{itemCount}</div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
  toggleCardHidden: () => dispatch(toggleCardHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
