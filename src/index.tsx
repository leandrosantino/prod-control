import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './App.routes'
import GlobalStyle from './style/global'
import { DialogProvider } from './contexts/dialogContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DialogProvider>
      <GlobalStyle />
      <AppRoutes />
    </DialogProvider>
  </React.StrictMode>,
)
