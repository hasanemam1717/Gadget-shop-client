import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './Router/Router.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvidar from './AuthProvidar/AuthProvidar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvidar>
   <RouterProvider router={router} />
   </AuthProvidar>
  </StrictMode>,
)
