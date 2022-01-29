import { configureStore } from '@reduxjs/toolkit'
import DrawerReducer from '../slices/DrawerSlice'

export const store = configureStore({
  reducer: {
    drawer: DrawerReducer,
  },
})
