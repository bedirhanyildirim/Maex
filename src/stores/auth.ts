import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: false,
  user: {},
  userProfile: {},
  isProfileCompleted: false
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
      state.userProfile = action.payload,
      state.isProfileCompleted = Object.keys(action.payload).length !== 0
    }
  },
})

export const { setUser, setUserProfile } = auth.actions
export default auth.reducer