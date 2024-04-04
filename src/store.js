import { configureStore } from '@reduxjs/toolkit'
import userSlice from './reducer/userSlice'
import cartSlice from './reducer/cartSlice'

export default configureStore({
    reducer: {
      user_sec: userSlice,
      cartList: cartSlice
    },
  })