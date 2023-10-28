import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
  totalPrise: 0,
  items: []
 }

const cartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value++
    },
    decrement(state) {
      state.value--
    },
    incrementByAmount(state, action) {
      state.value += action.payload
    },
    addItem(state, action) {
      state.items.push(action.payload)
    },
    remuveItem(state, action) {
      state.items.filter((obj) => obj.id === action.payload)
    },
    clearItem(state,) {
      state.items = [];
    }
  },
})

export const { increment, decrement, incrementByAmount, addItem, remuveItem, clearItem } = cartSlice.actions
export default cartSlice.reducer