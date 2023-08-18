import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './stores/index'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import Loader from './components/loader'
import './index.css'
import NotAllowedGeoLocation from './components/notAllowedGeoLocation'

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Loader />
      <NotAllowedGeoLocation />
      <App />
    </BrowserRouter>
  </Provider>
)
