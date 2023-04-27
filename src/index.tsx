import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './App.routes'

import GlobalStyle from './style/global'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <AppRoutes />
  </React.StrictMode>,
)
