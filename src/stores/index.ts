import {configureStore} from '@reduxjs/toolkit'
import auth from './auth'
import loader from './loader'

const store = configureStore({
  reducer: {
    auth,
    loader
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store