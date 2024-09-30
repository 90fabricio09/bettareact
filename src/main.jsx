import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Home from './pages/Home.jsx';
import Sobre from './pages/Sobre.jsx';

import './index.css'
import './tailwind.css'
import './footer.css'
import './navbar.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

const router = createBrowserRouter(
  [{
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: '/sobre', element: <Sobre /> },
    ]
  }]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)