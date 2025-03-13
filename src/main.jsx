import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
const router = createBrowserRouter([
  {
    path: '/login',
    element: <div>登录页</div>
  },
  {
    path: '/article',
    element: <div>文章页</div>
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)
