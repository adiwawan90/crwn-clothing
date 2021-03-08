import { combineReducers } from 'redux'
// imort redux persist
import { persistReducer } from 'redux-persist'
import storage  from 'redux-persist/lib/storage' //ini akan akses ke localStorage windows browser

import userReducer from './user/user-reducer'
import cartReducer from './cart/cart.reducer'
import directoryReducer from './directory/directory.reducer'
import shopReducer from './shop/shop.reducer'

// 
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'] // ini digunakan untuk apa saja yg ingin dimasukkan ke persist! krn user sdh dihandle oleh firbase maka tdk dimasukkan.
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,

});

export default persistReducer(persistConfig, rootReducer)