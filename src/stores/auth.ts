import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: false,
  user: {},
  userProfile: {}
}

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
      state.isLoggedIn = Object.keys(action.payload).length !== 0
    },
    setUserProfile: (state, action) => {
      state.userProfile = action.payload
    }
  },
})

export const { setUser, setUserProfile } = auth.actions
export default auth.reducer