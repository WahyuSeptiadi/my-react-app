import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/login'
import RegisterPage from './pages/registry.jsx'
import ErrorPage from './pages/error.jsx'
import ProductPage from './pages/products.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <p className="text-red-500 flex justify-center h-screen items-center text-xl font-semibold">Please, check your route!</p>,
    errorElement: <ErrorPage title="Upsss, 404 :(" message="Sorry, an unexpected error has occurred" />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/products',
    element: <ProductPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
