import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Products from './app/Products'
import Register from './app/Products/Forms/Register'
import Edit from './app/Products/Forms/Edit'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Products />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/edit',
    element: <Edit />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
