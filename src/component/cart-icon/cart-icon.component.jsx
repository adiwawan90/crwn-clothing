import React from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import  './cart-icon.styles.scss'

import { connect, useDispatch } from 'react-redux'
import { toggleCardHidden } from "../../redux/cart/cart.action";
// adding reselect to memoize data.
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

// import { addItem } from '../../redux/cart/cart.action'

const CartIcon = ({ toggleCardHidden, itemCount }) => {
  // const dispatch = useDispatch();

  return (
    <div className="cart-icon" onClick={toggleCardHidden}>
      <ShoppingIcon className="shopping-icon" />
      <div className="item-count">{itemCount}</div>
    </div>
  )
}



const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
})

const mapDispatchToProps = dispatch => ({
  toggleCardHidden: () => dispatch(toggleCardHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
