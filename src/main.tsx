import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './stores/index'
import App from './App.tsx'
import Loader from './components/loader'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <Provider store={store}>
      <Loader />
      <App />
  </Provider>
)
