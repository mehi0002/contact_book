import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import App from './App';
import Contacts from './routes/Contacts';
import Contact from './routes/Contact';
import NewContact from './routes/NewContact';
import EditContact from './routes/EditContact';
import './app.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Contacts />
      },
      {
        path: '/contact/:id',
        element: <Contact />
      },
      {
        path: '/new_contact',
        element: <NewContact />
      },
      {
        path: '/contact/:id/edit',
        element: <EditContact />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>)
