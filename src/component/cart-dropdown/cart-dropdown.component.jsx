import React from 'react'
import CustomButton from '../custom-button/custom-button.component'

import './cart-dropdown.styles.scss'
import CartIem from '../cart-item/cart-item.component'

import { connect, useSelector } from 'react-redux'
// adding 'reselect
import { selectCartItems } from '../../redux/cart/cart.selectors'

const CartDropdown = ({cartItems}) => {
  // coba pakai useSelector HOOK
  // const cartItemsAll = useSelector(state => state.cart.cartItems) // sama fungsi nya dengan 'selector'

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.map(item => 
            <CartIem key={item.id} item={item} />
          )
        }
        <CustomButton>Go To Checkout</CustomButton>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
})

export default connect(mapStateToProps)(CartDropdown)
