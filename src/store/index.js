import { configureStore } from '@reduxjs/toolkit'
import counter from './slice/cartSlice'

export const store = configureStore({
  reducer: {
    counter
  },
})