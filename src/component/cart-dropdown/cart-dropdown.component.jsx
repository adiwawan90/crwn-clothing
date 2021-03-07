import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import './cart-dropdown.styles.scss'
import CartIem from '../cart-item/cart-item.component'

import { connect, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom';
// adding 'reselect
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCardHidden } from '../../redux/cart/cart.action'

const CartDropdown = ({cartItems, history, dispatch}) => { //disini props dispatch sudah ikut terbawa karena connect()
  // coba pakai useSelector HOOK
  // const cartItemsAll = useSelector(state => state.cart.cartItems) // sama fungsi nya dengan 'selector'
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ?(
          cartItems.map(item => 
            <CartIem key={item.id} item={item} />
          ))
          : (
            <span className="empty-message">Your cart is empty</span>
          )
        }
        <CustomButton onClick={() => {
          history.push('/checkout')
          dispatch(toggleCardHidden())
        }}>Go To Checkout</CustomButton>
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
