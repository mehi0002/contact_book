import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import App from './src/App.jsx';
import Contacts from './src/routes/Contacts.jsx';
import Contact from './src/routes/Contact.jsx';
import NewContact from './src/routes/NewContact.jsx';
import EditContact from './src/routes/EditContact.jsx';
import './src/app.css';

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
