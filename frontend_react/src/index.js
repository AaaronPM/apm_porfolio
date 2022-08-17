import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import './index.css'


//ReactDOM.render(<App />,document.getElementById('root'))
//DONT FORGET NEW REACT 18 syntax
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <App/>
)