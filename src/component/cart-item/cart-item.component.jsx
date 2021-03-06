import React from 'react'
import './cart-item.styles.scss'

const CartItem = ({item: { imageUrl, price, name, quantity }}) => {
  // cosnt { imageUrl, price, name } = item;
  return (
    <div className="cart-item">
      <img src={imageUrl} alt={name} srcset=""/>
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">{quantity} x ${price}</span>
      </div>
    </div>
  )
}

export default CartItem
