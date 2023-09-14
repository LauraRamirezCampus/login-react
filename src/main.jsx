import React from 'react'
import ReactDOM from 'react-dom/client'
import { Login} from './components/Login.jsx'
import { Registrar } from './components/Registrar.jsx'

import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('login')).render(
  <React.StrictMode>
    
    <App/>
  </React.StrictMode>,
)
