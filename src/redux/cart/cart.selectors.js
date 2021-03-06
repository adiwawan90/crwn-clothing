import { createSelector } from 'reselect'

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  // selectCart,
  cartItems => cartItems.reduce(
    (accQty, cartItem) =>
      accQty + cartItem.quantity, 0
  )
)