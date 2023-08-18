import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: false,
  user: {},
  userProfile: {},
  isProfileCompleted: false,
  geoLocation: {},
  isGeoLocationAllowed: true
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
    },
    setGeoLocation: (state, action) => {
      state.geoLocation = action.payload
    },
    setGeoLocationAllowed: (state, action) => {
      state.isGeoLocationAllowed = action.payload
    }
  },
})

export const { setUser, setUserProfile, setGeoLocation, setGeoLocationAllowed } = auth.actions
export default auth.reducer