import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false
}

const loader = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    setLoader: (state, action) => {
      state.isLoading = action.payload
    }
  }
})

export const { setLoader } = loader.actions
export default loader.reducer