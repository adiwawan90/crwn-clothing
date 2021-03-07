export const addItemsToCart = (cartItems, itemsToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === itemsToAdd.id
  )

  if(existingCartItem) {
    return cartItems.map(cartItem => 
      cartItem.id === itemsToAdd.id 
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
      )
  }

  return [...cartItems, {...itemsToAdd, quantity: 1}]
}

export const clearItemFromCart = (cartItems, itemsToClear) => {
  const newCartItem = cartItems.filter(
    cartItem => cartItem.id !== itemsToClear.id
  )

  return newCartItem
}

export const removeItemsFromCart = (cartItems, itemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === itemToRemove.id
  )

  if(existingCartItem.quantity === 1) {
    return cartItems.filter(
      cartItem => cartItem.id !== itemToRemove.id
    )
  }

  return cartItems.map(cartItem => 
    cartItem.id === itemToRemove.id
    ? {...cartItem, quantity: cartItem.quantity - 1}
    : cartItem
  )
}
