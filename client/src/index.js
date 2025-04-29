import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import './index.css';
import Home from './views/Home/Home';
import Name from './Auto/Erection/Name/Name';
import Namedetail from './Auto/Erection/Namedetails/Namedetail';
import Signup from './views/Signup';
import Navbar from './views/Navbar'
import Dashboard from './views/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/name",
    element: <Name/>
  },
  {
    path: "/nameDetail",
    element: <Namedetail/>
  },
  {
    path:"/signup",
    element: <Signup/>
  },
  {
    path:"/navbar",
    element: <Navbar/>
  },
  {
    path:"dashboard",
    element: <Dashboard/>
  }
])
root.render(<RouterProvider router={router} />);
