import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import App from './App.jsx';
import Contacts from './routes/Contacts.jsx';
import Contact from './routes/Contact.jsx';
import NewContact from './routes/NewContact.jsx';
import EditContact from './routes/EditContact.jsx';
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
