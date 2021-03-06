import { cartActionTypes } from './cart.types'

export const toggleCardHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDEN,
})

export const addItem = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item
})
