import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { App2 } from './App2'
import Generics from './Generics'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <App2 sendSearchQuery={() => {} }/>
    <Generics />
  </React.StrictMode>,
  document.getElementById('root')
)
