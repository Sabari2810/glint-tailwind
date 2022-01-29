import { createSlice } from '@reduxjs/toolkit'

export const DrawerSlice = createSlice({
  name: 'drawer',
  initialState: {
    isOpened: false,
  },
  reducers: {
    setIsOpened: (state, action) => {
      state.isOpened = action.payload
    },
  },
})

export const { setIsOpened } = DrawerSlice.actions

export const selectIsOpened = (state: any) => state.drawer.isOpened

export default DrawerSlice.reducer
